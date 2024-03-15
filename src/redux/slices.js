import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { fetchContacts, addContact, deleteContact } from './operation';

fetchContacts();

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

const loadingHandler = state => {
  state.isLoading = !state.isLoading;
};

const errorHandler = (state, action) => {
  state.error = action.payload;
  state.isLoading = !state.isLoading;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, loadingHandler)
      .addCase(fetchContacts.rejected, errorHandler)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(addContact.pending, loadingHandler)
      .addCase(addContact.rejected, errorHandler)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, loadingHandler)
      .addCase(deleteContact.rejected, errorHandler)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload.id);
        state.error = null;
        state.isLoading = false;
      });
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

export const contactsReducer = contactsSlice.reducer;

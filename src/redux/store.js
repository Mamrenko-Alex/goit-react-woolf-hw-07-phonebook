import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './slices';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

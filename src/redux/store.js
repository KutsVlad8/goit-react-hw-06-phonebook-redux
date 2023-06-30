import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reduser';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: '',
  },
});

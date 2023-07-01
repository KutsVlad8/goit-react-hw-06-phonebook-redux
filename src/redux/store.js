import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reduser';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

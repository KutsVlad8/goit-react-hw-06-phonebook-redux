import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
import { addContact, deleteContact } from './actions';

const contactsInitialState = [
  { id: 0, name: 'Learn HTML and CSS', number: '123' },
  { id: 1, name: 'Get good at JavaScript', number: '123' },
  { id: 2, name: 'Master React', number: '123' },
  { id: 3, name: 'Discover Redux', number: '123' },
  { id: 4, name: 'Build amazing apps', number: '123' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

// export const filterReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });

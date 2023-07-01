import { createReducer } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
import { addContact, deleteContact, filter } from './actions';

const contactsInitialState = [
  { id: 0, name: 'Learn HTML and CSS', number: '123' },
  { id: 1, name: 'Get good at JavaScript', number: '123' },
];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filtersInitialState = '';

export const filterReducer = createReducer(filtersInitialState, {
  [filter]: (state, action) => {
    console.log(action.payload);
    // const filtred = state.filter(contact => contact.name === action.payload);
    state = action.payload;
  },
});

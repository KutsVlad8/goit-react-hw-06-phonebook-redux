import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 'AXZJ6dTYtrgo1GxZ-CeYj', name: 'Rosie Simpson', number: '12344543' },
  { id: 'mxeCPu1jkcLYT9gVx-k9K', name: 'margo', number: '907865' },
  { id: 'BsFTo4cDfn9NEO6ZU6QD6', name: 'vlad', number: '98765' },
  { id: 'AdsPfu04_Z3eMEeGHi8m', name: 'nazar', number: '98764567' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

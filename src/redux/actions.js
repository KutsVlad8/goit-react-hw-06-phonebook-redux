import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        id: nanoid(2),
        name,
        number,
      },
    };
  }
);
export const deleteContact = createAction('contacts/removeContact');
export const filter = createAction('filter/setFilter');

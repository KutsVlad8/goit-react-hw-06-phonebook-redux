// !=============redux============
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactList, ContactListItem, Button } from './ContactsList.styled';

export const ContactsListRedux = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts);
  console.log(filter);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  const getVisibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ContactList>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDeleteContact(contact.id)}>delete</Button>
        </ContactListItem>
      ))}
    </ContactList>
  );
};

// import PropTypes from 'prop-types';

// export const ContactsList = ({ visibleContacts, onDelete }) => {
//   return (
//     <ContactList>
//       {visibleContacts.map(contact => (
//         <ContactListItem key={contact.id}>
//           {contact.name}: {contact.number}
//           <Button
//             type="button"
//             onClick={() => {
//               onDelete(contact.id, contact.name);
//             }}
//           >
//             delete
//           </Button>
//         </ContactListItem>
//       ))}
//     </ContactList>
//   );
// };

// ContactsList.propTypes = {
//   visibleContacts: PropTypes.array,
//   onDelete: PropTypes.func,
// };

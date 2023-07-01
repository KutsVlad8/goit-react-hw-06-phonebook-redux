// !=============redux============
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { ContactList, ContactListItem, Button } from './ContactsList.styled';

export const ContactsListRedux = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter.query);
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

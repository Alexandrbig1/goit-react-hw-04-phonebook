import ContactItems from "../ContactItems/ContactItems";
import { Menu } from "./ContactsList.styled";

export default function ContactsList({
  contacts,
  onDeleteHandler,
  filteredContacts,
  searchTerm,
}) {
  return (
    <Menu className="contact-menu">
      {filteredContacts.length === 0 && searchTerm.length > 0 ? (
        <li className="contact-list">No matching contacts found</li>
      ) : filteredContacts.length > 0 ? (
        filteredContacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : contacts.length !== 0 ? (
        contacts.map(({ contact, phoneNumber, id }) => (
          <ContactItems
            key={id}
            id={id}
            contact={contact}
            phoneNumber={phoneNumber}
            onDeleteHandler={onDeleteHandler}
          />
        ))
      ) : (
        ""
      )}
    </Menu>
  );
}

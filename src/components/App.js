import { useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from "./App.styled";
import {
  AppButton,
  AppButtonOpen,
  AppButtonClose,
} from "./AppButton/AppButton";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  function onFormSubmit(contact) {
    const contactExist = contacts.some(
      (item) => item.contact === contact.contact
    );

    if (contactExist) {
      alert(`${contact.contact} is already in contacts.`);
    } else {
      setContacts((contacts) => [...contacts, contact]);
    }
  }

  function onDeleteHandler(id) {
    setContacts((contact) => contact.filter((item) => item.id !== id));
    setFilteredContacts((contact) => contact.filter((item) => item.id !== id));
  }

  function onInputHandler(e) {
    const searchTerm = e.toLowerCase();
    setSearchTerm(searchTerm);

    const filtered = contacts.filter((item) =>
      item.contact.toLowerCase().includes(searchTerm)
    );
    setFilteredContacts(filtered);
  }

  return (
    <AppContainer>
      <AppWrapper open={isOpen}>
        <AppButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
        </AppButton>
        <AppDiv>
          {isOpen && (
            <>
              <AppTitleH1>Phonebook</AppTitleH1>
              <FormSubmit onFormSubmit={onFormSubmit} />
              {contacts.length !== 0 && (
                <AppContactsDiv>
                  <AppTitleH2>Contacts</AppTitleH2>
                  <Filter contacts={contacts} onInputHandler={onInputHandler} />
                  <ContactsList
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filteredContacts={filteredContacts}
                    contacts={contacts}
                    onDeleteHandler={onDeleteHandler}
                  />
                </AppContactsDiv>
              )}
            </>
          )}
        </AppDiv>
      </AppWrapper>
    </AppContainer>
  );
}

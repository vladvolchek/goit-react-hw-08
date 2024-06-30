import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";


export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

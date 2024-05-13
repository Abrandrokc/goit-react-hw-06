import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
import { item } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";


export default function ContactList() {
  const contacts = useSelector(item)
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return (
    <ul className={css.ul}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact}  />
      ))}
    </ul>
  );
   
}
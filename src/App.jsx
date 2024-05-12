import { useState, useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid/non-secure'
import ContactForm from './components/ContactForm/ContactForm';
import { GetItems } from './redux/contactsSlice';

function App() {
   
  

  
  return <div>
    <h1>Phonebook</h1>
    <ContactForm  />
    <SearchBox />
    <ContactList  />
  </div>
}

export default App

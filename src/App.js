import React, {useState} from 'react';
import './App.css';

import Header from "./components/Header";
import AddContant from "./components/AddContent";
import ContactList from "./components/ContentList";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContentHandler =(contact) => {
    console.log(contact)
    setContacts([...contacts, contact]);
  }

  return (
    <div className='ui container'>
        <Header />
        <AddContant addContentHandler =  {addContentHandler} />
        <ContactList contacts = {contacts}/>
    </div>
  );  
}

export default App;

import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App() {
  return (
    <div>
      <h1 style={{ color: '#C70039' }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ color: '#C70039' }}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;

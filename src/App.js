import React from "react";
import { connect } from "react-redux";
import "./App.css";
// import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchForm from "./components/SearchForm/SearchForm";

const App = ({ contacts }) => {
  // state = {
  // contacts: [],
  // filter: "",
  // };
  // построение из localStorage
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   if (contacts) {
  //     const parsContacts = JSON.parse(contacts);
  //     this.setState({ contacts: parsContacts });
  //   } else {
  //     return;
  //   }
  // }
  //
  // componentDidUpdate(prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }
  // проверка на совпадение
  // checkContact = (name) => {
  //   return this.state.contacts.some(
  //     (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  // };

  // добавление контакта !~
  // addContact = ({ name, number }) => {
  //   const contact = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   if (this.checkContact(name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   } else {
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   }
  // };

  // удаление контакта !!
  // deleteContact = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter(
  //       (contact) => contact.id !== contactId
  //     ),
  //   }));
  // };

  // рендер списка !!
  // renderContacts = () => {
  //   const lowerName = this.state.filter.toLowerCase();
  //   return this.state.contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(lowerName)
  //   );
  // };

  // фильтр !!
  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  // const rendered = this.renderContacts();
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      {/* <ContactForm addContact={this.addContact} /> */}
      {contacts.length > 1 && <SearchForm />}
      {/* <SearchForm filter={this.state.filter} inputForm={this.changeFilter} /> */}
      <ContactList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.items.contacts,
});

export default connect(mapStateToProps)(App);

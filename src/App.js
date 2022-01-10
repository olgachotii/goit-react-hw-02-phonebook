import "./App.css";
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/Contact";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handlChenge = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  findContact = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  formSubmitHandler = (data) => {
    if (this.state.contacts.find((contact) => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [data, ...prevState.contacts],
      }));
    }
  };

  deliteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handlChenge} />
        <ContactList
          data={this.findContact()}
          deliteContact={this.deliteContact}
        />
      </>
    );
  }
}

export default App;

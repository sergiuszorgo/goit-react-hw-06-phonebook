import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import phonebookActions from "../../redux/phonebook-actions";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={s.ContactBox}>
    <h2>Contacts: {contacts.length}</h2>
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <p className={s.ContactListName}>
            {name}: {number}
          </p>
          <button className={s.contBtn} onClick={() => deleteContact(id)}>
            —
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  contacts: state.items.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};

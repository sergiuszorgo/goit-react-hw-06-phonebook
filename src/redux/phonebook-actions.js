import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";
// import types from "./phonebook-types";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction("contact/delete");

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction("contact/changeFilter");

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };

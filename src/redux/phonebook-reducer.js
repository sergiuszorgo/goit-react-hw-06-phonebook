import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import types from "./phonebook-types";
import actions from "./phonebook-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const checkDublicat = state.filter(
      (contact) => payload.name === contact.name
    );
    if (checkDublicat.length) {
      alert(`${payload.name} - present in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});

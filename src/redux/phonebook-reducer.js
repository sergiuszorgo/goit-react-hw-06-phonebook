import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
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

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

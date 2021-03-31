import { nanoid } from "nanoid";
import types from "./phonebook-types";

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export default { addContact };

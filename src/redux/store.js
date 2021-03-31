import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./phonebook-reducer";

const rootReducer = combineReducers({
  items: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

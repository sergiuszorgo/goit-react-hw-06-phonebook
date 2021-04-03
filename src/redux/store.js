// import { combineReducers } from "redux";
// import { createStore, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
import contactsReducer from "./phonebook-reducer";

// const rootReducer = combineReducers({
//   items: contactsReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    items: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
export default store;

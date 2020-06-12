import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  categories: categoryReducer,
  selectedCategory: "selected",
  isLoggedIn: "true",
  settings: "settingsObj",
  form: formReducer,
});

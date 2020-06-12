import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import categoryReducer from "./categoryReducer";
import selectCategoryReducer from "./selectCategoryReducer";

export default combineReducers({
  categories: categoryReducer,
  selected: selectCategoryReducer,
  isLoggedIn: "true",
  settings: "settingsObj",
  form: formReducer,
});

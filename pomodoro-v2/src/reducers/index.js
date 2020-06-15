import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import categoryReducer from "./categoryReducer";
import selectCategoryReducer from "./selectCategoryReducer";
import selectedTask from "./selectedTaskReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  categories: categoryReducer,
  selected: selectCategoryReducer,
  isLoggedIn: "true",
  user: "testUser",
  settings: settingsReducer,
  form: formReducer,
  selectedTask,
});

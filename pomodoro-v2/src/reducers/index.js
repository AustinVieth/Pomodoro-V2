import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import categoryReducer from "./categoryReducer";
import selectCategoryReducer from "./selectCategoryReducer";
import selectedTask from "./selectedTaskReducer";
import settingsReducer from "./settingsReducer";
import authReducer from "./authReducer";

export default combineReducers({
  categories: categoryReducer,
  selected: selectCategoryReducer,
  auth: authReducer,
  settings: settingsReducer,
  form: formReducer,
  selectedTask,
});

import md5 from "md5";
import _ from "lodash";

import {
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  SELECT_CATEGORY,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  FETCH_CATEGORIES,
  DELETE_CATEGORY,
} from "./types";

export const createCategory = (category) => async (dispatch) => {
  dispatch({
    type: CREATE_CATEGORY,
    payload: {
      category,
      tasks: [],
    },
  });
};

export const selectCategory = (categoryName) => (dispatch, getState) => {
  //find category using lookup and return the category
  const category = getState().categories[categoryName];

  dispatch({
    type: SELECT_CATEGORY,
    payload: category,
  });
};

export const fetchCategory = (categoryName) => async (dispatch, getState) => {
  const { categories } = getState().categories;
  const foundCategory = categories[categoryName];

  dispatch({
    type: FETCH_CATEGORY,
    payload: foundCategory,
  });
};

export const fetchCategories = () => async (dispatch, getState) => {
  //normally would make a API call here to GET categories
  const categories = getState().categories;

  dispatch({
    type: FETCH_CATEGORIES,
    payload: categories,
  });
};

export const deleteCategory = (categoryName) => (dispatch, getState) => {
  //normally would make an API call here to DELETE a specific category
  // axios.delete('/categories/categoryName');

  dispatch({
    type: DELETE_CATEGORY,
    payload: categoryName,
  });
};

export const createTask = (categoryName, taskName) => (dispatch, getState) => {
  //normally this would be a patch request
  let category = getState().categories[categoryName];
  const id = md5(taskName);

  category.tasks.push({ id, description: taskName, pomodoroCount: 1 });

  dispatch({
    type: CREATE_TASK,
    payload: category,
  });
};

export const deleteTask = (taskId) => (dispatch, getState) => {
  //normally this would be a patch request
  const category = getState().selected;
  category.tasks = category.tasks.filter(({ id }) => {
    return id !== taskId;
  });

  dispatch({
    type: DELETE_TASK,
    payload: category,
  });
};

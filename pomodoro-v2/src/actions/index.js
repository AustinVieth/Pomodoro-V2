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
  SELECT_TASK,
  UPDATE_SETTINGS,
  SIGN_IN,
  SIGN_OUT,
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

  if (
    category.tasks.findIndex(({ id: currentId }) => currentId === id) === -1
  ) {
    category.tasks.push({ id, description: taskName, pomodoroCount: 1 });
  }

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

export const updateTask = (taskId, pomodoroCount) => (dispatch, getState) => {
  if (pomodoroCount < 0) {
    pomodoroCount = 0;
  }

  //normally would be a patch request

  let category = getState().selected;
  let task = category.tasks.find(({ id }) => id === taskId);
  task.pomodoroCount = pomodoroCount;

  dispatch({
    type: UPDATE_TASK,
    payload: { ...category },
  });
};

export const selectTask = (taskId) => (dispatch, getState) => {
  //normally would be a get request
  let category = getState().selected;
  let task = category.tasks.find(({ id }) => id === taskId);
  if (!task) {
    task = {};
  }

  dispatch({
    type: SELECT_TASK,
    payload: task,
  });
};

export const updateSettings = (settings) => (dispatch, getState) => {
  //you would lookup the current user and then return the current users settings + the new settings object but for now, just returning the old settings obj + new settings obj

  const oldSettings = getState().settings;

  dispatch({
    type: UPDATE_SETTINGS,
    payload: { ...oldSettings, ...settings },
  });
};

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

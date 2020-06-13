import {
  CREATE_CATEGORY,
  FETCH_CATEGORY,
  SELECT_CATEGORY,
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
} from "./types";

import md5 from "md5";

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

export const createTask = (categoryName, taskName) => (dispatch, getState) => {
  let category = getState().categories[categoryName];
  const id = md5(taskName);

  category.tasks.push({ id, description: taskName, pomodoroCount: 1 });

  dispatch({
    type: CREATE_TASK,
    payload: category,
  });
};

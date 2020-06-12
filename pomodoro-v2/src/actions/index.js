import { CREATE_CATEGORY, FETCH_CATEGORY, SELECT_CATEGORY } from "./types";
import { v4 as uuidv4 } from "uuid";

export const createCategory = (category, tasks) => async (dispatch) => {
  dispatch({
    type: CREATE_CATEGORY,
    payload: {
      category,
      tasks,
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

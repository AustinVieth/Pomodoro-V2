import { CREATE_CATEGORY } from "./types";

export const createCategory = (category, tasks) => {
  return {
    type: CREATE_CATEGORY,
    payload: {
      category,
      tasks,
    },
  };
};

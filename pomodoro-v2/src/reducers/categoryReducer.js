import _ from "lodash";

import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  CREATE_TASK,
} from "../actions/types";

export default (
  state = {
    Category: {
      category: "Category",
      tasks: [{ id: "0", description: "Create Your First Task" }],
    },
  },
  action
) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload };
    case FETCH_CATEGORIES:
      return;
    case CREATE_TASK:
      return { ...state, [action.payload.category]: action.payload };
    default:
      return state;
  }
};

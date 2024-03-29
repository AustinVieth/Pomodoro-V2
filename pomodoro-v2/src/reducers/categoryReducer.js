import _ from "lodash";

import {
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  CREATE_TASK,
  DELETE_TASK,
  DELETE_CATEGORY,
  UPDATE_TASK,
} from "../actions/types";

export default (
  state = {
    Category: {
      category: "Category",
      tasks: [
        { id: "0", description: "Create Your First Task", pomodoroCount: 1 },
      ],
    },
  },
  action
) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload };
    case FETCH_CATEGORIES:
      return { ...state, ...action.payload };
    case CREATE_TASK:
      return { ...state, [action.payload.category]: action.payload };
    case DELETE_TASK:
      return { ...state, [action.payload.category]: action.payload };
    case DELETE_CATEGORY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

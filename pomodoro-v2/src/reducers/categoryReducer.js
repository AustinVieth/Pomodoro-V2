import _ from "lodash";

import { CREATE_CATEGORY } from "../actions/types";

export default (
  state = {
    category1: {
      category: "category1",
      tasks: [{ id: 0, title: "do something" }],
    },
  },
  action
) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return { ...state, [action.payload.category]: action.payload };
    default:
      return state;
  }
};

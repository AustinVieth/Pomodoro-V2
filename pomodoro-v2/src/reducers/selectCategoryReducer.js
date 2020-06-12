import { SELECT_CATEGORY } from "../actions/types";

export default (
  state = {
    category: "Category",
    tasks: [{ id: 0, description: "Create Your First Task" }],
  },
  action
) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

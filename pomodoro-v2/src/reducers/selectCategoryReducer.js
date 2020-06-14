import { SELECT_CATEGORY, UPDATE_TASK } from "../actions/types";

export default (
  state = {
    category: "Category",
    tasks: [{ id: 0, description: "Create Your First Task", pomodoroCount: 1 }],
  },
  action
) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;
    case UPDATE_TASK:
      return action.payload;
    default:
      return state;
  }
};

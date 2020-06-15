import { UPDATE_SETTINGS } from "../actions/types";

export default (
  state = {
    activeTime: 0.1,
    breakTime: 0.05,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return action.payload;
    default:
      return state;
  }
};

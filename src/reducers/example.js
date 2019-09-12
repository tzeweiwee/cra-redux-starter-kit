import {
  STORE_EXAMPLES,
} from "../actions/example/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case STORE_EXAMPLES:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

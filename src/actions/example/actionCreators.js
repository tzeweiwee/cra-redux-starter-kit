import {
  START_GET_EXAMPLES,
  STORE_EXAMPLES,
  END_GET_EXAMPLES
} from "./actionTypes";

export const getExamplesAction = () => {
  return {
    type: START_GET_EXAMPLES
  };
};

export const storeExamplesAction = (payload) => {
  return {
    type: STORE_EXAMPLES,
    payload
  };
};

export const endExamplesAction = () => {
  return {
    type: END_GET_EXAMPLES
  };
};

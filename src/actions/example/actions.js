import {
  getExamplesAction,
  storeExamplesAction,
  endExamplesAction
} from "./actionCreators";

const mockExamples = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          title: "example 1",
          price: "1000.00",
          currency: "RM"
        },
        {
          title: "example 2",
          price: "2000.00",
          currency: "RM"
        }
      ]);
    }, 2000);
  });
};

export const getExamples = () => async dispatch => {
  dispatch(getExamplesAction());
  const response = await mockExamples();
  dispatch(storeExamplesAction(response));
  dispatch(endExamplesAction());
};

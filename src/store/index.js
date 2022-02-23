import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
      };
    case "increment":
      return {
        counter: ++state.counter,
      };
    case "decrement":
      return {
        counter: --state.counter,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

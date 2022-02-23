import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};
const counterReducer = (state = initialState, action) => {
  const prevState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "reset":
      prevState["counter"] = 0;
      break;
    case "increment":
      prevState["counter"] = ++state.counter;
      break;
    case "decrement":
      prevState["counter"] = --state.counter;
      break;
    case "toggle":
        prevState['showCounter'] = action.value
        break;
    default:
      break;
  }
  return prevState;
};

const store = createStore(counterReducer);

export default store;

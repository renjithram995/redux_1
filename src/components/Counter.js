import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchStore = useDispatch();
  const { counter, showCounter }= useSelector((state) => state);

  const toggleCounterHandler = () => {
    dispatchStore({
      type: "toggle",
      value: !showCounter
    });
  };

  const toggleCounterValue = (isIncrement) => {
    if (isIncrement) {
      dispatchStore({
        type: "increment",
      });
    } else {
      dispatchStore({
        type: "decrement",
      });
    }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={toggleCounterValue.bind(null, true)}>Increment</button>
        <button onClick={toggleCounterValue.bind(null, false)}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

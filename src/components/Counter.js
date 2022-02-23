import { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";

class Counter extends Component {
  toggleCounterValue (isIncrement) {
    if (isIncrement) {
      this.props.increment()
    } else {
      this.props.decrement()
    }
  };
  toggleCounterHandler () {}
  render () {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counterValue}</div>
        <div>
          <button onClick={this.toggleCounterValue.bind(this, true)}>Increment</button>
          <button onClick={this.toggleCounterValue.bind(this, false)}>
            Decrement
          </button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToPros = (state) => {
  return {
    counterValue: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment'}),
    decrement: () => dispatch({ type: 'decrement'})
  }
}

export default connect(mapStateToPros, mapDispatchToProps)(Counter);

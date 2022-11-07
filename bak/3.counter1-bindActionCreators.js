import React from "react";
import { bindActionCreators } from "../redux";
import store from "../store";

const add = () => {
  return { type: "ADD"};
};
const minus = () => {
  return { type: "MINUS" };
};
const actionCreators = {
  add,
  minus,
};

const actions = bindActionCreators(actionCreators, store.dispatch);
class Counter1 extends React.Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={actions.add}>+</button>
        <button onClick={actions.minus}>-</button>
      </div>
    );
  }
}

export default Counter1;

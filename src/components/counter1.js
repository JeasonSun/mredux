import React from "react";
import { bindActionCreators } from "../redux";
import store from "../store";
import count1Actions from '../store/actions/counter1'

const actions = bindActionCreators(count1Actions, store.dispatch);
console.log(actions, store.getState())
class Counter1 extends React.Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter1.number });
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

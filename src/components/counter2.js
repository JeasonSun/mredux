import React from "react";
import { bindActionCreators } from "../redux";
import store from "../store";
import count2Actions from '../store/actions/counter2'

const actions = bindActionCreators(count2Actions, store.dispatch);
console.log(actions)
class Counter2 extends React.Component {
  state = {
    number: 0,
  };
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter2.number });
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

export default Counter2;

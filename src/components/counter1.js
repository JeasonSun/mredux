import React from "react";
import { connect } from "../react-redux";
import actions from "../store/actions/counter1";
class Counter1 extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.counter1;
const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);

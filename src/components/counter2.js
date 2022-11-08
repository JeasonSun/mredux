import React from "react";
import { useBoundDispatch, useSelector } from "../react-redux";
import actions from "../store/actions/counter2";
// class Counter2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>{this.props.number}</p>
//         <button onClick={this.props.add}>+</button>
//         <button onClick={this.props.minus}>-</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => state.counter2;
// const mapDispatchToProps = actions;

// export default connect(mapStateToProps, mapDispatchToProps)(Counter2);

function Counter2() {
  const { number } = useSelector((state) => state.counter2);
  // const dispatch = useDispatch();
  const boundActions = useBoundDispatch(actions);
  return (
    <div>
      <p>{number}</p>
      <button onClick={boundActions.add}>+</button>
      <button onClick={boundActions.minus}>-</button>
    </div>
  );
}

export default Counter2;

import { createStore } from "../redux";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return (state = { number: state.number + 1 });
    case "MINUS":
      return (state = { number: state.number - 1 });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

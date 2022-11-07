import * as TYPES from "../action-types";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD2:
      return (state = { number: state.number + 2 });
    case TYPES.MINUS2:
      return (state = { number: state.number - 2 });
    default:
      return state;
  }
}

export default reducer;

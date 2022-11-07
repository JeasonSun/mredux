import * as TYPES from "../action-types";

const initialState = { number: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD1:
      return (state = { number: state.number + 1 });
    case TYPES.MINUS1:
      return (state = { number: state.number - 1 });
    default:
      return state;
  }
}

export default reducer;

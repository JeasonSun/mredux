import * as TYPES from "../action-types";

const actions = {
  add() {
    return { type: TYPES.ADD1 };
  },
  minus() {
    return { type: TYPES.MINUS1 };
  },
  thunkAdd() {
    return function (dispatch, getState) {
      setTimeout(() => {
        dispatch({ type: TYPES.ADD1 });
      }, 2000);
    };
  },
};

export default actions;

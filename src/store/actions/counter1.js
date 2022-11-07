import * as TYPES from "../action-types";

const actions = {
  add() {
    return { type: TYPES.ADD1 };
  },
  minus() {
    return { type: TYPES.MINUS1 };
  },
};

export default actions;

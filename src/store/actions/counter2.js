import * as TYPES from "../action-types";

const actions = {
  add() {
    return { type: TYPES.ADD2 };
  },
  minus() {
    return { type: TYPES.MINUS2 };
  },
};

export default actions;

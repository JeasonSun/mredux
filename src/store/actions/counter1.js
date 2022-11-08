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
  promise1() {
    return new Promise((resolve, reject) => {
      const rnd = Math.random();
      if (rnd > 0.5) {
        resolve({ type: TYPES.ADD1 });
      } else {
        reject({ type: TYPES.MINUS1 });
      }
    });
  },
  promise2() {
    return {
      type: TYPES.ADD1,
      payload: new Promise((resolve, reject) => {
        const rnd = Math.random();
        if (rnd > 0.5) {
          resolve(rnd);
        } else {
          reject(rnd);
        }
      }),
    };
  },
};

export default actions;

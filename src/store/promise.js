function promise({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // 直接return了一个promise
      if (action.then && typeof action.then === "function") {
        action.then(dispatch).catch(dispatch);
      } else if (action.payload && typeof action.payload.then === "function") {
        // return {type: '', payload: new Promise}
        action.payload
          .then((result) => dispatch({ ...action, payload: result }))
          .catch((error) =>
            dispatch({ ...action, payload: error, error: true })
          );
      } else {
        next(action);
      }
    };
  };
}

export default promise;

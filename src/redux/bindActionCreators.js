function bindActionCreator(actionCreator, dispatch) {
  return function (...args) {
    return dispatch(actionCreator.apply(this, args));
  };
}

function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }

  let boundActions = {};
  for (let key in actionCreators) {
    const actionCreator = actionCreators[key];
    boundActions[key] = bindActionCreator(actionCreator, dispatch);
  }
  return boundActions;
}

export default bindActionCreators;

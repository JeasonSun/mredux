const createStore = (reducer) => {
  let state;
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  function getState() {
    return state;
  }

  setTimeout(() => {
    dispatch({ type: "@@REDUX/INIT" });
  });
  return {
    getState,
    dispatch,
    subscribe,
  };
};

export default createStore;

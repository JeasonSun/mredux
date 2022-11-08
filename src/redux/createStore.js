const createStore = (reducer ,preloadedState, enhancer) => {
  if(typeof enhancer !== "undefined"){
    return enhancer(createStore)(reducer, preloadedState)
  }
  let state = preloadedState;
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

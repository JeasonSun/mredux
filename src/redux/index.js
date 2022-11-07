export function createStore(reducer) {
  let state;
  let listeners = [];

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
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
}

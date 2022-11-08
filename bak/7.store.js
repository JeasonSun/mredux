import { createStore } from "../redux";
import combinedReducers from "./reducers";

// const store = createStore(combinedReducers);
const store = applyMiddleware(logger)(createStore)(combinedReducers);

function applyMiddleware(logger) {
  return function (createStore) {
    return function (reducers) {
      const store = createStore(reducers);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      dispatch = logger(middlewareAPI)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

function logger({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      console.log("prev state", getState());
      next(action);
      console.log("next state", getState());
      return action;
    };
  };
}

export default store;

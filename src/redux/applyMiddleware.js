import compose from "./compose";

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducers, initialState) {
      const store = createStore(reducers, initialState);
      let dispatch;
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  };
}

export default applyMiddleware;

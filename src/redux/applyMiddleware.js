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

export default applyMiddleware;

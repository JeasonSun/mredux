import { useContext, useLayoutEffect, useReducer } from "react";
import { ReactReduxContext } from "../ReactReduxContext";

function useSelectorWithStore(selector, store) {
  const { getState, subscribe } = store;
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  // store.state一旦变化，就要强制更新组件。
  useLayoutEffect(() => {
    subscribe(forceUpdate);
  }, [subscribe]);
  const state = getState();
  const selectedState = selector(state);
  return selectedState;
}

function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const selectedState = useSelectorWithStore(selector, store);
  return selectedState;
}
export default useSelector;

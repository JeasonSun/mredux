import { useContext } from "react";
import { bindActionCreators } from "../../redux";
import { ReactReduxContext } from "../ReactReduxContext";

function useBoundDispatch(actions) {
  const { store } = useContext(ReactReduxContext);
  const { dispatch } = store;
  const boundDispatch = bindActionCreators(actions, dispatch);
  return boundDispatch;
}
export default useBoundDispatch;

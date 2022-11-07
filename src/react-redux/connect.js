import { useContext, useLayoutEffect, useMemo, useReducer } from "react";
import { bindActionCreators } from "../redux";
import { ReactReduxContext } from "./ReactReduxContext";

function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    return function (props) {
      // 取到context上的store
      // 处理mapStateToProps,mapDispatchToProps
      const { store } = useContext(ReactReduxContext);

      const { getState, dispatch, subscribe } = store;
      const prevState = getState();
      const stateProps = useMemo(() => mapStateToProps(prevState), [prevState]);
      let dispatchProps = useMemo(() => {
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        } else {
          dispatchProps = { dispatch };
        }
        return dispatchProps;
      }, [dispatch]);

      const [, forceUpdate] = useReducer((x) => x + 1, 0);
      useLayoutEffect(() => {
        subscribe(forceUpdate);
      }, [subscribe]);
      return <OldComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}

export default connect;

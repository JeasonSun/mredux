import { createStore, applyMiddleware } from "../redux";
import combinedReducers from "./reducers";
import logger from "./logger";
import thunk from "./thunk";
import promise from "./promise";

// const store = createStore(combinedReducers);

// const store = applyMiddleware(promise, thunk, logger)(createStore)(
//   combinedReducers
// );

/**------------------------------**/
const initialState = { counter1: { number: 10 }, counter2: { number: 20 } };
const store = createStore(
  combinedReducers,
  initialState,
  applyMiddleware(thunk, promise, logger)
);

export default store;

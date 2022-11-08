import { createStore, applyMiddleware } from "../redux";
import combinedReducers from "./reducers";
// import logger from "./logger";
import thunk from "./thunk";

// const store = createStore(combinedReducers);
const store = applyMiddleware(thunk)(createStore)(combinedReducers);

export default store;

import { createStore, applyMiddleware } from "../redux";
import combinedReducers from "./reducers";
// import logger from "./logger";
import thunk from "./thunk";
import promise from "./promise";

// const store = createStore(combinedReducers);
const store = applyMiddleware(promise)(createStore)(combinedReducers);

export default store;

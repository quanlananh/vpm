import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import makeRootReducer from "./Reducers";

// const middleware = applyMiddleware(thunk, promise, logger);
const middleware = applyMiddleware(thunk, promise);
const Store = createStore(makeRootReducer(), middleware);

export default Store;

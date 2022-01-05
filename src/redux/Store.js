import Authreducer from "./Authreducer";
import Homereducer from "./Homereducer";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: Authreducer,
  repo: Homereducer,
});

export const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

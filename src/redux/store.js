import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory, createHashHistory } from "history";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
import { usingCordova } from "../modules/cordovaUtils";
import toastMiddleware from "./middlewares/toastMiddleware";
// import { hasSession } from "./selectors/login";
// import { reauth } from "./actions/login";

import createReducer from "./reducers";

export const history = usingCordova()
  ? createHashHistory()
  : createBrowserHistory();

const preloadedState = {};

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [
  routerMiddleware(history),
  thunk,
  toastMiddleware({ delay: 1000 }),
  process.env.NODE_ENV === "development" && logger,
].filter(Boolean);

export const store = createStore(
  createReducer(history),
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store, null, async () => {
  const state = store.getState();
  /*
  // may not nessesary.
  if (hasSession(state)) {
    console.log("reauthing.");
    store.dispatch(reauth());
  }
  */
});

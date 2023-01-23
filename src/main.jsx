import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import { DarkMode } from './index'
import "./main.css";
import rootReducer from "./reducers/rootReducer";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkMode />
        <App />
    </Provider>
  </React.StrictMode>
);

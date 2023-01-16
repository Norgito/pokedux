import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducers } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger, nameUpperCase } from "./middlewares";
import "./index.css";

const composedEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, nameUpperCase)
);

const store = createStore(pokemonsReducers, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

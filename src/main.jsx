import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokemonsReducers } from "./reducers/pokemons";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import "./index.css";

const store = createStore(pokemonsReducers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
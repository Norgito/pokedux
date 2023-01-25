import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares";
import { DarkMode } from "./index";
import rootReducer from "./reducers/rootReducer";
import { Home, Gen2, Gen3, Gen4, Gen5 } from "./index";
import "./main.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, composedEnhancers);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gen2",
    element: <Gen2 />,
  },
  {
    path: "/gen3",
    element: <Gen3 />,
  },
  {
    path: "/gen4",
    element: <Gen4 />,
  },
  {
    path: "/gen5",
    element: <Gen5 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkMode />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import { combineReducers } from "redux";
import dataReducer from "../slices/DataSlice";
import uiReducer from "../slices/uiSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export default rootReducer;

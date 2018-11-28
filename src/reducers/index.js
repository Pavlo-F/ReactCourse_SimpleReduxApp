import { combineReducers } from "redux";
import shapeReducer from "./shape";

export const rootReducer = combineReducers({
    shape: shapeReducer,
});

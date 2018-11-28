import { combineReducers } from "redux";
import shapeReducer from "./shape";

export default combineReducers({
    shape: shapeReducer,
});

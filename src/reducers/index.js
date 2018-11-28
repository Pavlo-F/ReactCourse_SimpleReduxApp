import { combineReducers } from "redux";
import shapeReducer from "./shape";
import dataBaseReducer from "./dataBase";

export default combineReducers({
    shape: shapeReducer,
    dataBase: dataBaseReducer,
});

import { combineReducers } from "redux";
import imgReducer from "./img";
import viewReducer from "./view";

const rootReducer = combineReducers({
  img: imgReducer,
  view: viewReducer
})

export default rootReducer
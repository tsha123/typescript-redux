import { combineReducers } from "redux";
import filterReducer from "./filter";
import imgReducer from "./img";
import viewReducer from "./view";

const rootReducer = combineReducers({
  img: imgReducer,
  view: viewReducer,
  filter: filterReducer
})

export default rootReducer
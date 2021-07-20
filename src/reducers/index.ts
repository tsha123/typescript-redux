import { combineReducers } from "redux";
import imgReducer from "./img";

const rootReducer = combineReducers({
  img: imgReducer
})

export default rootReducer
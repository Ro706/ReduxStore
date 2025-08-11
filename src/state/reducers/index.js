import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
  amount: amountReducer // add more reducers here with commas
});

export default reducers;

import RootReducer from "./CombinedStore";
import { createStore } from "redux";
const store=createStore(RootReducer)
export default store
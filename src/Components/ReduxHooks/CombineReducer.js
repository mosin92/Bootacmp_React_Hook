
import NumberReducer from "./NumberReducer";
import { MulReducer } from "./NumberReducer";
import { combineReducers } from 'redux'

const rootReducer=combineReducers({
    NumberReducer,
    MulReducer
})

export default rootReducer;
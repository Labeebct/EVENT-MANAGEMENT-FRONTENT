import { combineReducers } from "redux";
import messageReducer from './msgSortReducer'
import jwtAuthReducer from './jwtAuthReducer'

const rootReducer = combineReducers({
    sort: messageReducer,
    auth: jwtAuthReducer
})

export default rootReducer
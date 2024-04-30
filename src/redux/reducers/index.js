import { combineReducers } from "redux";
import messageReducer from './msgSortReducer'

const rootReducer = combineReducers({
    sort:messageReducer
})

export default rootReducer
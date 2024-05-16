import { combineReducers } from "redux";
import messageReducer from './msgSortReducer'
import socket from './socket'
import jwtAuthReducer from './jwtAuthReducer'
import centerConfirm from "./centerConfirm";
import loadingReducer from "./loading";
import updateBooking from "./updateBooking";
import sideTopAlert from "./topSideAlert";

const rootReducer = combineReducers({
    sort: messageReducer,
    auth: jwtAuthReducer,
    confirm: centerConfirm,
    loading: loadingReducer,
    socket: socket,
    rightAlert: sideTopAlert,
    updateBooking: updateBooking
})

export default rootReducer
import { combineReducers } from 'redux'
import user_slice from "../../auth-slice"
import connection_slice from "../../connection-slice"

export default combineReducers({
    User: user_slice,
    Connection: connection_slice
})

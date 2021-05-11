import { combineReducers } from 'redux'
import { initReducers } from './initReducers'
import { detailReducers } from './detailReducers'
export default combineReducers({
    product: initReducers,
    detailReducers
})
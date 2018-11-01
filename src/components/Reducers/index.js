import {combineReducers} from 'redux'
import citasReducer from './citasReducers'
import errorReducer from './errorReducer'

export default combineReducers({
    citas: citasReducer,
    error: errorReducer
})
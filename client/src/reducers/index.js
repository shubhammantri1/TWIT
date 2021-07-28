import { combineReducers } from 'redux'
import errorReducers from './errorReducers'
import authReducers from './authReducers'
import postReducer from './postReducer'
import profileReducer from './profileReducer'

export default combineReducers({
    errors : errorReducers,
    auth: authReducers,
    post: postReducer,
    profile: profileReducer
})
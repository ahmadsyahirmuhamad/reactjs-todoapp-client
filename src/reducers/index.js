import { combineReducers } from 'redux';
import test from './testReducer';
import user from './userReducer';
import todo from './todoReducer';

export default combineReducers({
    test,
    user,
    todo,
})


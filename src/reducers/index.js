import { combineReducers } from 'redux';
import { test } from './testReducer';

const reducer = combineReducers({
    test,
})

export default reducer;
import {combineReducers} from 'redux';
import currentUser from './currentUser';
import error from './error';
import transiction from './transiction';

const rootReducers = combineReducers({
    currentUser ,
    error,
    transiction
});

export default rootReducers;
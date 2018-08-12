import { createStore, combineReducers } from 'redux';
import task from './reducers/taskReducer';

export default createStore(
    combineReducers({
        task,
    }),
    {}
);
import { createStore, combineReducers, applyMiddleware } from 'redux';
import task from './reducers/taskReducer';
import createSagaMiddleware from 'redux-saga'
import { editMsg, deleteMsg, addMsg, watchEdit, watchAdd, watchDelete } from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combineReducers({
        task,
    }),
    applyMiddleware(sagaMiddleware),
    
);


sagaMiddleware.run(watchEdit);
sagaMiddleware.run(watchDelete);
sagaMiddleware.run(watchAdd);

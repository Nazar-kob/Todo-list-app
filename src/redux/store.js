import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todoListReduser'


const redusers = combineReducers({
    todo: todoReducer
});

const store = createStore(redusers);

export default store;
// import { createStore, combineReducers } from 'redux'
import todoReducer from './reducers/todoListReduser'

// was redux

// const redusers = combineReducers({
//     todo: todoReducer
// });

// const store = createStore(redusers);

// export default store;

// use redux toolkit
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})

export default store;



import { v4 as uuidv4 } from 'uuid'

// was
// const ADD_TODO = 'ADD_TODO';
// const DELETE_TODO = 'DELETE_TODO';
// const CHANGE_TODO = 'CHANGE_TODO';
// const CLEAR_TODO = 'CLEAR_TODO';
// const CLEAR_TODO_ISDONE = 'CLEAR_TODO_ISDONE';


// const addTodo = (text) => ({
//     type: ADD_TODO,
//     text: text,
// });

// const deleteTodo = (idx) => ({ type: DELETE_TODO, id: idx });

// const changeTodo = (idx) => ({ type: CHANGE_TODO, id: idx });

// const clearTodo = () => ({ type: CLEAR_TODO });

// const clearTodoIsDone = () => ({ type: CLEAR_TODO_ISDONE })

// const todoReducer = (initialState = [], action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             return [...initialState, { id: uuidv4(), text: action.text, isDone: false }];
//         case DELETE_TODO:
//             return [...initialState].filter(({ id }) => id !== action.id);
//         case CHANGE_TODO:
//             return [...initialState].map((obj) => obj.id === action.id ? { ...obj, isDone: !obj.isDone } : obj);
//         case CLEAR_TODO_ISDONE:
//             return [...initialState].filter(({ isDone }) => !isDone)
//         case CLEAR_TODO:
//             return [];
//         default:
//             return initialState;
//     }
// }

// export const actions = { addTodo, deleteTodo, changeTodo, clearTodo, clearTodoIsDone };

// export default todoReducer;

import { createSlice } from '@reduxjs/toolkit'

const startReduser = [];

const todoListReduser = createSlice({
    name: 'todo',
    initialState: startReduser,
    reducers: {
        deleteTodo: (value, action) => value.filter(({ id }) => id !== action.payload),
        changeTodo: (value, action) => value.map((obj) => (obj.id === action.payload ? { ...obj, isDone: !obj.isDone } : obj)),
        addTodo: (value, action) => ([...value, { id: uuidv4(), text: action.payload, isDone: false }]),
        clearTodo: () => [],
        clearTodoIsDone: (value) => [...value].filter(({ isDone }) => !isDone)
    }
})
export const { actions } = todoListReduser;
export default todoListReduser.reducer;

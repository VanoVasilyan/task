import { createSlice } from '@reduxjs/toolkit';
import { ToDoItem } from "./sliceTypes/types";


const initialState: ToDoItem[] = []

const todoItems = createSlice({
    name: 'todoItems',
    initialState,
    reducers: {
        createNewTodoItem: (_, { payload }) => {
            return [...initialState, payload]
        }
    }
})



export const { createNewTodoItem } = todoItems.actions;
export default todoItems.reducer;

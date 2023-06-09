import { configureStore } from '@reduxjs/toolkit';
import todoItemSlice from './slices/todoItemSlice';


const store = configureStore({
    reducer: {
        itemsReducer: todoItemSlice
    }
})

export default store
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice"
// Single Source of truth
export const store = configureStore(
    {
        reducer: todoReducer
    }

)
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"

export const sotre = configureStore({
    reducer: {
        todos: todoReducer,
    },
})

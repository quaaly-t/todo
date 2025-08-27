import { createSlice } from "@reduxjs/toolkit"

const intialState = {
    items: [],
    filter: "all",
    isAddingTodo: false,
}

const todoSlice = createSlice({
    name: "todos",
    initialState: intialState,
    reducers: {},
})

export default todoSlice.reducer

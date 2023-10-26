import { createSlice } from "@reduxjs/toolkit";

let themeSlice = createSlice({
    name: 'theme',
    initialState: { setTheme: true },
    reducers: {
        Theme(state, action) {
            state.setTheme = !state.setTheme;
            console.log(state.setTheme)
        }
    }
})
export const themeAction = themeSlice.actions;
export default themeSlice;
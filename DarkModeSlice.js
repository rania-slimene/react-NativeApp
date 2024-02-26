import { createSlice } from "@reduxjs/toolkit";

export const DarkModeslice = createSlice({
    name: 'DarkMode',
    initialState: {
        isDarkModeEnabled: false
    },

    reducers: {
        toggleDark(state) {
            state.isDarkModeEnabled = !state.isDarkModeEnabled;
        }
    }
});

export const { toggleDark } = DarkModeslice.actions;
export default DarkModeslice.reducer;
import {configureStore} from '@reduxjs/toolkit'
import DarkModeReducer from './DarkModeSlice'
export const  store = configureStore({
reducer: {
    DarkMode : DarkModeReducer
}

}) 
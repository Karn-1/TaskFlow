import { configureStore } from "@reduxjs/toolkit";
import TimerReducer from './TimerSlice'
import TodoSlice from './TodoSlice'
export const store = configureStore({
  reducer:{
    Timer:TimerReducer,
    Todo:TodoSlice,
  }
})
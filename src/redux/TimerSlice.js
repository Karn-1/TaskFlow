import {createSlice} from '@reduxjs/toolkit'
import { toast,Bounce } from 'react-toastify';

const TimerSLice = createSlice({
  name:"timer",
  initialState: {
    timers: JSON.parse(localStorage.getItem('timers')) || [],
    fullscreenTimerId: null
  }

  ,
  reducers:{
    addTimer:(state,action)=>{
      console.log(action.payload)
      // we get the total duration in seconds 
      const newTimer = {
        id:Date.now(),
        isRunning:false,
        totalDuration:action.payload,
        remainingDuration:action.payload,
        fullScreen:false
      }

      const exists = state.timers.some(
        timer => timer.totalDuration === action.payload
      )
      // if already exists not add
      if( exists ) return

      // else add
      state.timers.push(newTimer);
      
      localStorage.setItem('timers',JSON.stringify(state.timers))

      toast.success('TIMER ADDED', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
              });
    },
    resetTimer:(state,action)=>{
      // now given timer will be reset to 0 
      const timer = state.timers.find((t)=>(
        // firstly get the timer from local storage and then that timer reset to 0 
        t.id === action.payload
      ))
      if( timer ){
        // if have that timer 
        timer.remainingDuration = timer.totalDuration
        timer.isRunning =false
      }
      localStorage.setItem('timers',JSON.stringify(state.timers));

    },
    startTimer: (state, action) => {
      const timer = state.timers.find(t => t.id === action.payload);
      if (timer) {
        timer.isRunning = true;
      }
      if( timer.remainingDuration === 0 ){
        toast.success("TIME UP")
        timer.remainingDuration = timer.totalDuration
      }
    }
    ,
    // now an reducer for the tick timer to reduce remainig duration by 1 every seconds
    tickTimer: (state, action) => {
      const timer = state.timers.find(t => t.id === action.payload);

      // as if its no running or its not present 
      if (!timer || !timer.isRunning) return;

      if (timer.remainingDuration > 0) {
        timer.remainingDuration -= 1;
      }

      if (timer.remainingDuration === 0) {
        // when its over then  rest it 
        toast.success("TIME UP" , {
          position: "top",
        })

        resetTimer(action.payload)
        timer.isRunning = false;
      }
    },

    removeTimer: (state, action) => {
      // action.payload = timer id

      state.timers = state.timers.filter(
        timer => timer.id !== action.payload
      );

      localStorage.setItem(
        "timers",
        JSON.stringify(state.timers)
      );
    },
    setFullscreenTimer: (state, action) => {
      state.fullscreenTimerId = action.payload; // timer id
    },
    clearFullscreenTimer: (state) => {
      state.fullscreenTimerId = null;
    },
    tickAllTimers: (state) => {
      state.timers.forEach(timer => {
        if (timer.isRunning && timer.remainingDuration > 0) {
          timer.remainingDuration -= 1;

          // If timer ends, reset it
          if (timer.remainingDuration === 0) {
          toast.success("TIME UP" , {
            osition: "center",
          })  

            
            timer.isRunning = false;
          }
        }
      });

      // Update localStorage
      // localStorage.setItem("timers", JSON.stringify(state.timers));
    }



  }
})

export const {resetTimer,addTimer,startTimer,removeTimer,tickTimer ,setFullscreenTimer,clearFullscreenTimer,tickAllTimers } = TimerSLice.actions;

export default TimerSLice.reducer
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTimer, resetTimer, setFullscreenTimer, startTimer,tickTimer } from '../redux/TimerSlice';
import { BsArrowsFullscreen } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShowaTimer = ({eachtimer,cnt}) => {

  // here we make the card or fix format for all timers

  const dispatch = useDispatch();
  const total = eachtimer.remainingDuration;
  let hours = Math.floor(total / 3600);
  let minutes = Math.floor((total % 3600) / 60);
  let seconds = total % 60;

  const navigat=useNavigate();


  const pad = (n) => String(n).padStart(2, "0");

  function removethisTimer(){
    dispatch(removeTimer(eachtimer.id));

  }

    const fullscreenTimerId = useSelector(state => state.Timer.fullscreenTimerId);



  function FullScreenTimer(){
    dispatch(setFullscreenTimer(eachtimer.id));
    navigat("/fullscreen");
  }
  
  
  

  return (
    <div className='text-2xl flex flex-col gap-2 bg-gray-600 p-6 justify-center items-center relative rounded-xl shadow-lg' >
      <div className='absolute -top-1 left-1 cursor-pointer text-gray-100 hover:text-blue-400 transition duration-200'
        onClick={FullScreenTimer}
      ><BsArrowsFullscreen /></div>
      <div className='absolute -top-2 -right-1 bg-red-700 
        hover:bg-red-600
        border border-red-500
        rounded-full
        w-7 h-7
        cursor-pointer
        flex items-center justify-center
        transition
        duration-200
        text-white
        font-semibold'
        onClick={removethisTimer}
      >X</div>
      <div>
        {
          // here we will show the time 
          <div
            className="
              text-4xl md:text-5xl
              font-mono font-semibold
              tracking-widest
              text-gray-100
              bg-gray-800
              px-4 py-3
              rounded-xl
              shadow-inner
            "
          >
            {pad(hours)}:{pad(minutes)}:{pad(seconds)}
          </div>

        }
      </div>

      <div>
        <button
          className='px-6 py-2
            bg-green-600 text-white font-semibold
            rounded-lg
            shadow-md
            transition-all duration-50 ease-in-out
            hover:bg-green-500
            active:scale-95
            active:shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-green-400'
          onClick={() => dispatch(startTimer(eachtimer.id))}>
          Start
        </button>

      </div>

      <div>
        <button
          className='px-6 py-2
          bg-red-700 text-white font-semibold
          rounded-lg
          shadow-md
          transition-all duration-100 ease-in
          hover:bg-red-600
          active:scale-95
          active:shadow-sm
          focus:outline-none
          select-none
          focus:ring-2 focus:ring-red-400'
          onClick={() => {
            dispatch(resetTimer(eachtimer.id))
          }}
        >Reset</button>
      </div>
    </div>
  )
}

export default ShowaTimer

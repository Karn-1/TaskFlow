import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearFullscreenTimer, startTimer } from '../redux/TimerSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { tickTimer } from '../redux/TimerSlice';


const FullscreenTimer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { timers, fullscreenTimerId } = useSelector(state => state.Timer);
  const timer = timers.find(t => t.id === fullscreenTimerId);

  useEffect(() => {
    if( fullscreenTimerId === null ){
      return
    }
    dispatch(startTimer(fullscreenTimerId));
    

  }, [fullscreenTimerId])
  


  function exitFullscreen() {
    dispatch(clearFullscreenTimer());
    setTimeout(() => navigate("/timer"), 0);
  }


  if (!timer) return null;

  const total = timer.remainingDuration;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  const pad = n => String(n).padStart(2, "0");

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-7xl font-mono tracking-widest">
        {pad(h)}:{pad(m)}:{pad(s)}
      </div>

      <button
        onClick={exitFullscreen}
        className="mt-8 px-6 py-2 bg-gray-500 rounded-lg active:scale-95"
      >
        Exit
      </button>
    </div>
  );
};


export default FullscreenTimer
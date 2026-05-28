import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, Bounce } from 'react-toastify';
import { addTimer } from '../redux/TimerSlice';

const Timer = (props) => {
  const dispatch = useDispatch();

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const pad = (n) => String(n).padStart(2, '0');

  function normalizeTime({ hours, minutes, seconds }) {
    let total = hours * 3600 + minutes * 60 + seconds;
    total = Math.max(0, total);

    const newHours = Math.floor(total / 3600);
    const newMinutes = Math.floor((total % 3600) / 60);
    const newSeconds = total % 60;

    return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
  }

  function changeTime(unit, change) {
    setTime((prev) =>
      normalizeTime({ ...prev, [unit]: prev[unit] + change })
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    const totalDuration = time.hours * 3600 + time.minutes * 60 + time.seconds;

    if (totalDuration <= 0) {
      toast.warn('Set some time first!', {
        position: 'top-center',
        autoClose: 2000,
        theme: 'dark',
        transition: Bounce,
      });
      return;
    }

    dispatch(addTimer(totalDuration));
    props.setShow(false);
  }

  function hideAddnewTimer() {
    props.setShow(false);
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex justify-center items-center z-50">
      <form
        onSubmit={submitHandler}
        className="relative
                   rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-10 w-full max-w-4xl
                   border border-gray-700"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={hideAddnewTimer}
          className="absolute top-4 right-4 text-gray-100 bg-red-700 px-3 py-1 rounded-lg
                     hover:bg-red-600 hover:scale-110 transition transform font-bold shadow-lg"
        >
          CLOSE
        </button>

        {/* Timer Controls */}
        <div className="flex items-center gap-12">
          {['hours', 'minutes', 'seconds'].map((unit, idx) => (
            <div key={unit} className="flex flex-col items-center relative">
              {/* Increment */}
              <button
                type="button"
                onClick={() => changeTime(unit, 1)}
                className="text-5xl md:text-6xl font-bold text-green-400 hover:text-green-300
                           active:scale-90 transition-transform drop-shadow-lg"
              >
                +
              </button>

              {/* Timer digits */}
              <span className="text-7xl md:text-8xl font-mono text-gray-100 drop-shadow-md
                               bg-gray-800 px-5 py-2 rounded-xl shadow-inner mt-2">
                {pad(time[unit])}
              </span>

              {/* Decrement */}
              <button
                type="button"
                onClick={() => changeTime(unit, -1)}
                className="text-5xl md:text-6xl font-bold text-red-400 hover:text-red-300
                           active:scale-90 transition-transform drop-shadow-lg mt-2"
              >
                -
              </button>

              {/* Colon */}
              {idx < 2 && (
                <span className="absolute -mx-4  right-[-2rem] top-1/2 transform -translate-y-1/2
                                 text-7xl md:text-8xl font-mono text-gray-100 drop-shadow-md">
                   :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white text-3xl md:text-4xl
                     px-10 py-3 rounded-2xl hover:from-blue-600 hover:to-blue-400 hover:scale-105
                     transition transform shadow-lg font-semibold"
        >
          ADD TIMER
        </button>
      </form>
    </div>
  );
};

export default Timer;





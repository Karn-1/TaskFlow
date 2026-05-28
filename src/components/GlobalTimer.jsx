import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tickAllTimers } from "../redux/TimerSlice";

const GlobalTimer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tickAllTimers());
    }, 1000);

    return () => clearInterval(interval); // cleanup only if app unmounts
  }, [dispatch]);

  return null; 
};

export default GlobalTimer;

import React, { useEffect, useState } from "react";

const Timer = ({ seconds = 0, fct = (x) => {}, adaSec = (s)=>{} }) => {
  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [s, setTime] = React.useState(seconds);

  const tick = () => {
    if (paused || over) return;
    if (s === 0) fct(true);
    if (s != 0) {
      adaSec(s);
      setTime(s - 1);
    }
  };

  const reset = () => {
    setTime(parseInt(seconds));
    setPaused(false);
    setOver(false);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return <div className="timer">{s.toString().padStart(2, "0")}</div>;
};

export default Timer;

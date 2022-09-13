import React, { useEffect, useState } from 'react';
// Displays timer in header with start/stop
// TODO Timer is currently bugged and stop button doesn't work
const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [incrementer, setIncrementer] = useState(null);

  // Prevent timer from going forever
  useEffect(() => {
    if (timer > 99999) {
      setTimer(0);
    }
  }, [timer]);

  // Start timer
  const handleStart = () => {
    const newInterval = setInterval(() => {
      setTimer((timer) => (timer += 1));
    }, 1000);
    setIncrementer(newInterval);
  };

  // Stop timer
  const handleStop = () => {
    if (incrementer) {
      clearInterval(incrementer);
      setIncrementer(null);
    }
  };

  return (
    <div className="Objective-two">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <span>Timer: {timer}s</span>
    </div>
  );
};

export default Timer;
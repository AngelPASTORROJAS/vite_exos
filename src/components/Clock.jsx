import { useState, useEffect } from 'react';

/**
 * The Clock function returns a React component that displays the current time and updates every second
 * using the useState and useEffect hooks.
 * @returns A React component that displays the current time in the format of hours, minutes, and
 * seconds.
 */
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return <div>Time: {time.toLocaleTimeString()}</div>;
}

export default Clock;
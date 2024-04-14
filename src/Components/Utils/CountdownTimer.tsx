"use client"
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const nextRepTime = new Date(currentTime);
      nextRepTime.setHours(nextRepTime.getHours() + 24); // Set next repetition time after 24 hours

      const difference = nextRepTime.getTime() - currentTime.getTime();
      const remainingSeconds = Math.floor(difference / 1000);

      const remainingHours = Math.floor(remainingSeconds / 3600);
      const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
      const remainingSecs = remainingSeconds % 60;

      setHours(remainingHours);
      setMinutes(remainingMinutes);
      setSeconds(remainingSecs);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval to avoid memory leaks
  }, []); // Empty dependency array, runs once on component mount

  return (
    <div className="text-center text-lg font-semibold mb-4">
      {`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
    </div>
  );
};

export default CountdownTimer;


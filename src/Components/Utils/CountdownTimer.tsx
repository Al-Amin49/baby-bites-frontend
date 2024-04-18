"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const nextRepTime = new Date(currentTime);
    nextRepTime.setHours(nextRepTime.getHours() + 24); // Set next repetition time after 24 hours

    return nextRepTime.getTime() - currentTime.getTime();
  };

  const [timeRemaining, setTimeRemaining] = useState<number>(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1000); // Subtract 1 second from the previous time remaining
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array, runs once on component mount

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
  };

  return (
    <div className="text-center text-lg font-semibold mb-4 bg-primary text-white ">
     <div className='flex justify-center items-center'>
     <Image src="https://tinyurl.com/22a9w6xy" width={80} height={80} alt="ballon" unoptimized />
     <span className='text-secondary mr-2'>Flash Sale time ends in: </span>
     {formatTime(timeRemaining)}
     <Image src="https://tinyurl.com/2s4vuycx" width={80} height={80} 
     className="rounded-2xl ml-10"
      alt="running cartoon"  unoptimized />
     </div>
    </div>
  );
};

export default CountdownTimer;

"use client"
import React from 'react';

interface RatingProps {
  value: number;
  onChange?: (newValue: number) => void;
}

const Rating: React.FC<RatingProps> = ({ value, onChange }) => {
  const handleClick = (newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((ratingValue) => (
        <span
          key={ratingValue}
          className="cursor-pointer text-yellow-400 text-2xl"
          onClick={() => handleClick(ratingValue)}
        >
          {ratingValue <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;

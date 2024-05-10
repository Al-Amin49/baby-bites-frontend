"use client"
import React, { useState } from "react";

interface Filters {
  priceRange: number[];
  category: string;
  rating: number | null;
}

interface Props {
  onFilterChange: (filters: Filters) => void;
}

const ProductFilter: React.FC<Props> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    priceRange: [],
    category: "",
    rating: null,
  });

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters({ ...filters, priceRange: [min, max] });
    onFilterChange({ ...filters, priceRange: [min, max] });
  };

  const handleCategoryChange = (category: string) => {
    setFilters({ ...filters, category });
    onFilterChange({ ...filters, category });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({ ...filters, rating });
    onFilterChange({ ...filters, rating });
  };

  return (
    <div>
      <h3 className="text-2xl text-secondary font-bold my-4">Filters</h3>
      <div>
        <h4 className="text-xl text-secondary font-bold ">Price Range</h4>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            onClick={() => handlePriceRangeChange(20, 40)}
          />
          $20 - $40
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onClick={() => handlePriceRangeChange(40, 60)}
          />
          $40 - $60
        </label>
      </div>
      <div>
        <h4>Category</h4>
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Baby Snacks">Baby Snacks</option>
          <option value="Baby Puree">Baby Puree</option>
          <option value="Category 3">Category 3</option>
          <option value="Category 4">Category 4</option>
          <option value="Category 5">Category 5</option>
          <option value="Category 6">Category 6</option>
        </select>
      </div>
      <div>
        <h4>Rating</h4>
        <label>
          <input type="checkbox" onClick={() => handleRatingChange(5)} />
          5 Stars
        </label>
        {/* Add more rating options as needed */}
      </div>
    </div>
  );
};

export default ProductFilter;

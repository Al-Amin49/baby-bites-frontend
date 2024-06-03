"use client";
import { useState, useEffect } from "react";
import { TProduct } from "@/types";
import Link from "next/link";
import ProductsCard from "./ProductsCard";
type FilteredProductsProps = {
  products: TProduct[];
};

const FilteredProducts = ({ products }: FilteredProductsProps) => {
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>(products);
  const [category, setCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | string>("");
  const [maxPrice, setMaxPrice] = useState<number | string>("");

  useEffect(() => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (minPrice !== "" || maxPrice !== "") {
      filtered = filtered.filter((product) => {
        const price = product.salePrice;
        if (minPrice !== "" && maxPrice !== "") {
          return price >= Number(minPrice) && price <= Number(maxPrice);
        } else if (minPrice !== "") {
          return price >= Number(minPrice);
        } else if (maxPrice !== "") {
          return price <= Number(maxPrice);
        }
        return true;
      });
    }

    setFilteredProducts(filtered);
  }, [category, minPrice, maxPrice, products]);

//if no product found by filtering
  const noCategoryMatch = category && !filteredProducts.length;
  const noPriceRangeMatch = !category && (minPrice !== "" || maxPrice !== "") && !filteredProducts.length;

  //Reset filters
  const handleResetFilters=()=>{
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setFilteredProducts(products);
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="w-full md:w-1/4 md:sticky md:top-0">
        <h3 className="text-2xl text-secondary font-bold my-2">Filter By</h3>
        <hr/>
        <div className="mb-4 mt-4">
          <label className="block mb-2 text-secondary font-bold text-xl">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-info w-full"
          >
            <option value="">All Categories</option>
            <option value="Formula Milk">Formula Milk</option>
            <option value="Baby Cereals">Baby Cereals</option>
            <option value="Baby Snacks">Baby Snacks</option>
            <option value="Baby Purees">Baby Purees</option>
            <option value="Baby Teething Biscuits">Baby Teething Biscuits</option>
            <option value="Baby Drinks">Baby Drinks</option>
          </select>
        </div>
       <div> 
      <h3 className="text-xl text-secondary font-bold mb-4">Price Range:(Min to Max)</h3>
       <div className="mb-4">
          <label className="block mb-2">Min Price</label>
          <input
            type="number"
            placeholder="Min Price"
            className="border p-2"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Max Price</label>
          <input
            type="number"
            placeholder="Max Price"
            className="border p-2"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button
          className="bg-secondary text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleResetFilters}
        >
          Reset Filters
        </button>
       </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
      {noCategoryMatch && (
        <div className="col-span-full text-center text-red-500 text-2xl font-bold">
          Not exist this category
        </div>
      )}
      {noPriceRangeMatch && (
        <div className="col-span-full text-center text-red-500 text-2xl font-bold">
          Not available in this price range
        </div>
      )}
        {filteredProducts.map((product: TProduct) => (
          <div key={product._id} className="w-full max-w-xs border rounded-2xl overflow-hidden">
            <Link href={`/products/${product._id}`}>
             <ProductsCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
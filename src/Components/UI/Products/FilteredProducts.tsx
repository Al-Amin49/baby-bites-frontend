"use client";

import { useState, useEffect } from "react";
import { TProduct } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
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

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="w-full md:w-1/4">
        <div className="mb-4">
          <label className="block mb-2">Category</label>
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
        <div className="mb-4">
          <label className="block mb-2">Min Price</label>
          <input
            type="number"
            placeholder="Min Price"
            className="input input-info w-full"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Max Price</label>
          <input
            type="number"
            placeholder="Max Price"
            className="input input-info w-full"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full place-items-center">
        {filteredProducts.map((product: TProduct) => (
          <div key={product._id} className="w-full max-w-xs border rounded-2xl overflow-hidden">
            <Link href={`/products/${product._id}`}>
              <div className="relative">
                <div className="w-full h-64 relative">
                  <Image
                    alt="product"
                    className="object-cover"
                    src={product.image}
                    layout="fill"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg">{product.title}</h4>
                  <div className="my-4 flex justify-between items-center">
                    <span className="text-white bg-secondary rounded-xl px-4 py-1">
                      ${product.salePrice}
                    </span>
                    <span className="text-white bg-primary rounded-xl px-4 py-1">
                      {product.category}
                    </span>
                  </div>
                  <button className="bg-primary text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full">
                    <span className="mr-2">Add To Cart</span>
                    <ShoppingCart/>
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilteredProducts;
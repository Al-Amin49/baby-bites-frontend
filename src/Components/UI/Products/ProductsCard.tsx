import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";
import { TProduct } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type TProductProps={
    product:TProduct
}
const ProductsCard = ({ product }:TProductProps) => {
  return (
 
    <> 
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
    <Link href={`/products/${product._id}`}>
    <button className="bg-secondary text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full">
        <span className="mr-2">View Details</span>
      </button>
    </Link>
    </div>
  </div>
    </>
  );
};

export default ProductsCard;

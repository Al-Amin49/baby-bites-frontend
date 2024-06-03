import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";
import { TProduct } from "@/types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
type TProductProps={
    product:TProduct
}
const ProductsCard = ({ product }:TProductProps) => {
  return (
 
      <Card className=" w-full max-w-xs" key={product._id}>
        <CardBody className="overflow-visible ">
          <div className="w-[400px] h-64 relative">
            <Image
              alt="product"
              className="object-cover"
              src={product.image}
              fill
            />
          </div>
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{product.title}</h4>
          <div className="my-4 flex justify-center items-center text-white space-x-5 mx-auto">
            <div >
            <span className=" text-gray bg-secondary rounded-xl px-4 py-1 "> ${product.salePrice} </span>
                </div> 
               <div>
                <h3 className="text-gray bg-primary rounded-xl p-2">{product.category}</h3>
                </div>  
          </div>
          <div className="text-center mx-auto my-4">
            <PrimaryButton
              btnText="Add To Cart"
              Icon={<ShoppingCart />}
            ></PrimaryButton>
          </div>
        </CardHeader>
      </Card>
    
  );
};

export default ProductsCard;

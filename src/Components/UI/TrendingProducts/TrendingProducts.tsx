import Container from "@/Components/Container/Container";
import React from "react";
import Image from "next/image";
import Rating from "@/Components/Utils/Rating";
import {Card, CardFooter, Button} from "@nextui-org/react";
import { TProduct, TReview } from "@/types";
import Link from "next/link";

const TrendingProducts = async () => {
  const res = await fetch(
    `${process.env.BACKEND_URL}/products`,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const { data: sales } = await res.json();
  const trendingSales = sales.filter((sale: any) => {
    // Filter products with a rating greater than or equal to 4
    return sale.reviews.some((review: any) => review.rating >= 4);
  });
  return (
    <Container className="my-10 py-10">
    <h3 className="text-3xl text-secondary font-bold my-10">
      Trending Products
    </h3>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
      {trendingSales?.slice(0, 6).map((sale:TProduct) => (
        
        <Card key={sale._id} isFooterBlurred radius="lg" className="border-none overflow-visible w-full max-w-xs">
          <Link href="/products">
          <div className="w-full h-96 relative">

         <Image
           alt={sale.title}
           className="object-cover"
           src={sale.image}
           fill
          
         />
         </div>
         <CardFooter className="justify-between border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10  ">
           <div className="mx-auto">
             <h2 className="text-secondary font-bold text-xl mb-4">{sale.title}</h2>
             <div className=" rounded-xl  mb-2 flex justify-evenly items-center">
             <div className="bg-secondary text-center rounded-xl px-4 py-1  mx-auto ">
             {sale.reviews?.map((review:TReview) => (
               <Rating key={review.userId} value={review.rating} />
             ))}
             </div>
             <p className=" font-bold ml-2 text-xl ">
             ${sale.salePrice}
           </p>
             </div>
           
           </div>
           
         </CardFooter>
         </Link>
       </Card>
      
      ))}
    </div>
  </Container>
  );
};

export default TrendingProducts;

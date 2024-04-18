import Container from "@/Components/Container/Container";
import React from "react";
import Image from "next/image";
import Rating from "@/Components/Utils/Rating";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30,
    },
  });
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
        {trendingSales?.slice(0, 6).map((sale: any) => (
          <div key={sale._id}>
            <div className="card w-96 h-96 shadow-xl">
              <figure className="relative">
                <Image src={sale.image} alt="food" width={400} height={400} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary">{sale.title}</h2>
                {sale.reviews?.map((review: any) => (
                  <Rating key={review.userId} value={review.rating} />
                ))}

                <div className="card-actions justify-end">
                  <p>
                    <span className="line-through text-gray">
                      ${sale.price}{" "}
                    </span>
                    <span className="font-bold ml-2">${sale.salePrice}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;

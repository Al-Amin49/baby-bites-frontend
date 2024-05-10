import Container from "@/Components/Container/Container";
import ProductFilter from "@/Components/UI/ProductFilter/ProductFilter";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
  });
  const { data: sales } = await res.json();

  //  const handleFilterChange={}
  return (
    <Container className="my-10">
      <h3 className="text-center my-4 text-secondary font-bold">
        All Products
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="">
          {/* <ProductFilter onFilterChange={} /> */}
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center col-span-2">
          {sales.map((sale: any) => (
            <div key={sale._id}>
              <Link href={`/products/${sale?._id}`}>
                <div className="card w-64 h-96 shadow-xl">
                  <figure>
                    <Image
                      src={sale.image}
                      alt="food"
                      width={400}
                      height={400}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-secondary">{sale.title}</h2>
                    {/* <p>Rating: {
                sale.reviews?.map((review:any)=><Rating key={review.userId} value={review.rating}/>)
                }
                </p> */}
                    <div className="card-actions justify-end">
                      <p>
                        {sale.flashSale ? (
                          <>
                            <span className="line-through text-gray">
                              ${sale.price}{" "}
                            </span>
                            <span className="font-bold ml-2">
                              ${sale.salePrice}
                            </span>
                          </>
                        ) : (
                          <span className=" text-gray">${sale.price} </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default ProductsPage;

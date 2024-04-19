import Container from "@/Components/Container/Container";
import Image from "next/image";
import CountdownTimer from "@/Components/Utils/CountdownTimer";
import Rating from "@/Components/Utils/Rating";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
  });
  const { data: sales } = await res.json();
  return (
    <Container className="my-10">
      <CountdownTimer />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {sales.map((sale: any) => (
          <div key={sale._id}>
            <div className="card w-96 h-96 shadow-xl">
              <figure>
                <Image src={sale.image} alt="food" width={400} height={400} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-secondary">{sale.title}</h2>
                {/* <p>Rating: {
                sale.reviews?.map((review:any)=><Rating key={review.userId} value={review.rating}/>)
                }
                </p> */}
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

export default FlashSalePage;

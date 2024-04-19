import Container from "@/Components/Container/Container";
import CountdownTimer from "@/Components/Utils/CountdownTimer";
import Image from "next/image";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: sales } = await res.json();
  return (
    <Container className="my-10 py-10">
      <CountdownTimer />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {sales.map(
          (sale: any) =>
            sale.flashSale && (
              <div key={sale._id}>
                <div className="card w-96 h-96 shadow-xl">
                  <figure className="relative">
                    <div className="badge badge-secondary absolute top-4 right-4 font-bold">
                      {sale.flashSale && sale?.discount}%
                    </div>

                    <Image
                      src={sale.image}
                      alt="food"
                      width={400}
                      height={400}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title text-secondary">{sale.title}</h2>

                    <div className="card-actions justify-end">
                      <p>
                        <span className="line-through text-gray">
                          ${sale.price}{" "}
                        </span>
                        <span className="font-bold ml-2">
                          ${sale.salePrice}
                        </span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className="text-center my-6">
        <Link href="/flash-sale">
          {" "}
          <button className="btn btn-primary">View All</button>
        </Link>
      </div>
    </Container>
  );
};

export default FlashSale;

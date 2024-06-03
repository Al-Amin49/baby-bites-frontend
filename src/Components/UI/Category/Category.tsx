import Container from "@/Components/Container/Container";
import Image from "next/image";

const Category = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const { data: sales } = await res.json();
  return (
    <Container className="pb-10">
      <h3 className="text-3xl text-secondary font-bold my-10">
        Top Categories
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center ">
        {sales.slice(0, 4).map((sale: any) => (
          <div key={sale._id} className="text-center relative ">
            <Image
              src={sale.image}
              alt={sale.category}
              className="border rounded-2xl "
              width={500}
              height={400}
            />
            <p className="mt-2 absolute left-2 bottom-4 font-bold text-secondary  text-2xl">
              {sale.category}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Category;

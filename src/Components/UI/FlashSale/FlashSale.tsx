import Container from "@/Components/Container/Container";
import Image from "next/image";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate:5,
    },
  });
  const { data: sales } = await res.json();
  return (
    <Container className="my-10">
      <h1 className="text-center text-3xl font-bold text-red-500 my-10 flex justify-center items-center">
        <Image src="https://tinyurl.com/22a9w6xy" width={80} height={80} alt="ballon" />
         Limited Time Deals!
         </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
      {sales.map((sale: any) => (
       sale.flashSale &&<div key={sale._id}>
          <div className="card w-96 h-96 shadow-xl">
            <figure className="relative">
            <div className="badge badge-secondary absolute top-4 right-4 font-bold" >10%</div>
              <Image 
              src={sale.image}
              alt="food" 
             width={400}
             height={400}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-secondary">
                {sale.title}
                
              </h2>
              
              <div className="card-actions justify-end">
                <p > 
                  <span className="line-through text-gray">${sale.price} </span>
                <span className="font-bold ml-2">${sale.salePrice}</span> </p>
              </div>
            </div>
          </div>
        </div>
      ))}
         </div>
    </Container>
  );
};

export default FlashSale;

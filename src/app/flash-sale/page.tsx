import Container from "@/Components/Container/Container";
import CountdownTimer from "@/Components/Utils/CountdownTimer";
import FlashSaleCard from "@/Components/UI/FlashSale/FlashSaleCard";
import { TProduct } from "@/types";

const FlashSalePage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
  });
  const { data: sales } = await res.json();
  return (
    <Container className="my-10">
      <CountdownTimer />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {sales.map((sale:TProduct) =>
          sale.flashSale && (
           <>
           <FlashSaleCard sale={sale} key={sale._id}/>
           </>
          )
        )}
      </div>
    </Container>
  );
};

export default FlashSalePage;

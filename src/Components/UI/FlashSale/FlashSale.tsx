import Container from "@/Components/Container/Container";
import CountdownTimer from "@/Components/Utils/CountdownTimer";
import Image from "next/image";
import Link from "next/link";
import FlashSaleCard from "./FlashSaleCard";
import { TFlashSale } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";

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
      <div >
        <Link href="/flash-sale" className="text-center my-6 mx-auto">
          {" "}
          <PrimaryButton btnText="View All"></PrimaryButton>
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {sales.map(
          (sale:TFlashSale) =>
            sale.flashSale && (
             <>
              <FlashSaleCard sale={sale} key={sale._id} ></FlashSaleCard>
             </>
            )
        )}
      </div>
     
    </Container>
  );
};

export default FlashSale;

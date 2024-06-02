
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { TFlashSale } from "@/types";
import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";
import { ShoppingCart } from "lucide-react";

type TFlashSaleProps={
  sale:TFlashSale
}
const FlashSaleCard = ({sale}:TFlashSaleProps) => {
    return (
        <>
            <Card className="py-4 w-full max-w-xs" key={sale._id}>
              <CardBody className="overflow-visible py-2">
                <div className="w-full h-64 relative">
                  <Image
                    alt="product"
                    className="object-cover"
                    src={sale.image}
                    fill
                  />
                </div>
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{sale.title}</h4>
                <p className="my-2">
                        <span className="line-through text-gray">
                          ${sale.price}{" "}
                        </span>
                        <span className="font-bold ml-2">
                          ${sale.salePrice}
                        </span>{" "}
                      </p>
                      <div className="text-center mx-auto my-4">
                      <PrimaryButton
                       btnText="Add To Cart"
                       Icon={<ShoppingCart/>}
                       ></PrimaryButton>
                      </div>
              </CardHeader>
            </Card>
        </>
    );
};

export default FlashSaleCard;
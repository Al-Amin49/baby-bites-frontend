import Container from "@/Components/Container/Container";
import Rating from "@/Components/Utils/Rating";
import Image from "next/image";


const ProductDetails = ({product}:any) => {
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center my-10">
                <div>
                <Image
                 src={product.image} 
                 alt="product image"
                 width={400}
                 height={400}
                  />
                </div>
                <div>
                    <h3 className="font-bold text-secondary text-2xl">{product.title}</h3>
                    
                   <div className="flex items-center  ">
                   <p className="my-4">{product.flashSale ?  <>
                        <span className="line-through text-gray">${product.price} </span>
                <span className=" text-xl font-bold ml-2">${product.salePrice}</span>
                    </> :<span className="text-xl font-bold text-gray">${product.price} </span>} | 
                        </p>
                        <p><span>
                        {
                        product?.reviews?.map((review:any)=><Rating key={review.userId} value={review.rating}/>
                           
                         )
                          }
                        </span></p>
                        <span>({product?.reviews?.length} reviews)</span>

                   </div>
                   
                   <h3 className="my-8"><span className="text-secondary font-bold">Category: </span>{product.category}</h3>

                   <h3 className="my-8"><span className="text-secondary font-bold">Description: </span>{product.description}</h3>
                </div>
            </div>
            
        </Container>
    );
};

export default ProductDetails;
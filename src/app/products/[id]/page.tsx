import ProductDetails from "@/Components/UI/ProductDetails/ProductDetails";

type TProductProps = {
  params: {
    id: string;
  };
};

const ProductDetailsPage = async ({ params }: TProductProps) => {
  const res = await fetch(`https://baby-bites-hazel.vercel.app/api/v1/products/${params.id}`);
  const { data: product } = await res.json();

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;

import Container from "@/Components/Container/Container";
import FilteredProducts from "@/Components/UI/Products/FilteredProducts";

const ProductsPage = async () => {
  console.log('before product')
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const { data: products } = await res.json();


  return (
    <Container className="my-10">
      <h3 className="text-center my-4 text-secondary font-bold">
        All Products
      </h3>
      <FilteredProducts products={products} />
    </Container>
  );
};

export default ProductsPage;
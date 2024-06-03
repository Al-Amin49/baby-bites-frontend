import Container from "@/Components/Container/Container";
import FilteredProducts from "@/Components/UI/Products/FilteredProducts";

const ProductsPage = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
  });
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
import ProductDetails from "@/Components/UI/ProductDetails/ProductDetails"

type TProductProps={
    params:{
        productId:string
    }
}
export const generateStaticParams = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/v1/products')
        const products = await res.json()

        if (Array.isArray(products)) {
            return products.slice(0, 10).map((product) => ({
                productId: product.id
            }))
        } else {
            throw new Error('Products response is not an array')
        }
    } catch (error) {
        console.error('Error fetching products:', error)
        return [] // Return empty array as fallback
    }
}

const ProductDetailsPage=async({params}:TProductProps)=>{
    const res= await fetch(`http://localhost:5000/api/v1/products/${params.productId}`, {cache:'no-store'})
    const {data:product}= await res.json()
 
    return(
        <div>
            <ProductDetails product={product}/>
        </div>
    )
}

export default ProductDetailsPage;
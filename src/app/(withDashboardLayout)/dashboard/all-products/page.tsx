import Link from "next/link";

const AllProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
  });
  const { data: sales } = await res.json();
  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-xl">Total Product: {sales.length}</h2>
        {/* <Link href="/dashboard/create-product">
          {" "}
          <button className="btn btn-primary text-white font-bold">
            Add Product
          </button>
        </Link> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price($)</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale: any, index: number) => (
              <tr key={sale._id}>
                <th>{index + 1}</th>
                <td>{sale.title}</td>
                <td>{sale.category}</td>
                <td>
                  {sale.flashSale ? (
                    <> {sale.salePrice} (flashSale)</>
                  ) : (
                    <>{sale.price}</>
                  )}
                </td>

                {/* <td>
                  <UpdateClothe clotheId={clothe._id} />
                </td> */}
                {/* <td>
                  <button
                    onClick={() => handleDeleteClothe(clothe._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;

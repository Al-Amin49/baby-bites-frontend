import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gray-300" >
        <Link href="/">
        <h2 className="text-2xl font-bold flex justify-center items-center text-white text-center py-8">
            <span className="text-secondary">Dashboard</span>{" "}
        
        </h2></Link>
        <ul className="menu p-4 text-base">
          <li>
            <Link href="/dashboard/all-products">All Products</Link>
          </li>

          {/* <div className="divider divider-secondary"></div>

          <li>
            <Link href="/">Home</Link>
          </li> */}
        </ul>
       
        
      </div>
    </>
  );
};
export default Sidebar;

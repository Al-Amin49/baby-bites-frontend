import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-gray-300">
        <h2 className="text-2xl font-bold flex justify-center items-center text-white text-center py-8">
        <Link href="/" className="btn btn-ghost text-xl">
        <span className="text-secondary">Baby</span> <span className="text-primary">Bites</span>
        </Link>
        </h2>
        <ul className="menu p-4 text-base">
          <li>
            <Link href="/dashboard/all-products">All Products</Link>
          </li>
        </ul>
        
      </div>
    </>
  );
};
export default Sidebar;

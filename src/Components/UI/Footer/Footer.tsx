
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#495498] text-neutral-content">
  <aside>
  <Link href="/" className="btn btn-ghost text-xl">
        <span className="text-secondary">Baby</span> <span className="text-primary">Bites</span>
        </Link>
    <p>lorem ipsum doler sit amet</p>
  </aside> 
  <nav>
 
    <div className="grid grid-cols-2 lg:grid-flow-col gap-8 place-items-center">
    <Link href="">Trending Products</Link>
    <Link href="">Categories</Link>
    <Link href="">Flash Sale</Link>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
    <Link href="">About Us</Link>
    <Link href="">Contact Us</Link>
    <Link href="">Customer Care</Link>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;
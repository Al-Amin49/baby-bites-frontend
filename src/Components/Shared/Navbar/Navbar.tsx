"use client"
import Container from "@/Components/Container/Container";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isDropDown, setIsDropDown]= useState(false);

    const handleCloseNav=()=>{
      setIsDropDown(false)
    }

    return (
        <Container>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden"
      onClick={()=>setIsDropDown(!isDropDown)}
      >
       {
        !isDropDown ?  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> : <p className="font-bold text-xl">X</p>
       }
      </div>
      {/* small screen */}
     {
        isDropDown && <>
         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-accent font-bold">
      <li onClick={handleCloseNav}><Link href="/">Home</Link></li>
      <li onClick={handleCloseNav}><Link href="/">Categories</Link></li>
      <li onClick={handleCloseNav}><Link href="/">Products</Link></li>
      <li onClick={handleCloseNav}><Link href="flash-sale">Flash Sale</Link></li>
      <li onClick={handleCloseNav}><Link href="/">About Us</Link></li>
      <li onClick={handleCloseNav}><Link href="/">Contact Us</Link></li>
      </ul>
        </>
     }
    </div>
    <Link href="/" className="btn btn-ghost text-xl">
        <span className="text-secondary">Baby</span> <span className="text-primary">Bites</span>
        </Link>
  </div>
  {/* large screen */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-accent font-bold">
      <li ><Link href="/">Home</Link></li>
      <li><Link href="/">Categories</Link></li>
      <li><Link href="/">Products</Link></li>
      <li><Link href="flash-sale">Flash Sale</Link></li>
      <li><Link href="/">About Us</Link></li>
      <li><Link href="/">Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href="/login" className="btn btn-primary">Login</Link>
  </div>
</div>
        </Container>
    );
};

export default Navbar;
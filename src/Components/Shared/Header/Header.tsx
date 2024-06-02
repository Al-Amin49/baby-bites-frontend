"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarContent,
    NavbarItem,
    Button,
  } from "@nextui-org/react";
  import { useState } from "react";
import Link from "next/link";
import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";

  
  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
     const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
    };
   const handleItemClick = () => {
      setIsMenuOpen(false);
    };
    const menuItems = [
      { label: "Home", href: "/" },
      { label: "Categories", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Flash Sale", href: "flash-sale" },
      { label: "About Us", href: "/" },
      { label: "Contact Us", href: "/" },
      { label: "test", href: "/" },
    ];
  
    return (
      <>
        <Navbar
          className="font-bold bg-gradient-to-bl from-gray-300 to-white"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden font-medium"
               onClick={handleMenuToggle}
            />
            <NavbarBrand className="">
             <Link href="/"> 
             <span className="text-secondary">Baby</span> <span className="text-primary">Bites</span>
             </Link>
            </NavbarBrand>
          </NavbarContent>
          

      {/* large screen */}
          <NavbarContent className="hidden sm:flex gap-4  font-medium" justify="center">
            {menuItems.map((item, index) => (
              <NavbarItem key={`${item.label}-${index}`} isActive={index === 1}>
                <Link
                  className="text-secondary font-medium"
                  href={item.href}
                  
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
           {/* small screen */}
           <NavbarMenu className="w-1/2 bg-gradient-to-bl from-gray-300 to-white ">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  onClick={handleItemClick}
                  className=" w-full text-secondary font-bold"
                  href={item.href}
                  
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
  
          <NavbarContent justify="end">
            <Link className="text-secondary font-medium" href="#contact">
             <PrimaryButton btnText="login"/>
            </Link>
          </NavbarContent>
        </Navbar>
      </>
    );
  };
  
  export default Header;
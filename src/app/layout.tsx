import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Shared/Header/Header";
import Footer from "@/Components/UI/Footer/Footer";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "@/lib/Providers";

const poppins = Poppins({
  weight: "400",
  subsets: ["devanagari"],
});

 export const metadata: Metadata = {
  title: "Baby Bites",
  description: "A Baby Online Shop",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
 
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
     
 
    <Providers>
    
       <Header/>
        <div className="min-h-screen">{children}</div>
       <Footer />
       </Providers>
      </body>
    </html>
  );
}

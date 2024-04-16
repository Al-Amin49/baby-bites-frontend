import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import Footer from "@/Components/UI/Footer/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["devanagari"],
});

 const metadata: Metadata = {
  title: "Baby Bites",
  description: "A Baby Online Shop",
};

export default function RootLayout({
  children,
  isDashboard = false,
}: Readonly<{
  children: React.ReactNode;
  isDashboard?: boolean;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      { !isDashboard && <Navbar />}
        <div className="min-h-screen">{children}</div>
       {!isDashboard && <Footer />}
      </body>
    </html>
  );
}

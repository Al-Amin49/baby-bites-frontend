
import { GiBabyBottle } from "react-icons/gi";
import {
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaPaperPlane,
  FaPhone,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Container from "@/Components/Container/Container";
import Link from "next/link";
import PrimaryButton from "@/Components/PrimaryButton/PrimaryButton";


const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-bl from-gray-300 to-white pt-20 px-16 md:px-20 pb-10">
        <Container className="mt-5">
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 text-[--color4] pb-8">
            <div>
              <Link
                href="/"
                className="text-4xl font-bold text-primary flex items-center gap-2 mb-8"
              >
                <span className="text-4xl">
                  <GiBabyBottle />
                </span>
                <span className="text-secondary">Baby</span> Bites
              </Link>

              <p className="w-[78%] mb-8">
                At Baby Bites, we are passionate about providing the best food options for your little ones. Shop with us and experience the quality!
              </p>

              <PrimaryButton btnText="SHOP NOW">
            
              </PrimaryButton>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">CONTACT US</h3>
              <div className="space-y-2 mb-8">
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaLocationDot /> New York, USA
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaPaperPlane /> support@babybites.com
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:text-accent transition duration-500"
                >
                  <FaPhone /> +1 234 567 890
                </Link>
              </div>

              <div className="flex justify-between max-w-[60%] gap-3">
                <a
                  href="https://twitter.com/BabyBites"
                  className="border rounded-full p-3 hover:bg-[#1999DC] transition duration-500"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://facebook.com/BabyBites"
                  className="border rounded-full p-3 hover:bg-[#39548D] transition duration-500"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://pinterest.com/BabyBites"
                  className="border rounded-full p-3 hover:bg-[#D10304] transition duration-500"
                >
                  <FaPinterestP />
                </a>
                <a
                  href="https://instagram.com/BabyBites"
                  className="border rounded-full p-3 hover:bg-[#B32997] transition duration-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">PRODUCTS</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Baby Foods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Snacks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Beverages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Organic Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Cushrefmer Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:text-accent transition duration-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* Sub Footer */}
          <section className="text-[--color4]">
            <hr className="border-b-1 border-[--color5]" />

            <div className="py-3 flex flex-col md:flex-row justify-between">
              <div className="flex gap-3 mb-3 md:mb-0">
                <p>Terms of Use</p>
                <span className="border border-r-[--color5]"></span>
                <p>Privacy Policy</p>
              </div>

              <div>
                <p>
                  Copyright ©{new Date().getFullYear()} by{" "}
                  <span className="text-primary">Baby Bites</span>. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

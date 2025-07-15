import { Link } from "react-router-dom";
import ConnectButton from "../ui/connectButton";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-6 bg-white">
      <div className="flex flex-col lg:flex-row justify-evenly">
        <div className="lg:w-[40%] space-y-5 lg:mb-0">
          <div className="h-10 md:h-12 lg:h-14 flex items-center justify-center lg:justify-start">
            <img
              src="/navayug.png"
              alt="Navayug Logo"
              className="w-50 h-50 object-contain filter brightness-0"
            />
          </div>
          <p className="mt-6 text-base lg:text-xl text-[--color-soft-gray] leading-snug font-medium">
            Empowering Brands With Bold Digital Solutions. From Strategy To Design,
            We Turn Ideas Into Impact. Let's Build Something Amazing Together.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/s1.png" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/s2.png" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/s3.png" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
          </div>

          <div className="mt-4">
            <ConnectButton label="LET'S CONNECT" to="/" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[50%]">
          <div>
            <h3 className="text-lg font-semibold mb-4 DegularBold font-text text-[--color-soft-gray]">Menu</h3>
            <ul className="space-y-3 text-[--color-soft-gray] text-base">
              <li><Link to="/" className="hover:text-black transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-black transition">About</Link></li>
              <li><Link to="/services" className="hover:text-black transition">Service</Link></li>
              <li><Link to="/pricing" className="hover:text-black transition">Plans and Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-text font-semibold mb-4 text-[--color-soft-gray]">Services</h3>
            <ul className="space-y-3 text-[--color-soft-gray] text-base">
              <li>Branding and Digital Design</li>
              <li>Web and App Development</li>
              <li>Performance Marketing</li>
              <li>Content and Social Media</li>
              <li>Event Marketing and PR</li>
              <li>Digital Strategy Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-text font-semibold mb-4 text-[--color-soft-gray]">Contact</h3>
            <div className="space-y-2 text-[--color-soft-gray] text-base">
              <p>plot no - 95, venkateswara colony, suchitra, Hyderabad, 500055</p>
              <p>+91 9492066702</p>
              <p>+91 9492066703</p>
              <p>navayugdigital@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-medium text-center text-[--color-soft-gray] ">
        © {new Date().getFullYear()} NAVAYUG. All rights reserved.
      </div>
    </footer>
  );
}
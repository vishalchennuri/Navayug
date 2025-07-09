import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const ConnectButton = () => (
  <button className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 px-4 py-2 rounded-full shadow-sm border border-white/20 hover:border-white/40 group">
    <span className="text-sm font-semibold text-[var(--color-dark)] mr-2"></span>
    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
      <ArrowRight size={16} />
    </div>
  </button>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu when link is clicked
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/80 backdrop-blur-md border border-orange-500/30 rounded-4xl px-6 lg:px-8 py-4 shadow-lg shadow-orange-500/5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-10 md:h-6 lg:h-10 flex items-center">
            <Link to="/" onClick={handleLinkClick}>
              <img
                src="/navayug.png"
                alt="Navayug Logo"
                className="w-32 h-40 object-contain filter brightness-0"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ label, href }, idx) => (
              <Link
                key={idx}
                to={href}
                onClick={handleLinkClick}
                className={`relative uppercase tracking-widest text-base font-normal leading-5 font-[DegularDisplay] transition-all duration-300 group cursor-pointer ${
                  currentPath === href
                    ? "text-orange-500 scale-105"
                    : "text-[var(--color-gray)] hover:text-[var(--color-dark)] hover:scale-105"
                }`}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-[0.2em]">
                  {label}
                </span>
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                    currentPath === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {/* Glow effect on hover */}
                <span className="absolute inset-0 bg-orange-500/10 rounded-md scale-0 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
            <div className="h-6 w-px bg-[var(--color-soft-gray)]/50 mr-6" />
            <ConnectButton label="CONTACT US" />
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-[var(--color-dark)] hover:text-orange-500 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-orange-500/20">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ label, href }, idx) => (
                <Link
                  key={idx}
                  to={href}
                  onClick={handleLinkClick}
                  className={`relative text-sm font-medium transition-all duration-300 group inline-block w-fit cursor-pointer ${
                    currentPath === href
                      ? "text-orange-500 scale-105"
                      : "text-[var(--color-dark)] hover:text-orange-500 hover:scale-105"
                  }`}
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
                    {label}
                  </span>
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      currentPath === href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                  {/* Mobile glow effect */}
                  <span className="absolute inset-0 bg-orange-500/10 rounded-md scale-0 group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
                </Link>
              ))}
              <div className="pt-2">
                <ConnectButton label="CONTACT US" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
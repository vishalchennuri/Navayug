import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ConnectButton from "../ui/connectButton";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PORTFOLIO", href: "/portfolio" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="bg-white/40 backdrop-blur-sm border border-orange-500/30 rounded-4xl px-6 lg:px-8 py-4 shadow-lg shadow-orange-500/5">
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

            {/* Mobile Toggle Button - Custom Hamburger */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center text-[var(--color-dark)] hover:text-orange-500 transition-colors duration-300 z-[60] touch-manipulation"
              onClick={handleToggle}
              aria-label="Toggle Navigation"
              type="button"
            >
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out my-1 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred Background */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-all duration-500 ease-in-out ${
            isOpen ? "backdrop-blur-md" : "backdrop-blur-0"
          }`}
          onClick={handleLinkClick}
        ></div>

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={handleLinkClick}
            className={`absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-[var(--color-dark)] hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-300 touch-manipulation shadow-lg ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "200ms" : "0ms",
            }}
            aria-label="Close Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Menu Items */}
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map(({ label, href }, idx) => (
              <Link
                key={idx}
                to={href}
                onClick={handleLinkClick}
                className={`relative text-2xl font-bold uppercase tracking-wider transition-all duration-300 group cursor-pointer transform touch-manipulation ${
                  currentPath === href
                    ? "text-orange-500 scale-110"
                    : "text-[var(--color-dark)] hover:text-orange-500 hover:scale-110"
                } ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${(idx + 1) * 100}ms` : "0ms",
                }}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:tracking-[0.2em] block py-2 px-4">
                  {label}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-300 ${
                    currentPath === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
                {/* Glow effect */}
                <span className="absolute inset-0 bg-orange-500/10 rounded-lg scale-0 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100"></span>
              </Link>
            ))}
            
            {/* Contact Button */}
            <div
              className={`pt-8 transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${(navLinks.length + 1) * 100}ms` : "0ms",
              }}
              onClick={handleLinkClick}
            >
              <ConnectButton label="CONTACT US" to="contact" />
            </div>
          </div>

        

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/5 rounded-full blur-xl animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
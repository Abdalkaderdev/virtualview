import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Camera } from "lucide-react";
import gsap from "gsap";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        height: isScrolled ? "3.2rem" : "4rem", // Shrink by 20%
        backgroundColor: isScrolled
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0)",
        boxShadow: isScrolled
          ? "0 4px 24px 0 rgba(30,41,59,0.08)"
          : "0 0px 0px 0 rgba(0,0,0,0)",
        duration: 0.35,
        ease: "power2.out",
      });
    }
  }, [isScrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-gray-900"
          : "bg-transparent text-white"
      }`}
      style={{ height: isScrolled ? "3.2rem" : "4rem" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className={`bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg ${isScrolled ? "" : "border border-white/30"}`}
            >
              <Camera
                className={`h-7 w-7 ${isScrolled ? "text-blue-700" : "text-white"}`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                VirtualView
              </span>
              <span
                className={`text-xs ${isScrolled ? "text-gray-500" : "text-blue-100"} -mt-1`}
              >
                360° Experiences
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition-colors duration-200 font-medium ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`transition-colors duration-200 font-medium ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`transition-colors duration-200 font-medium ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors duration-200 font-medium ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-6 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${isScrolled ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800" : "bg-white/10 text-white border border-white/30 hover:bg-white/20"}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors duration-200 ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-6 border-t animate-fadeIn ${isScrolled ? "border-gray-200 bg-white text-gray-900" : "border-white/20 bg-white/10 text-white"}`}
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`text-left transition-colors duration-200 font-medium py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left transition-colors duration-200 font-medium py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`text-left transition-colors duration-200 font-medium py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left transition-colors duration-200 font-medium py-2 ${isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left px-6 py-3 rounded-xl font-semibold w-fit mt-2 transition-all duration-200 ${isScrolled ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800" : "bg-white/10 text-white border border-white/30 hover:bg-white/20"}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

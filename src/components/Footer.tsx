import React, { useEffect, useRef } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true,
            },
          },
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "Services", action: () => scrollToSection("services") },
    { name: "Portfolio", action: () => scrollToSection("portfolio") },
    { name: "About Us", action: () => scrollToSection("about") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  const services = [
    "360° Virtual Tours",
    "Panoramic Photography",
    "Immersive Experiences",
    "VR Development",
    "Custom Solutions",
    "Interactive Media",
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      color: "hover:bg-sky-500",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden will-change-transform"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-xl shadow-lg">
                <Camera className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">VirtualView</span>
                <div className="text-blue-300 text-sm">360° Experiences</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Creating immersive virtual experiences that connect audiences with
              spaces in innovative ways. Professional 360° tours and panoramic
              photography services worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-teal-300 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg mt-1">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">
                    +1 (555) 123-4567
                  </div>
                  <div className="text-gray-400 text-sm">
                    Mon-Fri 9am-6pm EST
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 p-2 rounded-lg mt-1">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">
                    hello@virtualview.com
                  </div>
                  <div className="text-gray-400 text-sm">
                    24/7 support available
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-600 p-2 rounded-lg mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">
                    123 Innovation Ave
                  </div>
                  <div className="text-gray-400 text-sm">
                    New York, NY 10001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 VirtualView. All rights reserved. Crafted with passion for
              immersive experiences.
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6 text-sm">
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms of Service
                </button>
                <button className="text-gray-400 hover:text-white transition-colors duration-200">
                  Cookie Policy
                </button>
              </div>
              <button
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

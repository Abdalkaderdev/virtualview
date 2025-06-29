import React, { useEffect, useRef } from "react";
import { Play, ArrowRight, Eye, Globe, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bgRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
      // Headline slide-in
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      }
      // Subheadline fade-in with delay
      if (subRef.current) {
        gsap.from(subRef.current, {
          opacity: 0,
          y: 20,
          delay: 0.7,
          duration: 1,
          ease: "power2.out",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-transition"
    >
      {/* Background Image with Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Virtual Tour Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Globe className="h-4 w-4 text-teal-300" />
              <span className="text-sm font-medium">
                Professional 360° Solutions
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1
                ref={headlineRef}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight slide-in-left will-change-transform"
              >
                Immersive
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                  Virtual Tours
                </span>
                That Captivate
              </h1>
              <p
                ref={subRef}
                className="text-xl sm:text-2xl text-blue-100 leading-relaxed max-w-2xl fade-in-delayed will-change-transform"
              >
                Transform your spaces into stunning 360° experiences. We create
                professional virtual tours, panoramic photography, and immersive
                digital solutions that engage your audience like never before.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-3 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bounce-hover"
              >
                <Eye className="h-5 w-5" />
                <span className="font-semibold">View Our Work</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <Play className="h-5 w-5" />
                <span className="font-semibold">Learn More</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-300 mb-2">
                  500+
                </div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-300 mb-2">
                  98%
                </div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-300 mb-2">
                  24h
                </div>
                <div className="text-blue-200 text-sm">Turnaround Time</div>
              </div>
            </div>
          </div>

          {/* Interactive Preview */}
          <div className="relative lg:block hidden">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="w-full h-full bg-white/95 rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Virtual Tour Preview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 animate-float">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-teal-600" />
                  <span className="text-gray-900 font-semibold">360° View</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/20 animate-float-delayed">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-900 font-semibold">
                    HD Quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

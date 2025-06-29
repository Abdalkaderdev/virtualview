import React, { useEffect, useRef } from "react";
import {
  Camera,
  Globe,
  Zap,
  Users,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "360° Virtual Tours",
      description:
        "Fully interactive virtual tours that allow viewers to explore spaces naturally with smooth navigation and hotspot integration.",
      features: [
        "High-resolution imagery",
        "Interactive hotspots",
        "Mobile optimization",
        "Custom branding",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Camera className="h-10 w-10" />,
      title: "Panoramic Photography",
      description:
        "Professional panoramic photography services capturing stunning wide-angle views of your locations and properties.",
      features: [
        "Ultra-high resolution",
        "HDR processing",
        "Color correction",
        "Multiple formats",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Immersive Experiences",
      description:
        "Custom immersive digital solutions including VR experiences, interactive presentations, and multimedia integration.",
      features: [
        "VR compatibility",
        "Interactive elements",
        "Custom development",
        "Analytics tracking",
      ],
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Professional photographers and developers with years of experience in virtual tour creation.",
      stat: "10+ Years",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description:
        "We ensure the highest quality output with multiple quality checks and client approval processes.",
      stat: "100% Quality",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Delivery",
      description:
        "Quick turnaround times without compromising on quality, typically delivered within 24-48 hours.",
      stat: "24-48 Hours",
    },
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardRefs.current.length) {
        gsap.set(cardRefs.current, { opacity: 0, y: 60 });
        gsap.to(cardRefs.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRefs.current[0]?.parentElement, // the grid container
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white section-transition"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
            <Zap className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Comprehensive Virtual Tour
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end virtual tour solutions that help businesses
            showcase their spaces and engage customers through innovative
            digital experiences.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative will-change-transform"
            >
              <div
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 min-h-[380px]`}
              >
                <div
                  className={`bg-gradient-to-r ${service.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center text-blue-600 font-semibold group-hover:text-teal-600 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-16 text-white">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose VirtualView?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We combine cutting-edge technology with creative expertise to
              deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  {benefit.icon}
                </div>
                <div className="text-2xl font-bold text-teal-200 mb-2">
                  {benefit.stat}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-blue-100 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Play, Eye, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, i) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    });
    return () => ctx.revert();
  }, [activeFilter]);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "hospitality", name: "Hospitality" },
    { id: "real-estate", name: "Real Estate" },
    { id: "commercial", name: "Commercial" },
    { id: "retail", name: "Retail" },
  ];

  const projects = [
    {
      title: "Luxury Resort Suite",
      category: "hospitality",
      image:
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete virtual tour of a 5-star resort suite with interactive features and booking integration.",
      tags: ["360° Tour", "Interactive", "Mobile Optimized"],
    },
    {
      title: "Modern Office Complex",
      category: "commercial",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Professional office space showcase highlighting modern amenities and collaborative workspaces.",
      tags: ["Panoramic", "HD Quality", "Custom Branding"],
    },
    {
      title: "Dream Home Interior",
      category: "real-estate",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Stunning residential property tour featuring every room with detailed panoramic views.",
      tags: ["Virtual Staging", "360° Tour", "Floor Plans"],
    },
    {
      title: "Fine Dining Restaurant",
      category: "hospitality",
      image:
        "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Interactive restaurant tour showcasing ambiance, seating areas, and culinary excellence.",
      tags: ["Immersive", "Menu Integration", "Reservation System"],
    },
    {
      title: "Fashion Retail Store",
      category: "retail",
      image:
        "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Virtual showroom tour with product integration and interactive shopping features.",
      tags: ["E-commerce", "Product Showcase", "Shopping Cart"],
    },
    {
      title: "Contemporary Art Gallery",
      category: "commercial",
      image:
        "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Immersive art gallery experience with detailed artwork views and curator insights.",
      tags: ["Cultural", "Educational", "Audio Guide"],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white section-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full">
            <Eye className="h-4 w-4 text-teal-600" />
            <span className="text-teal-600 font-medium text-sm">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Showcasing Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
              Latest Work
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of immersive virtual tours across various
            industries. Each project demonstrates our commitment to quality and
            innovation.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl will-change-transform min-h-[380px]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110">
                      <Play className="h-6 w-6 text-gray-900" />
                    </button>
                    <button className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110">
                      <ExternalLink className="h-6 w-6 text-gray-900" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {
                      categories.find((cat) => cat.id === project.category)
                        ?.name
                    }
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Virtual Tour?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your project and bring your space to life with
              immersive virtual experiences that engage and captivate your
              audience.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 mx-auto">
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

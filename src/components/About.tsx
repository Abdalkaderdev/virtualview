import React from "react";
import {
  Award,
  Target,
  Lightbulb,
  Heart,
  Users,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision",
      description:
        "Every detail matters. We capture spaces with meticulous attention to accuracy and visual appeal.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We stay at the forefront of virtual tour technology, constantly exploring new possibilities.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description:
        "Our love for visual storytelling drives us to create experiences that truly connect.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "We set high standards for ourselves and deliver nothing but the best for our clients.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Lead Photographer & Founder",
      image:
        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "10+ years in professional photography with expertise in architectural and commercial spaces.",
      expertise: "Photography, Creative Direction",
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Software engineer specializing in VR technology and immersive web experiences.",
      expertise: "VR Development, Web Technologies",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image:
        "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Design expert with a focus on user experience and interactive storytelling.",
      expertise: "UX Design, Interactive Media",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      number: "50+",
      label: "Industry Awards",
      icon: <Award className="h-6 w-6" />,
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-blue-600 font-medium text-sm">About Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Crafting Digital Experiences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Since 2020
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about transforming spaces into immersive digital
            experiences. Our team combines technical expertise with creative
            vision to deliver exceptional virtual tours.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Founded in 2020, VirtualView emerged from a simple belief: every
                space has a story to tell, and technology can help tell it
                better. What started as a small team of photographers and
                developers has grown into a leading virtual tour company.
              </p>
              <p>
                We've completed over 500 projects across various industries,
                from luxury real estate to cultural institutions. Our commitment
                to innovation and quality has earned us the trust of clients
                worldwide.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in
                virtual tour technology, always with the goal of creating more
                engaging and immersive experiences.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-blue-600">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team at work"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600 text-sm">Client Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach
              to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`bg-gradient-to-r ${value.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The talented individuals behind every virtual tour, bringing
              creativity and expertise to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h4>
                <div className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <div className="bg-gray-50 px-4 py-2 rounded-full">
                  <span className="text-xs text-gray-700 font-medium">
                    {member.expertise}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

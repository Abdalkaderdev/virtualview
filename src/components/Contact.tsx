import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9am-6pm EST",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@virtualview.com",
      subtitle: "We reply within 24 hours",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office",
      details: "123 Innovation Ave",
      subtitle: "New York, NY 10001",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const faqs = [
    {
      question: "How long does a virtual tour take to create?",
      answer:
        "Most projects are completed within 24-48 hours after photography, depending on complexity and customization requirements.",
    },
    {
      question: "What's included in your service?",
      answer:
        "Photography, editing, virtual tour creation, hosting, basic customization, and ongoing support are all included in our packages.",
    },
    {
      question: "Do you travel for projects?",
      answer:
        "Yes! We serve clients nationwide and internationally. Travel costs are calculated based on location and project scope.",
    },
    {
      question: "Can you integrate with our existing website?",
      answer:
        "Absolutely! Our virtual tours can be easily embedded into any website or shared via direct links and social media.",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-teal-100 px-4 py-2 rounded-full">
            <MessageSquare className="h-4 w-4 text-teal-600" />
            <span className="text-teal-600 font-medium text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Let's Create Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space into an immersive virtual experience?
            We'd love to discuss your project and provide a customized solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out. We'll get back to you within 24
                    hours with a detailed response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-semibold text-gray-700 mb-3"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="360-tours">360° Virtual Tours</option>
                        <option value="panoramic">Panoramic Photography</option>
                        <option value="immersive">Immersive Experiences</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-3"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white resize-none"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-3 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div
                      className={`bg-gradient-to-r ${info.color} text-white p-3 rounded-xl shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="h-5 w-5 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-900">
                  Quick Answers
                </h4>
              </div>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h5 className="font-semibold text-gray-900 mb-2 text-sm">
                      {faq.question}
                    </h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <div className="section-transition">
        <Header />
      </div>
      <div className="section-transition">
        <Hero />
      </div>
      <div className="section-transition">
        <Services />
      </div>
      <div className="section-transition">
        <Portfolio />
      </div>
      <div className="section-transition">
        <About />
      </div>
      <div className="section-transition">
        <Contact />
      </div>
      <div className="section-transition">
        <Footer />
      </div>
    </div>
  );
}

export default App;

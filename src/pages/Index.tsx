import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Mentors from "@/components/Mentors";
import BecomeMentor from "@/components/BecomeMentor";
import Gallery from "@/components/Gallery";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
  <div className="min-h-screen overflow-x-hidden">
    <Header />
    <Hero />
    <About />
    <History />
    <Projects />
    <Testimonials />
    <Mentors />
    <BecomeMentor />
    <Gallery />
    <JoinCTA />
    <Footer />
  </div>
  );
};

export default Index;

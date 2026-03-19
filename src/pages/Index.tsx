import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Mentors from "@/components/Mentors";
import Gallery from "@/components/Gallery";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Header />
    <Hero />
    <About />
    <History />
    <Projects />
    <Mentors />
    <Gallery />
    <JoinCTA />
    <Footer />
  </div>
);

export default Index;

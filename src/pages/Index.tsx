import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import History from "@/components/History";
import Training from "@/components/Training";
import Mentors from "@/components/Mentors";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Header />
    <Hero />
    <About />
    <History />
    <Training />
    <Mentors />
    <Gallery />
    <Footer />
  </div>
);

export default Index;

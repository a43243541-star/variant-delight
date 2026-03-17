import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Association from "@/components/Association";
import Training from "@/components/Training";
import Mentors from "@/components/Mentors";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Stats />
    <Association />
    <Training />
    <Mentors />
    <Gallery />
    <Footer />
  </div>
);

export default Index;

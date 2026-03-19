import Header from "@/components/Header";
import FindMentor from "@/components/FindMentor";
import Footer from "@/components/Footer";

const MentorsPage = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Header />
    <div className="pt-20">
      <FindMentor />
    </div>
    <Footer />
  </div>
);

export default MentorsPage;

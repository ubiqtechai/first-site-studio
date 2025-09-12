import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { ServicesOverview } from "@/components/ServicesOverview";
import { PracticeDetails } from "@/components/PracticeDetails";
import { OurTeam } from "@/components/OurTeam";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <AboutUs />
        <ServicesOverview />
        <PracticeDetails />
        <OurTeam />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
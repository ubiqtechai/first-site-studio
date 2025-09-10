import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { PracticeDetails } from "@/components/PracticeDetails";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServicesOverview />
        <PracticeDetails />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
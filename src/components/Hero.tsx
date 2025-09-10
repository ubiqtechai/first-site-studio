import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ContactForm } from "./ContactForm";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/9d37dfe8-4c2b-4ddf-af0d-7381036c08db.png"
          alt="Modern office interior with wood paneling and blinds"
          className="w-full h-full object-cover hero-duotone"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/60 to-primary/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Subtitle Chip */}
        <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
          India | Cross-Border Capabilities
        </Badge>

        {/* Main Heading */}
        <h1 className="heading-xl mb-6 max-w-4xl mx-auto">
          UnifiedHorizon — Not just a consultancy, A legal atelier
        </h1>

        {/* Subheading */}
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Practice-led advice across corporate transactions, disputes, and regulatory interfaces, 
          presented in a factual format suitable for international teams.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToServices}
            size="lg"
            variant="default"
            className="bg-primary hover:bg-primary-hover text-white border-0 min-w-[200px] focus-ring"
          >
            Explore Services
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm min-w-[200px] focus-ring"
              >
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="heading-sm">Request Consultation</DialogTitle>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};
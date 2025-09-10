import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ContactForm } from "./ContactForm";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-charcoal">
            UnifiedHorizon
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              About
            </a>
            <button
              onClick={scrollToServices}
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              Services
            </button>
            <a
              href="#sectors"
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              Sectors
            </a>
            <a
              href="#team"
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              Team
            </a>
            <a
              href="#insights"
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors focus-ring rounded-sm px-1 py-1"
            >
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="focus-ring">
                Request Consultation
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
    </nav>
  );
};
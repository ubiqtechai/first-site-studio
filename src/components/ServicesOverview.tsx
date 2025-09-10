import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    title: "Intellectual Property",
    description: "Full trademark, patent, design, copyright lifecycle — prosecution, transactions, enforcement, and portfolio strategy."
  },
  {
    title: "Corporate Law",
    description: "Lifecycle counsel for entity structuring, M&A, JVs, PE/VC, governance, and reorganizations under Indian law and FDI norms."
  },
  {
    title: "Commercial Law", 
    description: "Day-to-day and strategic contracts across supply, distribution, franchise, technology, and platform arrangements."
  },
  {
    title: "Civil Litigation",
    description: "Representation across Supreme Court, High Courts, District Courts, and tribunals for contractual and property disputes and remedies."
  },
  {
    title: "Arbitration & ADR",
    description: "Institutional and ad hoc proceedings seated in India and abroad, including interim relief and award enforcement."
  },
  {
    title: "Banking, Finance & IBC",
    description: "Financing documentation, security creation, restructuring, and IBC strategy before NCLT/NCLAT."
  },
  {
    title: "Technology, Data & Platforms",
    description: "Technology transactions, SaaS terms, data governance, and sector overlays for fintech, healthtech, and marketplaces."
  },
  {
    title: "Competition & Antitrust",
    description: "Merger control, verticals, investigations, leniency, and compliance programs before the CCI and appellate fora."
  }
];

export const ServicesOverview = () => {
  const scrollToPracticeDetail = (title: string) => {
    const sectionId = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
    const element = document.getElementById(`practice-${sectionId}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-4">Our Legal Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal capabilities across corporate transactions, disputes, and regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="cursor-pointer transition-all duration-300 hover:shadow-elevated hover:scale-[1.02] bg-card border-border focus-ring"
              onClick={() => scrollToPracticeDetail(service.title)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  scrollToPracticeDetail(service.title);
                }
              }}
            >
              <CardHeader>
                <CardTitle className="heading-sm text-charcoal">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground italic">
            Practice descriptions reflect Indian professional norms and public sources.
          </p>
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent } from "./ui/card";

const teamMembers = [
  {
    id: "a",
    name: "A",
    role: "Partner, Corporate and M&A",
    description: "Cross‑border M&A, JV structuring, governance."
  },
  {
    id: "b", 
    name: "B",
    role: "Partner, Disputes",
    description: "Civil litigation and arbitration across infrastructure and technology."
  },
  {
    id: "c",
    name: "C", 
    role: "Counsel, IP",
    description: "Portfolio strategy, prosecution, enforcement."
  },
  {
    id: "d",
    name: "D",
    role: "Partner, Competition", 
    description: "Merger control and investigations."
  },
  {
    id: "e",
    name: "E",
    role: "Counsel, Banking & IBC",
    description: "Financing, security, restructuring."
  },
  {
    id: "f",
    name: "F",
    role: "Counsel, Technology",
    description: "SaaS, data, and platform transactions."
  }
];

export const OurTeam = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-charcoal mb-4">Our Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-semibold text-charcoal">{member.name}</span>
                </div>
                <h3 className="heading-sm text-charcoal mb-2">{member.role}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
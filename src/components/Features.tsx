import { Card } from "@/components/ui/card";
import { Zap, Shield, Rocket, Users, Globe, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built for speed with modern architecture that delivers exceptional performance every time."
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security with end-to-end encryption and comprehensive data protection."
    },
    {
      icon: Rocket,
      title: "Scale Effortlessly",
      description: "Grow from startup to enterprise without changing platforms. Built to scale with your success."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless collaboration tools that bring your team together and boost productivity."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy worldwide with our global infrastructure and CDN for optimal performance."
    },
    {
      icon: Heart,
      title: "Made with Care",
      description: "Crafted with attention to detail and a focus on user experience that delights."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to accelerate your growth and simplify your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-border/50 bg-card shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
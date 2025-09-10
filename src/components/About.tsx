import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "10,000+ satisfied customers worldwide",
    "99.9% uptime guarantee",
    "24/7 expert support team",
    "ISO 27001 certified security"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                About Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                Innovation Meets
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Excellence</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're passionate about building tools that empower teams to achieve extraordinary results. 
                Our platform combines cutting-edge technology with intuitive design to deliver an 
                exceptional user experience.
              </p>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="shadow-elegant">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-glow">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Active Users</span>
                  <span className="text-2xl font-bold text-primary">127K</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Growth Rate</span>
                  <span className="text-2xl font-bold text-primary">+245%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">Customer Satisfaction</span>
                  <span className="text-2xl font-bold text-primary">98%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
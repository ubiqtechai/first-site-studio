import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Welcome to the Future
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Build Amazing
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Digital </span>
                Experiences
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your ideas into reality with our cutting-edge platform. 
                Create, innovate, and scale your business to new heights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="shadow-glow">
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Trusted by 10k+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Digital innovation and technology" 
                className="w-full h-auto rounded-2xl shadow-glow"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
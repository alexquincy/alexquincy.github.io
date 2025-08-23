import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-6">
        <div className="space-y-4">
          <h1 className="font-display text-6xl md:text-8xl font-semibold tracking-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Alex Quinn
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer @ <span className="text-netflix-red font-semibold">Netflix</span>
            </p>
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about creating elegant solutions and innovative technologies that scale. 
          Building the future of entertainment, one line of code at a time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            className="group shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Get in Touch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a 
            href="https://github.com/ornate-bonzai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="#" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:alex@example.com" 
            className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
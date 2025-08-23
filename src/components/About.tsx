import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Users, Trophy } from "lucide-react";

const About = () => {
  const skills = [
    "TypeScript", "React", "Node.js", "Python", "Go", "AWS", 
    "Docker", "Kubernetes", "GraphQL", "PostgreSQL", "Redis", "Microservices"
  ];

  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building scalable applications from concept to deployment with modern technologies."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing systems to handle millions of users with minimal latency."
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring developers and driving technical excellence across teams."
    },
    {
      icon: Trophy,
      title: "Innovation Focus",
      description: "Constantly exploring new technologies and pushing the boundaries of what's possible."
    }
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A software engineer with a passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">
                I'm a software engineer at Netflix, where I work on building and scaling the systems that 
                power entertainment for millions of users worldwide. My journey in tech started with a 
                curiosity about how things work, and has evolved into a passion for creating elegant solutions 
                to complex problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source 
                projects, or sharing knowledge with the developer community. I believe in writing clean, 
                maintainable code and building systems that stand the test of time.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-lg">{highlight.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
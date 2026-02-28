import { Card } from "@/components/ui/card";
import { Mail, MapPin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alexquinn385@gmail.com",
      link: "mailto:alexquinn385@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Seattle, Washington",
      link: null
    },
    {
      icon: Twitter,
      title: "X (Twitter)",
      value: "@qualexy_",
      link: "https://x.com/qualexy_"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold">
            Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's connect and discuss opportunities, collaborations, or just have a great conversation about tech
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const content = (
              <Card className="p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg shrink-0">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </Card>
            );

            const isExternal = info.link?.startsWith('http');
            return info.link ? (
              <a key={info.title} href={info.link} className="block" target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                {content}
              </a>
            ) : (
              <div key={info.title}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
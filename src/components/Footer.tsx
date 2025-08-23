import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ornate-bonzai",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:alex@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="font-display text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
              Alex Quinn
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart className="h-3 w-3 text-netflix-red fill-current" /> using React & TypeScript
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform rounded-lg hover:bg-primary/5"
                  aria-label={link.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            Building the future of entertainment at Netflix, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ajay-kumar-varma",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:ajay.kumar.varma@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Ajay Kumar Varma
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Aspiring Software Engineer passionate about creating innovative solutions 
                and building amazing user experiences with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
              <p className="text-muted-foreground">
                Always open to discussing new opportunities and interesting projects.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-background/50 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-glow group border border-border hover:border-primary/30"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>&copy; {currentYear} Ajay Kumar Varma. Made with</span>
                <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>

              {/* Back to Top */}
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group hover:bg-primary/10"
              >
                <span className="mr-2">Back to Top</span>
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>

          {/* Additional Footer Note */}
          <div className="text-center mt-6 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Built with modern web technologies • Responsive Design • Optimized Performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
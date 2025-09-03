import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ajay Kumar Varma
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right">
            Aspiring Software Engineer | NxtWave Student | Tech Enthusiast
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Passionate about creating innovative solutions and building amazing user experiences. 
            Currently mastering full-stack development with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              className="group bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
              size="lg"
              onClick={() => {
                // Create a dummy resume download (you can replace with actual resume file)
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Ajay_Kumar_Varma_Resume.pdf';
                link.click();
              }}
            >
              <Download className="group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              <Mail />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <ArrowDown className="mx-auto text-primary/70 hover:text-primary transition-colors" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
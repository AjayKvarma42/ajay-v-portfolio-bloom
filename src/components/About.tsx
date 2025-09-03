const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start animate-slide-in-left">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-hero">
                  <img 
                    src="/lovable-uploads/ce5b9c5d-c78e-4279-8880-9469b81b7198.png" 
                    alt="Ajay Kumar Varma - Profile Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-glow"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slide-in-right">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Passionate Developer & Problem Solver
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Ajay Kumar Varma, an aspiring software engineer currently pursuing my education 
                  at <span className="text-primary font-semibold">NxtWave</span>, where I'm building a strong 
                  foundation in full-stack development and modern technologies.
                </p>
                
                <p>
                  My journey in technology is driven by curiosity and a passion for creating 
                  solutions that make a difference. I enjoy working with cutting-edge technologies 
                  and am always eager to learn new frameworks and tools.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new tech trends, contributing to 
                  open-source projects, or working on personal projects that challenge my skills 
                  and creativity.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-card rounded-xl border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
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
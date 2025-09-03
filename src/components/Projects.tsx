import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with React and Node.js featuring user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, real-time updates, and collaborative features for team productivity.",
      techStack: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "A modern weather application providing real-time weather data, forecasts, and location-based services with an intuitive user interface.",
      techStack: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing projects, skills, and experience with modern design principles and smooth animations.",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Recipe Finder App",
      description: "A recipe discovery application that helps users find recipes based on available ingredients with filtering and favorite features.",
      techStack: ["React", "Recipe API", "Local Storage", "Bootstrap"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects that demonstrate my skills and creativity
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`group bg-gradient-card rounded-xl border border-border overflow-hidden hover:shadow-hero transition-all duration-500 animate-fade-in ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 md:p-8">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-200" />
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      className="group/btn bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 transition-all duration-300"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="outline"
              size="lg"
              className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              View All Projects on GitHub
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
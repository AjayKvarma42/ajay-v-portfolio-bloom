import { Cloud, Code, Database, Globe, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "HTML5", "CSS3", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Node.js", "Express.js", "Bootstrap"],
      color: "text-green-400"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["SQLite", "MySQL", "MongoDB", "Git", "GitHub"],
      color: "text-purple-400"
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: ["VS Code", "Postman", "Chrome DevTools", "NPM", "Figma"],
      color: "text-orange-400"
    },  
    {
      title: "Cloud Tools",
      icon: Cloud,
      skills: ["AWS","Ansible", "Terraform ", "jenkins", "Github Actions", "Docker", "Kubernetes"],
      color: "text-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I've mastered during my journey
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className="bg-gradient-card rounded-xl p-8 border border-border hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-background/50 ${category.color} mr-4`}>
                    <category.icon size={24} className="current-color" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="bg-background/30 rounded-lg px-4 py-3 text-center border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <span className="text-foreground group-hover:text-primary transition-colors duration-200 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground text-lg">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
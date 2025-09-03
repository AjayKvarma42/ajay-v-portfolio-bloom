import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Full Stack Development Program",
      institution: "NxtWave CCBP 4.0",
      location: "Online",
      duration: "2023 - Present",
      description: "Comprehensive program covering HTML, CSS, JavaScript, Python, React.js, Node.js, and databases with hands-on projects and industry mentorship.",
      achievements: [
        "Built 50+ projects and coding assignments",
        "Mastered modern web development technologies",
        "Gained expertise in full-stack application development"
      ],
      status: "In Progress",
      featured: true
    },
    {
      degree: "Bachelor's Degree",
      institution: "SRK Institute of Technology",
      location: "India",
      duration: "2022 - 2026",
      description: "Foundational education with focus on problem-solving, analytical thinking, and technical fundamentals.",
      achievements: [
        "Strong academic performance",
        "Active participation in technical events",
        "Leadership roles in college activities"
      ],
      status: "In Progress",
      featured: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning in technology
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={edu.degree}
                className={`relative bg-gradient-card rounded-xl p-6 md:p-8 border border-border hover:shadow-card transition-all duration-300 animate-slide-in-left ${
                  edu.featured ? 'border-primary/30 shadow-glow' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Featured Badge */}
                {edu.featured && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Award size={14} />
                      Current
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                      <GraduationCap size={28} className="text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-primary font-semibold mb-3">
                        {edu.institution}
                      </h4>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {edu.status}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Learning */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground mb-4">
                Always exploring new technologies, taking online courses, and staying updated with industry trends
              </p>
              <div className="flex justify-center flex-wrap gap-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                  Online Courses
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                  Tech Blogs
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                  Open Source
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                  Community Events
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
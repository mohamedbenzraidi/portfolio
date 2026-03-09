import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "3D Virtual Museum",
    description:
    "An interactive multi-room 3D museum application with asynchronous asset loading and centralized scene management. Includes FPS navigation, user interactions, and optimized runtime performance.",
    image: "/projects/virtual-museum.png",
    tags: ["Java", "JMonkeyEngine", "3D Graphics", "Maven", "SQL"],
    // link: "#",
    github: "https://github.com/mohamedbenzraidi/robot-3d-java.git",
  },
  {
    title: "Financial Forecasting & Monitoring Dashboard",
    description:
      "An intelligent financial platform for internal business intelligence. Tracks sales, expenses, profits, and stock performance with ML-powered predictions for price forecasting, sales trends, risk assessment, and automated alerts.",
    image: "/projects/financial-dashboard.png",
    tags: ["Python", "React", "TensorFlow", "Web Scraping", "postgres", "Time Series"],
    // link: "#",
    github: "https://github.com/mohamedbenzraidi/smartmarketinsight.git",
  },
  {
    title: "Automated Job Application Platform",
    description:
      "A SaaS platform that automates job applications by personalizing resumes and cover letters for each position using AI. Includes automatic submission, application tracking, dashboard with statistics, and email notifications.",
    image: "/projects/job-automation.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "OpenAI API", "JWT"],
    // link: "#",
    github: "https://github.com/mohamedbenzraidi/Automated-Job-Application-Platform.git",
  },
  {
    title: "Brain MRI Analysis Pipeline",
    description:
      "A complete pipeline for brain MRI analysis, including automated preprocessing, 3D deep learning models for classification and segmentation, and real-time inference through a web interface.",
    image: "/projects/mri-pipeline.png",
    tags: ["Python", "PyTorch", "MONAI", "Deep Learning", "Streamlit"],
    // link: "#",
    github: "https://github.com/mohamedbenzraidi/irm-project.git",
  },
  {
    title: "Academic Management Platform",
    description:
      "A role-based academic management system for administrators, department heads, and teachers. Supports course assignments, document management, reporting, and versioned data tracking.",
    image: "/projects/academic-platform.png",
    tags: ["Laravel", "SQL", "Web Development"],
    // link: "#",
    github: "https://github.com/mohamedbenzraidi/eservice-laravel.git",
  },
];


export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:justify-items-center md:mx-auto">
          {displayedProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in w-full"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a> */}
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        {!showAll && (
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton onClick={() => setShowAll(true)}>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};
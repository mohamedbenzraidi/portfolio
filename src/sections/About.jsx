import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Building solid foundations in algorithms, data structures, and clean code principles.",
  },
  {
    icon: Rocket,
    title: "Learning & Growth",
    description:
      "Constantly improving through projects, challenges, and real-world problem solving.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating with classmates and teams on academic and personal projects.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity",
    description:
      "Exploring new technologies, frameworks, and best practices in software development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Hi, I’m Mohamed Benzraidi
              <span className="font-serif italic font-normal text-white">
                {" "}— software engineer student.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a software engineering student passionate about building
                meaningful and efficient applications. I enjoy understanding
                how systems work under the hood and turning ideas into working
                solutions.
              </p>

              <p>
                My interests include web development, backend systems, and
                modern software architectures. I work with technologies like
                JavaScript, React, Node.js, and I’m continuously expanding my
                skill set through academic and personal projects.
              </p>

              <p>
                Beyond coding, I like learning about new tools, improving my
                problem-solving skills, and preparing myself for real-world
                software engineering challenges.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to grow as a software engineer by building reliable,
                well-structured applications and continuously learning from
                every project I work on."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

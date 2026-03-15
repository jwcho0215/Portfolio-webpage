import { Briefcase, Code, User} from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Eager to learn and grow as a developer!
            </h3>
            <h4 className="text-muted-foreground">Some of the technologies I'm familiar with include, but are not limited to: </h4>
            <p className="text-muted-foreground">React, JavaScript, TypeScript, Python, HTML, CSS, Java, C, Shell, Bash, Dash, SQL, Unix, Linux, etc.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
              </a>
              <a
                href="/projects/Resume_Joshua.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Academics</h4>
                        <p className="text-muted-foreground">University of New South Wales, Master of Information Technology (Major: Datebase Systems) </p>
                        <p className="text-muted-foreground"></p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Development</h4>
                        <p className="text-muted-foreground">Interested in roles for Frontend, Backend, Devops, FullStack, Site Reliability Engineer </p>
                    </div>
                </div>
            </div> 
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Skills</h4>
                        <p className="text-muted-foreground">Developed projects and grew my skills sets in Frontend, Backend, and Full-Stack development. Also, I have experience writing scripts in Shell to streamline processes for software. </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

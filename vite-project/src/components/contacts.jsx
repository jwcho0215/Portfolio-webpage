import { Linkedin, Mail, MapPin, Send } from "lucide-react";
export const Contacts = () => {
  
    
    return (
    <div className="container mx-auto max-w-5xl">
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. Iam always open to discussing new
          opportunities, and expanding my knowledge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 mx-auto md:col-span-2 w-full max-w-md">
            <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
              <div className="flex flex-col items-center text-center gap-3 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:jwpark021523@outlook.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jwcho0215@outlook.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center text-center gap-3 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Sydney, Australia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/joshua-c-57547b202"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

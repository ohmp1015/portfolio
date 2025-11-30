import { GraduationCap, MapPin, Briefcase } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
              design with robust engineering. My favorite work lies at the intersection of design and development,
              creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              As a recent B.Tech graduate from <span className="text-primary font-medium">Parul University</span>, I've
              developed and deployed impactful projects including Taskflow, Healthcare Management System, and
              FoodieSpot. I specialize in full-stack development using technologies like React, Node.js, Express.js, and
              MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Now, I'm ready to take the next step in my career by contributing to innovative tech solutions and growing
              as a professional developer. I'm actively seeking opportunities where I can apply my skills and continue
              learning from experienced teams.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-muted-foreground text-sm">B.Tech in Computer Science</p>
                  <p className="text-primary text-sm">Parul University</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground text-sm">Gujarat, India</p>
                  <p className="text-primary text-sm">Open to Remote Work</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Status</h3>
                  <p className="text-muted-foreground text-sm">Fresh Graduate</p>
                  <p className="text-primary text-sm">Actively Seeking Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TaskFlow",
    description:
      "A powerful team collaboration platform enabling users to create, edit, and manage tasks and documents with real-time collaboration. Features multilingual document translation, AI assistant for document Q&A, secure sharing, and PDF export for offline use.",
    image: "/task-management-collaboration-dashboard-dark-theme.jpg",
    tags: ["Next.js", "Convex", "Clerk", "Edgestore", "OpenAI", "Tailwind"],
    github: "https://github.com/ohmp1015/taskflow",
    live: "https://taskflow-1-rust.vercel.app/",
    role: "Team Leader, Web Designer",
  },
  {
    title: "PixelVerse",
    description:
      "A sleek and collaborative workspace that lets users create, organize, and edit documents in real time. It includes multilingual translation, an AI assistant for document-based queries, secure sharing, and smooth PDF export — all built for fast, intuitive productivity.",
    image: "/pixel-verse.jpg",
tags: ["ReactJS", "Node.js", "Express.js", "MongoDB", "React Router", "Context API", "CSS", "Tailwind CSS"],
    github: null,
    live: "https://pixelverse-gamma.vercel.app/",
  },
  {
    title: "FoodieSpot",
    description:
      "A full-stack web application built with the MERN stack, designed to provide a seamless and dynamic food discovery experience for users. Features include restaurant listings, reviews, and user authentication.",
    image: "/food-delivery-app-interface-modern-colorful.jpg",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/ohmp1015/foodiespot",
    live: "https://foodie-orpin-pi.vercel.app/",
  },
  {
    title: "Furniture",
    description:
      "A responsive web application built with React.js, offering a seamless browsing experience for exploring and purchasing stylish furniture. Features modern UI and smooth animations.",
    image: "/modern-furniture-ecommerce-website-clean-minimal.jpg",
    tags: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/ohmp1015/furniture",
    live: "https://wood-topaz.vercel.app/",
  },
  {
    title: "HealthHub",
    description:
      "A responsive web application designed to manage patient records and appointments efficiently. Built with core web technologies focusing on usability and accessibility.",
    image: "/healthcare-dashboard-patient-management-system-blu.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Healthcare"],
    github: "https://github.com/ohmp1015/HealthHub-main",
    live: "https://health-hub-main.vercel.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl text-pretty">
            Here are some of the projects I'm proud to have worked on. Each represents a unique challenge and a learning
            opportunity.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-xl border border-border bg-card group-hover:border-primary/30 transition-all duration-300">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} Screenshot`}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:text-right" : ""}`}>
                <div className={`flex items-center gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <span className="text-primary text-sm font-mono">Featured Project</span>
                  {"role" in project && project.role && (
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">{project.role}</Badge>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{project.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className={`flex items-center gap-4 pt-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={20} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

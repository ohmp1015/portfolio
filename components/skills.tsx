const skills = [
  {
    name: "Python",
    description: "Versatile high-level programming language for backend & scripting.",
    color: "from-yellow-500/20 to-yellow-600/10",
  },
  {
    name: "HTML",
    description: "Standard markup language for creating web pages.",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    name: "CSS",
    description: "Style sheet language used for describing the look of a webpage.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    name: "JavaScript",
    description: "High-level scripting language for dynamic web content.",
    color: "from-yellow-400/20 to-yellow-500/10",
  },
  {
    name: "ReactJS",
    description: "JavaScript library for building user interfaces.",
    color: "from-cyan-400/20 to-cyan-500/10",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for building fast backend services.",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    name: "Express.js",
    description: "Minimal and flexible Node.js web application framework.",
    color: "from-gray-400/20 to-gray-500/10",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for flexible and scalable data storage.",
    color: "from-green-400/20 to-green-500/10",
  },
  {
    name: "MySQL",
    description: "Relational database management system.",
    color: "from-blue-400/20 to-blue-500/10",
  },
  {
    name: "Framer Motion",
    description: "Animation library for React apps.",
    color: "from-pink-500/20 to-pink-600/10",
  },
  {
    name: "Bootstrap",
    description: "CSS framework for responsive UI design.",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    color: "from-teal-400/20 to-teal-500/10",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl text-pretty">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group p-5 rounded-xl bg-gradient-to-br ${skill.color} border border-border hover:border-primary/50 transition-all duration-300 cursor-default`}
            >
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

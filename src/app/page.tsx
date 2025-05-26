import { Button } from "@/components/ui/button"
import { Code, ExternalLink } from "lucide-react"
import { socials } from "./constants/socials"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { projects } from "./constants/projects"

export default function Home() {
  
  const techBadges = [
    { name: "React", color: "bg-emerald-700 text-zinc-300" },
    { name: "Node.js", color: "bg-amber-500 text-zinc-900" },
    { name: "TypeScript", color: "bg-cyan-500 text-zinc-900" },
    { name: "Nest.js", color: "bg-emerald-700 text-zinc-300" },
    { name: "Next.js", color: "bg-amber-500 text-zinc-900" },
    { name: "React Query", color: "bg-cyan-500 text-zinc-900" },
    { name: "Spring Boot", color: "bg-emerald-700 text-zinc-300" },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900/50" />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">

        <div className="text-center mb-8">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-lime-400/30">
            <AvatarImage src="https://github.com/luizdev7727.png" alt="Foto do programador" />
            <AvatarFallback className="bg-zinc-800 text-lime-400 text-2xl font-bold">LA</AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold text-zinc-300 mb-2">Luiz Antonio</h1>
          <p className="text-lime-400 font-medium mb-3">Full Stack Developer</p>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {techBadges.map((badge, index) => (
              <Badge key={index} className={`${badge.color} border-0 font-medium`}>
                {badge.name}
              </Badge>
            ))}
          </div>

          <p className="text-zinc-500 text-sm leading-relaxed">
            Desenvolvedor apaixonado por criar soluções inovadoras. Especialista em React, Node.js e tecnologias
            modernas.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {socials.map((link, index) => (
            <div
              key={index}
              className={`bg-zinc-900 rounded-md border-zinc-800 hover:border-lime-400/30 transition-all duration-300 hover:scale-105 ${link.hoverColor}`}
            >
              <div className="p-0">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start text-left hover:bg-transparent"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center space-x-4 w-full">
                      <div className="bg-zinc-800 p-2 rounded-lg group-hover:bg-lime-400/10 transition-colors">
                        <link.icon className="w-5 h-5 text-lime-400" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-zinc-300">{link.name}</div>
                        <div className="text-sm text-zinc-500">{link.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-500" />
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="w-5 h-5 text-lime-400" />
            <h2 className="text-lg font-semibold text-zinc-300">Projetos em Destaque</h2>
          </div>

          <div className="space-y-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-md border-zinc-800 hover:border-lime-400/30 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full h-auto p-3 justify-start text-left hover:bg-transparent"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div className="font-medium text-zinc-300 text-sm">{project.name}</div>
                          <div className="text-xs text-zinc-500">{project.tech}</div>
                        </div>
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </div>
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-zinc-500 text-xs">© 2025 Luiz Antonio - Desenvolvedor Full Stack</p>
        </div>
      </div>
    </div>
  )
}
import { Github, Linkedin, Mail, Globe, Twitter } from "lucide-react"

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/luizdev7727",
    icon: Github,
    description: "Meus projetos e contribuições",
    hoverColor: "hover:bg-emerald-700/20",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/luizantonio2003/",
    icon: Linkedin,
    description: "Rede profissional",
    hoverColor: "hover:bg-cyan-500/20",
  },
  {
    name: "Portfolio",
    url: "https://meuportfolio.dev",
    icon: Globe,
    description: "Meus trabalhos e experiências",
    hoverColor: "hover:bg-amber-500/20",
  },
  {
    name: "Twitter",
    url: "https://x.com/luizz_dev",
    icon: Twitter,
    description: "Pensamentos sobre tech",
    hoverColor: "hover:bg-cyan-500/20",
  },
  {
    name: "Email",
    url: "mailto:luiz.antonioq2003@gmail.com",
    icon: Mail,
    description: "Entre em contato",
    hoverColor: "hover:bg-emerald-700/20",
  },
]
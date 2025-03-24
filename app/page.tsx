import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { StarsWrapper } from "@/components/stars-wrapper"
import { Experience } from "@/components/experience"
import { Tech } from "@/components/tech"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-lvh py-24">
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Contact />
    </main>
  )
}
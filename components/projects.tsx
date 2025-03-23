"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { projects } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, ExternalLink } from "lucide-react"
import { useEffect } from "react"

const formatDescription = (text: string) => {
    return text.split('\n').map((line, i) => (
        <div key={i} className={`${line.trim() === '' ? 'mb-4' : 'mb-2'}`}>
            {line}
        </div>
    ));
};

function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    useEffect(() => {
        preloadImage(project.detailImage);
    }, [project.detailImage]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 50,
                        damping: 15
                    }}
                    whileHover={{
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                    className="group cursor-pointer"
                >
                    <div className="overflow-hidden rounded-lg border bg-card/50 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:bg-accent/80">
                        <div className="aspect-video overflow-hidden relative">
                            <div
                                className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                            >
                                <p className="text-white text-sm font-medium tracking-wide transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    Click to learn more →
                                </p>
                            </div>
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-1 transition-colors group-hover:text-accent-foreground">
                                {project.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                                {project.description}
                            </p>
                            <div className="flex items-center">
                                {(project.iconLists || []).map((icon, index) => (
                                    <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black/5 w-9 h-9 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                    >
                                        <img
                                            src={icon}
                                            alt={`tech-${index}`}
                                            className={`p-1.5 ${icon.includes('fastapi') || icon.includes('nextjs') || icon.includes('pinecone') || icon.includes('sqlalchemy') ? 'dark:invert' : ''}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </DialogTrigger>
            <DialogContent className="flex flex-col p-0 h-[70vh] sm:h-[80vh] [&>button]:cursor-pointer">
                <div className="px-6 py-4 border-b">
                    <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                    </DialogHeader>
                </div>

                <ScrollArea className="flex-1 px-3 h-1/2">
                    <div className="rounded-lg mb-4">
                        <img
                            src={project.detailImage}
                            alt={project.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="space-y-2 text-muted-foreground text-sm">
                        {typeof project.longDescription === 'string'
                            ? project.longDescription.split('\n').map((line, i) => (
                                <p key={i} className={`${line.trim() === '' ? 'mb-4' : 'mb-2'}`}>
                                    {line}
                                </p>
                            ))
                            : project.longDescription}
                    </div>
                </ScrollArea>

                <div className="px-6 py-4 border-t">
                    <DialogFooter className="justify-end gap-2 !flex-row">
                        {project.links.github && (
                            <Button asChild variant="default">
                                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </Button>
                        )}
                        {project.links.demo && (
                            <Button asChild variant="link">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export function Projects() {
    const { ref } = useSectionInView("Projects", 0.5)

    useEffect(() => {
        // Preload all detail images when the component mounts
        projects.forEach(project => {
            preloadImage(project.detailImage);
        });
    }, []);

    return (
        <section
            ref={ref}
            id="projects"
            className="container py-12 mx-auto max-w-[60rem] scroll-mt-28 space-y-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                <p className="text-muted-foreground">
                    Some of my recent work
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}

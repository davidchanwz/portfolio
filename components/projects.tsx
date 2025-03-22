"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Github, ExternalLink } from "lucide-react"

const formatDescription = (text: string) => {
    return text.split('\n').map((line, i) => (
        <div key={i} className={`${line.trim() === '' ? 'mb-4' : 'mb-2'}`}>
            {line}
        </div>
    ));
};

const projects = [
    {
        title: "CoconutSplit",
        description: "Telegram bot for tracking and splitting shared expenses between friends.",
        longDescription: "A Splitwise alternative on Telegram. Built with FastAPI and PyTelegramBotAPI, CoconutSplit helps users track and split shared expenses with friends. CoconutSplit is integrated with Supabase for data storage, and Hugging Face for receipt image parsing.",
        thumbnail: "/projects/coconutsplit.jpg",
        detailImage: "/projects/coconutsplit-detail.png",
        links: {
            github: "https://github.com/davidchanwz/coconutsplit",
            demo: "https://coconutsplitbot.com",
            // Add more links as needed
        },
        iconLists: [
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/supabase.png",
            "/tech/huggingface.svg",
            "/tech/docker.png"
        ]
    },
    {
        title: "ACE",
        description: "Podium-placing Rest API for detecting fraudulent blockhain transactions using machine learning.",
        longDescription: "ACE (AI Compliance Engine) is a cutting-edge REST API that empowers financial institutions to navigate fraud detection and regulatory compliance in blockchain transactions. \n \n Built with FastAPI and SQLAlchemy, it leverages machine learning to analyze blockchain data and detect fraudulent activities in real-time. \n\nThe system integrates directly with the Ethereum blockchain to fetch and process transaction data, assigning anomaly scores based on the latest blockchain information.  \n\nThe project achieved Finalist (Top 5 out of 88 Teams) at NUS Fintech Hackathon 2025 for its innovative approach to blockchain security and its potential impact on financial compliance.",
        thumbnail: "/projects/ace.png",
        detailImage: "/projects/ace-detail.png",
        links: {
            github: "https://github.com/davidchanwz/ai-compliance-engine",
            // Add more links as needed
        },
        iconLists: [
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/sklearn.png",
            "/tech/sqlalchemy.png",
            "/tech/pandas.png",
            "/tech/supabase.png"
        ]
    },
    {
        title: "Gyatword",
        description: "Award-winning daily crossword web game based on Gen Alpha brainrot language.",
        longDescription: "Gyatword is an engaging crossword puzzle game that challenges your knowledge of brainrot vocabulary. Developed collaboratively by a team of four passionate developers in a short span of 24 hours (NUS Hacknroll), Gyatword aims to provide users with an exciting and challenging word game experience. \n\n The project was built with a React and Tailwind frontend and our own backend server, supported by a Supabase database. We utilised existing react components and open-sourced crossword-making algorithms to handle the logic and core feature of our game, using these in addition to our own creativity, ingenuity and technical skills to craft together a minimalistic user interface with a fun fully-functional game. \n\nAn interesting feature of our project is it is an amalgamation of various programming languages, such as React, Python, Pygyat, Typescript, Scala, Tailwind etc \n\n For this unique blend of programming languages, the project was awarded Best Polyglot Hack at NUS Hacknroll 2025.",
        thumbnail: "/projects/gyatword.jpeg",
        detailImage: "/projects/gyatword-detail.png",
        links: {
            github: "https://github.com/GyatGames/gyatword",
            demo: "https://gyatword.com",
            // Add more links as needed
        },
        iconLists: [
            "/tech/react.png",
            "/tech/typescript.png",
            "/tech/tailwind.png",
            "/tech/supabase.png",
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/docker.png"
        ]
    },
    {
        title: "SmartPantry",
        description: "Mobile app for generating tailored meal plans using AI and Retrieval Augmented Generation.",
        longDescription: "Smart Pantry Buddy is an AI-powered mobile app that helps users create personalized, health-conscious meal plans based on their pantry inventory and dietary preferences. Using a combination of LlamaIndex, Retrieval-Augmented Generation (RAG), and vector search, the app retrieves relevant recipes by matching available ingredients to a vector database of recipe embeddings. \n\nIt integrates OCR technology to scan grocery receipts and automatically update pantry data, while also pulling in nutritional information from external APIs. Through a React Native interface and FastAPI backend, Smart Pantry Buddy delivers tailored meal suggestions by combining structured (SQL), unstructured (API), and vector-based data sources, offering users a seamless, intelligent meal-planning experience.",
        thumbnail: "/projects/smartpantry.png",
        detailImage: "/projects/smartpantry.png",
        links: {
            github: "https://github.com/lionsee77/smartpantry",
            // Add more links as needed
        },
        iconLists: [
            "/tech/react.png",
            "/tech/javascript.png",
            "/tech/fastapi.svg",
            "/tech/python.png",
            "/tech/supabase.png",
            "/tech/llamaindex.png",
            "/tech/pinecone.png",
            "/tech/docker.png",
            "/tech/heroku.png"
        ]
    },
    // Add more projects here
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
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
            </AlertDialogTrigger>
            <AlertDialogContent className="sm:max-w-[700px] h-[80vh] flex flex-col p-0">
                <div className="px-6 py-4 border-b">
                    <AlertDialogTitle>{project.title}</AlertDialogTitle>
                </div>

                <ScrollArea className="flex-1 px-3 h-3/5">
                    <div className="rounded-lg mb-4 aspect-auto">
                        <img
                            src={project.detailImage}
                            alt={project.title}
                            className="object-cover w-full h-full px-20"
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
                    <AlertDialogFooter className="sm:justify-end gap-2 !flex-row">
                        <AlertDialogCancel className="mt-0 cursor-pointer">Close</AlertDialogCancel>
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
                    </AlertDialogFooter>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export function Projects() {
    const { ref } = useSectionInView("Projects", 0.5)

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

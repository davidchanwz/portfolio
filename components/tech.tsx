"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { cn } from "@/lib/utils"

const technologies = {
    languages: [
        {
            name: "TypeScript",
            description: "Statically typed JavaScript that scales",
            icon: "/tech/typescript.png"
        },
        {
            name: "Python",
            description: "General-purpose programming language",
            icon: "/tech/python.png"
        },
        {
            name: "JavaScript",
            description: "High-level programming language",
            icon: "/tech/javascript.png"
        },
        {
            name: "Java",
            description: "Object-oriented programming language",
            icon: "/tech/java.svg"
        },
        {
            name: "SQL",
            description: "Structured Query Language",
            icon: "/tech/sql.png"
        },
        {
            name: "HTML/CSS",
            description: "Markup and styling languages",
            icon: "/tech/htmlcss.png"
        },

        // Add more languages
    ],
    frameworks: [
        {
            name: "Next.js",
            description: "React framework for production",
            icon: "/tech/nextjs.png"
        },
        {
            name: "React",
            description: "JavaScript library for user interfaces",
            icon: "/tech/react.png"
        },
        {
            name: "Node.js",
            description: "JavaScript runtime built on Chrome's V8 engine",
            icon: "/tech/nodejs.png"
        },
        {
            name: "TailwindCSS",
            description: "Utility-first CSS framework",
            icon: "/tech/tailwind.png"
        },
        {
            name: "Flask",
            description: "Lightweight WSGI web application framework",
            icon: "/tech/flask.png"
        },
        {
            name: "FastAPI",
            description: "Modern, fast (high-performance) web framework",
            icon: "/tech/fastapi.svg",
        }
        // Add more frameworks
    ],
    tools: [
        {
            name: "Git",
            description: "Version control system",
            icon: "/tech/git.png"
        },
        {
            name: "Docker",
            description: "Container platform",
            icon: "/tech/docker.png"
        },
        {
            name: "Supabase",
            description: "Open-source Firebase alternative",
            icon: "/tech/supabase.png"
        },
        {
            name: "Firebase",
            description: "App development platform",
            icon: "/tech/firebase.png"
        },
        {
            name: "Vercel",
            description: "Develop. Preview. Ship.",
            icon: "/tech/vercel.svg"
        },
        {
            name: "Heroku",
            description: "Cloud platform as a service",
            icon: "/tech/heroku.png"
        }
        // Add more tools
    ],
    libraries: [
        {
            name: "Pydantic",
            description: "Data validation and settings management",
            icon: "/tech/pydantic.png"

        },
        {
            name: "Pandas",
            description: "Data manipulation and analysis",
            icon: "/tech/pandas.png"
        },
        {
            name: "Scikit-learn",
            description: "Machine learning library",
            icon: "/tech/sklearn.png"
        },
        {
            name: "Hugging Face Transformers",
            description: "State-of-the-art Natural Language Processing",
            icon: "/tech/huggingface.svg"
        },
        {
            name: "SQLAlchemy",
            description: "SQL toolkit and Object-Relational Mapping",
            icon: "/tech/sqlalchemy.png"
        },
        {
            name: "SciPy",
            description: "Scientific computing library",
            icon: "/tech/scipy.svg"
        }
        // Add more libraries
    ]
}

const TechGrid = ({ title, items }: { title: string, items: typeof technologies.languages }) => (
    <div className="space-y-4">
        <motion.h3
            className="text-lg font-semibold tracking-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 50,
                damping: 15
            }}
        >
            {title}
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {items.map((item, index) => (
                <motion.div
                    key={item.name}
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
                >
                    <div className="flex h-20 overflow-hidden rounded-lg border bg-card/80 shadow-sm">
                        <div className="w-20 bg-muted/50 flex items-center justify-center p-4 border-r">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className={cn(
                                    "h-10 w-10 object-contain",
                                    // Add invert filter for next.js and flask logos in dark mode
                                    (item.name === "Next.js" || item.name === "Flask" || item.name === "FastAPI" || item.name === "SQLAlchemy") && "dark:invert",
                                    // Add invert filter for vercel logo in light mode
                                    item.name === "Vercel" && "invert dark:invert-0"
                                )}
                            />
                        </div>
                        <div className="flex-1 p-3 flex flex-col justify-center">
                            <h4 className="font-medium text-sm mb-0.5">
                                {item.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

export function Tech() {
    const { ref } = useSectionInView("Tech", 0.5)

    return (
        <section
            ref={ref}
            id="tech"
            className="container py-12 mx-auto max-w-[60rem] scroll-mt-28 space-y-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                <p className="text-muted-foreground">
                    Technologies I work with
                </p>
            </motion.div>

            <div className="space-y-12">
                <TechGrid title="Languages" items={technologies.languages} />
                <TechGrid title="Frameworks" items={technologies.frameworks} />
                <TechGrid title="Tools" items={technologies.tools} />
                <TechGrid title="Libraries" items={technologies.libraries} />
            </div>
        </section>
    )
}

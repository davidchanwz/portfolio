"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { technologies } from "@/lib/constants"
import { MacBookCanvas } from './macbook-canvas'

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
    const { ref } = useSectionInView("Tech", 0.3)

    return (
        <section
            ref={ref}
            id="tech"
            className="container py-12 mx-auto max-w-[60rem] scroll-mt-28 space-y-8 "
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
                <div className="space-y-4">
                    <motion.h3
                        className="text-lg font-semibold tracking-tight text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 40,
                            damping: 20
                        }}
                    >
                        Hardware
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            type: "spring",
                            stiffness: 40,
                            damping: 20
                        }}
                    >
                        <MacBookCanvas />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

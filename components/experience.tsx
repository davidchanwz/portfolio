"use client"

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"
import { experiences } from "@/lib/constants"
import { useSectionInView } from "@/lib/hooks"

function ExperienceCard({ experience, index }: { experience: (typeof experiences)[0], index: number }) {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "var(--card)",
                opacity: 0.8,
                boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem",
            }}
            contentArrowStyle={{
                borderRight: "7px solid",
            }}
            date={experience.date}
            iconStyle={{
                background: "white",
                fontSize: "1.5rem",
                boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.05)",
            }}
            icon={
                <div className="flex h-full w-full items-center justify-center">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="h-[90%] w-[90%] object-contain rounded-full"
                    />
                </div>
            }
            position={index % 2 === 0 ? "left" : "right"}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 50,
                    damping: 15
                }}
            >
                <h3 className="text-xl font-semibold mb-1 text-foreground">{experience.title}</h3>
                <p className="text-base font-medium text-foreground/80">
                    {experience.company_name}
                </p>
                <div className="mt-6 space-y-3">
                    {experience.points.map((point, index) => (
                        <div key={`experience-point-${index}`} className="flex items-start gap-2">
                            <span className="text-muted-foreground text-sm leading-[1.6]">•</span>
                            <span className="text-muted-foreground text-sm leading-[1.6]">{point}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </VerticalTimelineElement>
    )
}

export function Experience() {
    const { ref } = useSectionInView("Experience", 0.3)

    return (
        <section
            ref={ref}
            id="experience"
            className="container py-12 mx-auto max-w-[60rem] scroll-mt-28 space-y-8"
        >
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
            >
                <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                <p className="text-muted-foreground">
                    Here&apos;s what I&apos;ve done so far
                </p>
            </motion.div>

            <div className="mt-12 min-h-[500px]">
                <VerticalTimeline lineColor="#e5e7eb">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

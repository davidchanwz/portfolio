"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, FileTextIcon, ArrowDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useSectionInView } from "@/lib/hooks"

export function About() {
    const roles = ["software engineer", "data analyst", "web developer"]
    const [roleIndex, setRoleIndex] = useState(0)
    const { ref } = useSectionInView("About", 0.3)

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((current) => (current + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.section
            ref={ref}
            id="about"
            className="container pt-8 pb-36 sm:pt-16 sm:pb-54 mx-auto scroll-mt-28 relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.175 }}
        >
            <div className="max-w-4xl mx-auto">
                <Card className="mx-auto max-w-2xl bg-card/50">
                    <CardContent className="pt-6 flex flex-col items-center text-center space-y-6">
                        <Avatar className="w-32 h-32 ring-2 ring-primary/20 border-2 border-primary/10 shadow-lg shadow-primary/10">
                            <AvatarImage src="/david.png" alt="David Chan" />
                            <AvatarFallback>Loading...</AvatarFallback>
                        </Avatar>

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold flex flex-col">
                                <span>Hi there, I'm David. I'm a</span>
                                <span className="w-full ">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={roleIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="inline-block min-w-[160px] bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent font-bold"
                                        >
                                            {roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </h2>
                            <p className="text-muted-foreground">
                                Currently pursuing a Business Analytics, Bachelor of Science at NUS Computing. Incoming Software Engineer Intern at Synapxe.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap justify-center gap-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Button
                                asChild
                                size="lg"
                                className="cursor-pointer bg-[#0077b5] text-white hover:bg-[#0077b5]/90 hover:text-white border-[#0077b5] transition-colors"
                            >
                                <a
                                    href="https://www.linkedin.com/in/davidchanwz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedinIcon className="mr-2" />
                                    LinkedIn
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="default"
                                className="cursor-pointer"
                            >
                                <a
                                    href="https://github.com/davidchanwz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <GithubIcon className="mr-2" />
                                    GitHub
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="cursor-pointer"
                                size="lg"
                            >
                                <a
                                    href="/davidchan_resume.pdf"
                                    download="David_Chan_Resume.pdf"
                                    className="flex items-center"
                                >
                                    <FileTextIcon className="mr-2" />
                                    Resume
                                </a>
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{
                    duration: 1,
                    delay: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-sm text-muted-foreground/80 font-light tracking-wide"
                >
                    Scroll down to learn more
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        document.getElementById("experience")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}
                    className="p-2 rounded-full bg-card/80 hover:bg-accent/80 transition-colors duration-200"
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground animate-pulse" />
                </motion.button>
            </motion.div>
        </motion.section>
    )
}

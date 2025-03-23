"use client"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { GithubIcon, LinkedinIcon, FileTextIcon, ArrowDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useSectionInView } from "@/lib/hooks"
import { scrollToSection } from "@/lib/utils"
import { TypeAnimation } from 'react-type-animation';

export function About() {
    const roles = ["software engineer", "data analyst", "web developer"]
    const { ref } = useSectionInView("About", 0.5)

    return (
        <motion.section
            ref={ref}
            id="about"
            className="container pt-16 pb-46 sm:pt-32 sm:pb-62 2xl:pt-42 2xl:pb-84 mx-auto scroll-mt-28 relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.175 }}
        >
            <div className="max-w-4xl mx-auto">
                <Card className="mx-auto max-w-2xl bg-card/50">
                    <CardHeader className="mt-8 flex justify-center items-center pb-2">
                        <img
                            src="/david.png"
                            alt="About"
                            className="absolute grayscale-[0%] mb-[110px] ring-2 ring-primary/20 rounded-full w-32 h-32 border-primary/10 border-2 shadow-lg shadow-primary/10 aspect-square object-cover"
                        />
                        <CardTitle className="text-center"></CardTitle>
                        <CardDescription className="font-normal text-primary"></CardDescription>
                    </CardHeader>

                    <CardContent className="text-center pb-2">

                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold flex flex-col">
                                <span>Hi there, I'm David. I'm a</span>
                                <span className="h-[32px] flex items-center justify-center">
                                    <TypeAnimation
                                        sequence={[
                                            'software engineer', 2000,
                                            'data analyst', 2000,
                                            'web developer', 2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 bg-clip-text text-transparent font-bold"
                                    />
                                </span>
                            </h2>
                            <p className="text-muted-foreground">
                                Currently pursuing a Business Analytics, Bachelor of Science at NUS Computing. Incoming Software Engineer Intern at Synapxe.
                            </p>
                        </motion.div>
                    </CardContent>

                    <CardFooter>
                        <div className="flex gap-2 mx-auto">
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
                                        <LinkedinIcon className="mr-0 sm:mr-2" />
                                        <span className="hidden sm:inline">LinkedIn</span>
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
                                        <GithubIcon className="mr-0 sm:mr-2" />
                                        <span className="hidden sm:inline">GitHub</span>
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
                        </div>
                    </CardFooter>
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
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
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
                        scrollToSection("experience");
                    }}
                    className="p-2 rounded-full bg-card/80 hover:bg-accent/80 transition-colors duration-200"
                >
                    <ArrowDown className="w-6 h-6 text-muted-foreground animate-pulse" />
                </motion.button>
            </motion.div>
        </motion.section >
    )
}

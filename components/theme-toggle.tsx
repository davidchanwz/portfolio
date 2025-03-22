"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="cursor-pointer"
        >
            <motion.div
            
                initial={{ opacity: 0, rotate: -90 }}
                animate={{
                    opacity: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -90,
                    scale: theme === "light" ? 1 : 0
                }}
                
                transition={{ duration: 0.2 }}
                
                whileHover={{ 
                    scale: 1.1,
                    rotate: 15 
                }}
                whileTap={{ 
                    scale: 0.9 
                }}
                className="absolute"
            >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, rotate: 90 }}
                animate={{
                    opacity: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 90,
                    scale: theme === "dark" ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                whileHover={{ 
                    scale: 1.1,
                    rotate: 15 
                }}
                whileTap={{ 
                    scale: 0.9 
                }}
                className="absolute"
            >
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

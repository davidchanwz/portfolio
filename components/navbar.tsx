"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useActiveSectionContext } from "@/context/active-section-context"
import { SectionName } from "@/lib/types"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

interface RouteProps {
    href: string
    label: SectionName
}

const routes: RouteProps[] = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#tech", label: "Tech" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
] as const

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    const navbarVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.header
            className={cn(
                "fixed top-5 z-50 mx-auto w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl left-1/2 -translate-x-1/2",
                "flex items-center justify-between rounded-2xl border bg-card/30 p-2 backdrop-blur-xs",
                "shadow-[inset_0_0_5px_rgba(0,0,0,0.085)] dark:shadow-[inset_0_0_5px_rgba(255,255,255,0.141)]"
            )}
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            {/* Logo */}
            <motion.a href="/" className="flex items-center font-bold text-lg pl-2 mr-[-120px]" variants={itemVariants}>
                davidchanwz.com
            </motion.a>

            {/* Mobile Menu */}
            <div className="flex items-center lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Menu className="cursor-pointer" />
                    </SheetTrigger>
                    <SheetContent side="left" className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card">
                        <div className="ml-4">
                            <SheetHeader className="mb-2">
                                <SheetTitle className="flex items-center">
                                    <a href="/" className="flex items-center text-2xl">
                                        Menu
                                    </a>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-2">
                                {routes.map(({ href, label }) => (
                                    <Button
                                        key={label}
                                        variant="ghost"
                                        className={cn(
                                            "justify-start text-base relative",
                                            activeSection === label && "text-primary"
                                        )}
                                        asChild
                                    >
                                        <a
                                            href={href}
                                            onClick={() => {
                                                setIsOpen(false)
                                                setActiveSection(label)
                                                setTimeOfLastClick(Date.now())
                                            }}
                                        >
                                            {label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <SheetFooter className="flex-col sm:flex-col items-start justify-start">
                            <Separator className="mb-2" />
                            <ThemeToggle />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Menu */}
            <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                    <NavigationMenuItem className="flex gap-2">
                        {routes.map(({ href, label }) => (
                            <NavigationMenuLink
                                key={label}
                                asChild
                                className={cn(
                                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                                    "relative",
                                    activeSection === label && "text-primary"
                                )}
                            >
                                <motion.a
                                    href={href}
                                    onClick={() => {
                                        setActiveSection(label)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                    variants={itemVariants}
                                >
                                    {label}
                                    {activeSection === label && (
                                        <motion.span
                                            className="absolute inset-0 rounded-md bg-primary/10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.a>
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Theme Toggle */}
            <motion.div className="hidden lg:flex items-center gap-2" variants={itemVariants}>
                <ThemeToggle />
            </motion.div>
        </motion.header>
    )
}

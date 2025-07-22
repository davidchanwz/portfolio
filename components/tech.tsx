"use client"

import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { technologies } from "@/lib/constants"
import Image from "next/image"
import { MacBookCanvas } from "./macbook-canvas"

interface TechItemProps {
  name: string
  icon: string
  description?: string
  delay?: number
}

function TechItem({ name, icon, description, delay = 0 }: TechItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="w-14 h-14 flex items-center justify-center">
          {(() => {
            // List of icons to invert
            const invertIcons = [
              "/tech/nextjs.png",
              "/tech/flask.png",
              "/tech/fastapi.svg"
            ];
            const shouldInvert = invertIcons.includes(icon);
            const filterClass = shouldInvert ? "filter invert" : "";
            return (
              <Image
                src={icon}
                alt={name}
                width={56}
                height={56}
                className={`object-contain ${filterClass}`}
              />
            );
          })()}
        </div>
      </motion.div>
      <span className="text-sm font-medium text-foreground text-center">
        {name}
      </span>
    </motion.div>
  )
}

interface TechCategoryProps {
  title: string
  items: { name: string; icon: string; description?: string }[]
  delay?: number
}

function TechCategory({ title, items, delay = 0 }: TechCategoryProps) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h3 className="text-xl font-semibold text-foreground text-center mb-6">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {items.map((item, idx) => (
          <TechItem
            key={item.name}
            name={item.name}
            icon={item.icon}
            description={item.description}
            delay={delay + idx * 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

export function Tech() {
  const { ref } = useSectionInView("Tech", 0.3)

  return (
    <section
      ref={ref}
      id="tech"
      className="container py-20 mx-auto scroll-mt-28 space-y-16"
    >
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-lg text-muted-foreground">
          Technologies I work with
        </p>
        <motion.div
          className="mx-auto w-24 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </motion.div>

      {/* Tech Categories */}
      <TechCategory
        title="Languages"
        items={technologies.languages}
        delay={0.2}
      />
      <TechCategory
        title="Frameworks"
        items={technologies.frameworks}
        delay={0.4}
      />
      <TechCategory title="Tools" items={technologies.tools} delay={0.6} />
      <TechCategory
        title="Libraries"
        items={technologies.libraries}
        delay={0.8}
      />

      {/* Hardware Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-xl font-semibold text-foreground text-center">
          Hardware
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <MacBookCanvas />
        </motion.div>
      </motion.div>
    </section>
  )
}

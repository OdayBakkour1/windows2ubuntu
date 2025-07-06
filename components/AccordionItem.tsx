"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function AccordionItem({ idx, phase }: { idx: number; phase: { title: string; summary: string; details: string[] } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-[#202436] border border-[#23283a] shadow-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-purple-400 group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-purple-400 w-8 text-center">{idx + 1}.</span>
          <div>
            <div className="text-lg md:text-xl font-bold text-white mb-1">{phase.title}</div>
            <div className="text-gray-400 text-base md:text-lg max-w-2xl">{phase.summary}</div>
          </div>
        </div>
        <ChevronDown
          className={`w-7 h-7 text-purple-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-8 pb-6"
          >
            <ul className="list-disc pl-6 text-gray-300 text-base space-y-2 mt-2">
              {phase.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 
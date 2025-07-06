'use client'

import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Palette, 
  Code, 
  Music, 
  Shield, 
  BookOpen,
  Globe,
  Users,
  Monitor,
  Smartphone
} from 'lucide-react'

const toolCategories = [
  {
    name: "Productivity & Office",
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
    tools: [
      { name: "LibreOffice", description: "Complete office suite alternative to Microsoft Office" },
      { name: "Flameshot", description: "Advanced screenshot tool with annotation features" },
      { name: "Joplin", description: "Secure note-taking with synchronization" },
      { name: "CopyQ", description: "Advanced clipboard manager" },
      { name: "GImageReader", description: "OCR tool for text extraction" }
    ]
  },
  {
    name: "Programming & Development",
    icon: Code,
    color: "from-green-500 to-emerald-500",
    tools: [
      { name: "VS Code", description: "Powerful code editor with extensive extensions" },
      { name: "Git", description: "Version control system for tracking changes" },
      { name: "Docker", description: "Container platform for applications" },
      { name: "Postman", description: "API development and testing platform" },
      { name: "Tilix", description: "Advanced terminal emulator" }
    ]
  },
  {
    name: "Graphic Design & Illustration",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    tools: [
      { name: "GIMP", description: "Professional image editing like Photoshop" },
      { name: "Inkscape", description: "Vector graphics editor like Illustrator" },
      { name: "Krita", description: "Digital painting and concept art" },
      { name: "Blender", description: "Professional 3D creation suite" },
      { name: "darktable", description: "Photography workflow and raw developer" }
    ]
  },
  {
    name: "Video & Audio Production",
    icon: Music,
    color: "from-orange-500 to-red-500",
    tools: [
      { name: "Kdenlive", description: "Professional video editing software" },
      { name: "OBS Studio", description: "Live streaming and recording" },
      { name: "Audacity", description: "Audio recording and editing" },
      { name: "VLC", description: "Universal media player for all formats" },
      { name: "HandBrake", description: "Video format conversion tool" }
    ]
  },
  {
    name: "Security & Privacy",
    icon: Shield,
    color: "from-indigo-500 to-blue-500",
    tools: [
      { name: "VeraCrypt", description: "Disk encryption software" },
      { name: "Tor Browser", description: "Anonymous browsing" },
      { name: "ClamAV", description: "Antivirus engine" },
      { name: "GnuPG", description: "Encryption and digital signatures" },
      { name: "Brave Browser", description: "Privacy-focused web browser" }
    ]
  },
  {
    name: "Education & Learning",
    icon: BookOpen,
    color: "from-teal-500 to-green-500",
    tools: [
      { name: "Zotero", description: "Reference management for research" },
      { name: "Calibre", description: "E-book management and conversion" },
      { name: "Anki", description: "Spaced repetition flashcard system" },
      { name: "Stellarium", description: "Virtual planetarium" },
      { name: "GeoGebra", description: "Interactive mathematics software" }
    ]
  }
]

export default function ToolsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">100+ Essential Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful open-source alternatives for every task. From productivity to development, 
            we've curated the best tools to make your Ubuntu experience exceptional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-1">{tool.name}</h4>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    View all {category.name} tools →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Complete Tool Collection</h3>
            <p className="text-gray-600 mb-6">
              Our comprehensive guide includes detailed instructions for installing and configuring 
              all these tools, plus many more across 10 different categories.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Explore Complete Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
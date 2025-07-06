'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  BookOpen, 
  Download,
  CheckCircle,
  Star,
  Terminal,
  Monitor,
  Smartphone,
  Globe,
  Play,
  ExternalLink,
  Lock,
  Edit3
} from 'lucide-react'
import ToolsSection from '@/components/ToolsSection'
import RoadmapSection from '@/components/RoadmapSection'
import Image from 'next/image'
import { AccordionItem } from '@/components/AccordionItem'

const features = [
  {
    title: "Comprehensive Backup Guide",
    description: "Step-by-step instructions to safely backup all your important data before the transition.",
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Hardware Compatibility",
    description: "Detailed guidance on checking and configuring hardware compatibility with Ubuntu.",
    icon: Monitor,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Essential Applications",
    description: "Curated list of 100+ essential tools across 10 categories for every need.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Productivity Optimization",
    description: "Advanced tips for mastering Ubuntu shortcuts, workspaces, and workflow efficiency.",
    icon: Zap,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Security & Privacy",
    description: "Best practices for maintaining security and privacy in your new Ubuntu environment.",
    icon: Shield,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Community Support",
    description: "Access to Ubuntu forums, documentation, and community resources for ongoing help.",
    icon: Users,
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Lock,
    title: "Rock-Solid Security",
    description:
      "Benefit from Linux's robust architecture, making you far less vulnerable to viruses and malware.",
    color: "bg-purple-700/20 text-purple-400",
  },
  {
    icon: Zap,
    title: "Blazing Performance",
    description:
      "Experience a fast, responsive desktop that breathes new life into old and new hardware.",
    color: "bg-blue-700/20 text-blue-400",
  },
  {
    icon: Edit3,
    title: "Total Customization",
    description:
      "Take full control of your digital environment, from the look and feel to core functionality.",
    color: "bg-green-700/20 text-green-400",
  },
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Developer",
    content: "This guide made my transition from Windows to Ubuntu incredibly smooth. The step-by-step instructions and comprehensive tool recommendations saved me hours of research.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Digital Artist",
    content: "I was worried about losing my creative workflow, but the guide helped me find perfect Linux alternatives for all my tools. GIMP and Krita are amazing!",
    avatar: "MR"
  },
  {
    name: "Alex Thompson",
    role: "Student",
    content: "As a student, I needed something reliable and free. This guide helped me set up Ubuntu perfectly for my studies and development work.",
    avatar: "AT"
  }
]

const stats = [
  { number: "5", label: "Structured Phases" },
  { number: "100+", label: "Essential Tools" },
  { number: "10", label: "Tool Categories" },
  { number: "24/7", label: "Community Support" }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#181c27] flex flex-col items-center justify-center pt-12 pb-24">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center gap-8 mt-8">
        <div className="flex flex-col items-center gap-8">
          {/* Windows to Ubuntu transition */}
          <div className="flex items-center gap-8 mb-2">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-2xl font-medium mb-2">Windows</span>
              <Image src="/windows-logo.svg" alt="Windows Logo" width={70} height={70} className="drop-shadow-lg" />
            </div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-4xl text-gray-400"
            >
              &rarr;
            </motion.div>
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-2xl font-medium mb-2">Ubuntu</span>
              <Image src="/ubuntu-logo.svg" alt="Ubuntu Logo" width={70} height={70} className="drop-shadow-lg" />
            </div>
          </div>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
            Your Ultimate Roadmap to <span className="text-purple-400">Ubuntu</span>
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-4">
            Seamlessly transition from Windows to a world of freedom, performance, and security. This comprehensive guide makes the switch smooth and rewarding.
          </p>
          {/* CTA Button */}
          <motion.a
            href="#roadmap"
            whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(124, 58, 237, 0.18)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-purple-600 text-white font-semibold text-lg shadow-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Why Make the Switch?</h2>
        <p className="text-lg text-gray-400 text-center mb-12">Discover the core advantages of the Ubuntu ecosystem.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8, scale: 1.03, boxShadow: "0 12px 48px 0 rgba(124, 58, 237, 0.22)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl bg-[#202436] p-8 flex flex-col items-center shadow-lg transition-all duration-300 border border-[#23283a] hover:border-purple-600"
            >
              <motion.div
                whileHover={{ rotate: 8 }}
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl ${feature.color} transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-300 text-center text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose This Guide?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive, step-by-step instructions designed to make your transition smooth and successful
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="w-full max-w-4xl mx-auto mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">The Transition Roadmap</h2>
        <p className="text-lg text-gray-400 text-center mb-12">Your complete, step-by-step guide to migrating from Windows to Ubuntu. Click each phase to expand the details.</p>
        <div className="flex flex-col gap-6">
          {[{
            title: 'Pre-Installation – Preparation is Key',
            summary: 'This phase is the most critical. Do NOT skip any steps! Proper preparation will prevent data loss and make the installation process significantly smoother.',
            details: [
              'Backup All Your Important Data! (Non-Negotiable!)',
              'Note Down Essential Information',
              'Create a Windows Recovery Drive (Optional)',
              'Disable Fast Startup in Windows',
              'Disable Secure Boot and Enable AHCI Mode (in BIOS/UEFI)',
              'Download the Ubuntu Desktop ISO File',
              'Create a Bootable Ubuntu USB Drive',
            ],
          }, {
            title: 'Installation – The Big Switch',
            summary: 'Boot from the Ubuntu USB drive, try Ubuntu live, and perform the installation with proper configuration.',
            details: [
              'Boot from the Ubuntu USB Drive',
              'Try Ubuntu First (Highly Recommended!)',
              'Start the Installation Process',
              'Follow the Installer Steps Carefully',
            ],
          }, {
            title: 'Post-Installation – Initial Setup & Customization',
            summary: 'Update your system, install drivers, configure accounts, and set up essential applications.',
            details: [
              'First Boot & Login',
              'Connect to the Internet',
              'Update Your System (Crucial!)',
              'Install GNOME Tweaks',
              'Configure Online Accounts',
              'Install Your Favorite Applications',
              'Install Proprietary Drivers (If Needed)',
              'Set Up Backups (Essential for Data Safety!)',
            ],
          }, {
            title: 'Productivity & Workflow Optimization',
            summary: 'Master shortcuts, customize your desktop, learn terminal basics, and optimize your workflow.',
            details: [
              'Master Key Keyboard Shortcuts',
              'Embrace Workspaces for Organization',
              'Customize Your Desktop (Optional, but Fun!)',
              'Get Comfortable with the Terminal',
              'Explore the Ubuntu Software Center',
              'Dedicated Productivity Tools',
            ],
          }, {
            title: 'Ongoing Maintenance & Continuous Learning',
            summary: 'Regular updates, community engagement, and continuous system optimization.',
            details: [
              'Regular Updates',
              'Leverage the Community and Documentation',
              'Experiment (Carefully!)',
            ],
          }].map((phase, idx) => (
            <AccordionItem key={phase.title} idx={idx} phase={phase} />
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="w-full max-w-6xl mx-auto mt-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Essential Tools for Every Need</h2>
        <p className="text-lg text-gray-400 text-center mb-10">Discover powerful, free software to replace your Windows apps and boost your productivity.</p>
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center items-center">
          <input
            type="text"
            placeholder="Search for a tool (e.g., 'GIMP', 'VS Code')..."
            className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-[#23283a] text-white placeholder-gray-400 border border-[#2d3144] focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select className="w-full md:w-60 px-4 py-3 rounded-lg bg-[#23283a] text-white border border-[#2d3144] focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option>All Categories</option>
            <option>Productivity and Office</option>
            <option>Design</option>
            <option>Media</option>
            <option>Development</option>
            <option>Communication</option>
            <option>3D Design</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "LibreOffice Suite", category: "Productivity and Office", description: "A complete, free, and open-source office suite, alternative to Microsoft Office." },
            { name: "Flameshot", category: "Productivity and Office", description: "Superior screenshot tool with on-the-fly annotation, blurring, and highlighting." },
            { name: "Joplin", category: "Productivity and Office", description: "Secure, open-source note-taking and to-do app with synchronization." },
            { name: "CopyQ", category: "Productivity and Office", description: "Advanced clipboard manager that saves your clipboard history." },
            { name: "GIMP", category: "Design", description: "Professional, open-source image editor, alternative to Photoshop." },
            { name: "Inkscape", category: "Design", description: "Vector graphics editor for illustrations, logos, and diagrams." },
            { name: "Krita", category: "Design", description: "Digital painting and illustration tool for artists." },
            { name: "Blender", category: "3D Design", description: "World-class 3D creation suite for modeling, animation, and rendering." },
          ].map((tool, i) => (
            <div
              key={tool.name}
              className="rounded-2xl bg-[#202436] border border-[#23283a] shadow-lg p-6 hover:border-purple-600 transition-all duration-300 flex flex-col gap-2 card-hover"
            >
              <motion.h3 whileHover={{ color: "#a78bfa" }} className="text-lg font-bold text-white mb-1 transition-colors duration-200">{tool.name}</motion.h3>
              <span className="text-xs font-medium text-purple-400 mb-2">{tool.category}</span>
              <p className="text-gray-300 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Users Say</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of users who have successfully transitioned to Ubuntu with our comprehensive guide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-100 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-blue-50">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Make the Switch?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your journey to Ubuntu today with our comprehensive guide. 
              Get access to step-by-step instructions, tool recommendations, and community support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View Full Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Windows to Ubuntu Guide</h3>
            <p className="text-gray-400 mb-6">Your comprehensive roadmap for a successful transition</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400">
              <span>Made with ❤️ by Oday Bakkour</span>
              <span className="hidden sm:inline">•</span>
              <span>Open Source</span>
              <span className="hidden sm:inline">•</span>
              <span>Community Driven</span>
            </div>
            <div className="mt-6 flex justify-center gap-4">
              <a href="https://github.com/OdayBakkour1/windows2ubuntu" className="text-gray-400 hover:text-white transition-colors">
                GitHub
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Documentation
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 
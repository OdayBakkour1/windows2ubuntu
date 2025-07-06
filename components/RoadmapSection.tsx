'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Shield, 
  Download, 
  Zap, 
  Terminal, 
  Users,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react'

const roadmapData = [
  {
    phase: 1,
    title: "Pre-Installation",
    subtitle: "Preparation is Key",
    icon: Shield,
    color: "from-blue-500 to-cyan-500",
    duration: "30-60 minutes",
    critical: true,
    steps: [
      {
        title: "Backup All Important Data",
        description: "Create comprehensive backups of documents, photos, videos, and application data. Use external drives, cloud storage, or network storage.",
        critical: true,
        tips: [
          "Use external hard drives for large backups",
          "Enable cloud sync for important files",
          "Export browser bookmarks and passwords",
          "Back up email data if using desktop clients"
        ]
      },
      {
        title: "Note Essential Information",
        description: "Document Wi-Fi credentials, hardware specifications, and account details needed for post-installation setup.",
        critical: true,
        tips: [
          "Wi-Fi network name and password",
          "Monitor resolution and refresh rate",
          "Printer and scanner model numbers",
          "Important account credentials"
        ]
      },
      {
        title: "Configure BIOS/UEFI Settings",
        description: "Disable Fast Startup, Secure Boot, and enable AHCI mode for optimal compatibility and performance.",
        critical: true,
        tips: [
          "Disable Fast Startup in Windows Power Options",
          "Disable Secure Boot in BIOS/UEFI",
          "Enable AHCI mode for SATA drives",
          "Note down BIOS access key for your system"
        ]
      },
      {
        title: "Create Bootable USB Drive",
        description: "Download Ubuntu ISO and create a bootable USB drive using tools like Balena Etcher.",
        critical: true,
        tips: [
          "Download latest Ubuntu LTS version",
          "Use at least 8GB USB drive (16GB recommended)",
          "Verify ISO checksum for integrity",
          "Test USB drive on another computer if possible"
        ]
      }
    ]
  },
  {
    phase: 2,
    title: "Installation",
    subtitle: "The Big Switch",
    icon: Download,
    color: "from-green-500 to-emerald-500",
    duration: "45-90 minutes",
    critical: true,
    steps: [
      {
        title: "Boot from USB Drive",
        description: "Access boot menu and select USB drive to launch Ubuntu live environment.",
        critical: true,
        tips: [
          "Common boot keys: F12, F10, Esc, F8",
          "Select UEFI USB option if available",
          "Choose 'Try Ubuntu' first to test hardware"
        ]
      },
      {
        title: "Test Hardware Compatibility",
        description: "Verify that Wi-Fi, graphics, sound, and other hardware work correctly in the live environment.",
        critical: true,
        tips: [
          "Test internet connection",
          "Check audio playback",
          "Verify display resolution",
          "Test webcam and microphone"
        ]
      },
      {
        title: "Begin Installation",
        description: "Start the installation process and configure language, keyboard, and installation type.",
        critical: true,
        tips: [
          "Choose 'Erase disk and install Ubuntu' for full switch",
          "Enable third-party software for drivers and codecs",
          "Download updates during installation if possible",
          "Set strong password and enable encryption if desired"
        ]
      },
      {
        title: "Complete Installation",
        description: "Wait for installation to complete and restart the system.",
        critical: true,
        tips: [
          "Remove USB drive when prompted",
          "First boot may take longer than usual",
          "Log in with your created credentials"
        ]
      }
    ]
  },
  {
    phase: 3,
    title: "Post-Installation",
    subtitle: "Initial Setup & Customization",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    duration: "60-120 minutes",
    critical: false,
    steps: [
      {
        title: "Update System",
        description: "Install all available updates and security patches to ensure system stability.",
        critical: true,
        tips: [
          "Run 'sudo apt update && sudo apt upgrade'",
          "Install any pending security updates",
          "Restart if kernel updates are installed"
        ]
      },
      {
        title: "Install Proprietary Drivers",
        description: "Install drivers for graphics cards, Wi-Fi adapters, and other hardware that may need proprietary drivers.",
        critical: false,
        tips: [
          "Use Software & Updates > Additional Drivers",
          "Install recommended drivers for your hardware",
          "Restart after driver installation"
        ]
      },
      {
        title: "Configure Online Accounts",
        description: "Set up Google Drive, email, and other cloud services for seamless integration.",
        critical: false,
        tips: [
          "Add Google account in Settings > Online Accounts",
          "Configure email clients if needed",
          "Set up cloud storage synchronization"
        ]
      },
      {
        title: "Install Essential Applications",
        description: "Install your preferred applications for productivity, development, and entertainment.",
        critical: false,
        tips: [
          "Use Ubuntu Software Center for GUI apps",
          "Use terminal for command-line tools",
          "Consider Flatpak for latest versions",
          "Install AppImageLauncher for portable apps"
        ]
      }
    ]
  },
  {
    phase: 4,
    title: "Productivity",
    subtitle: "Workflow Optimization",
    icon: Terminal,
    color: "from-orange-500 to-red-500",
    duration: "Ongoing",
    critical: false,
    steps: [
      {
        title: "Master Keyboard Shortcuts",
        description: "Learn Ubuntu and GNOME shortcuts to navigate efficiently and boost productivity.",
        critical: false,
        tips: [
          "Super key opens Activities Overview",
          "Super + A shows all applications",
          "Super + Tab switches between apps",
          "Ctrl + Alt + T opens terminal"
        ]
      },
      {
        title: "Customize Desktop Environment",
        description: "Install GNOME Tweaks and extensions to personalize your desktop experience.",
        critical: false,
        tips: [
          "Install GNOME Tweaks for customization",
          "Browse extensions.gnome.org for add-ons",
          "Try different themes and icon sets",
          "Configure workspace behavior"
        ]
      },
      {
        title: "Learn Terminal Basics",
        description: "Familiarize yourself with essential terminal commands for system administration.",
        critical: false,
        tips: [
          "Learn basic file navigation commands",
          "Understand package management with apt",
          "Practice with safe commands first",
          "Use tab completion for efficiency"
        ]
      },
      {
        title: "Set Up Development Environment",
        description: "Install development tools, IDEs, and programming language support.",
        critical: false,
        tips: [
          "Install VS Code or your preferred IDE",
          "Set up Git for version control",
          "Install programming language tools",
          "Configure development workflows"
        ]
      }
    ]
  },
  {
    phase: 5,
    title: "Maintenance",
    subtitle: "Ongoing Learning",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    duration: "Ongoing",
    critical: false,
    steps: [
      {
        title: "Regular System Updates",
        description: "Keep your system updated with the latest security patches and software updates.",
        critical: true,
        tips: [
          "Run updates weekly",
          "Use Software Updater or terminal",
          "Restart when prompted for kernel updates",
          "Check for driver updates periodically"
        ]
      },
      {
        title: "Backup Strategy",
        description: "Set up automated backups for your personal data and system configuration.",
        critical: true,
        tips: [
          "Use Déjà Dup for file backups",
          "Install Timeshift for system snapshots",
          "Configure cloud backup services",
          "Test backup restoration periodically"
        ]
      },
      {
        title: "Community Engagement",
        description: "Join Ubuntu forums and communities for support and learning opportunities.",
        critical: false,
        tips: [
          "Visit ubuntuforums.org for help",
          "Use Ask Ubuntu for specific questions",
          "Join Linux communities on social media",
          "Contribute to open source projects"
        ]
      },
      {
        title: "Continuous Learning",
        description: "Explore advanced features, new applications, and Linux ecosystem developments.",
        critical: false,
        tips: [
          "Try new applications regularly",
          "Learn about different desktop environments",
          "Explore command-line tools",
          "Stay updated with Linux news"
        ]
      }
    ]
  }
]

export default function RoadmapSection() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Your 5-Phase Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured approach to ensure a successful transition from Windows to Ubuntu. 
            Each phase builds upon the previous one, creating a solid foundation for your Linux experience.
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold">{phase.subtitle}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-500">Duration: {phase.duration}</span>
                        {phase.critical && (
                          <span className="flex items-center gap-1 text-sm text-red-600">
                            <AlertCircle className="w-4 h-4" />
                            Critical
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === phase.phase ? null : phase.phase)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ChevronDown 
                      className={`w-6 h-6 transition-transform ${expandedPhase === phase.phase ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>

                {expandedPhase === phase.phase && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 pt-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {phase.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="bg-white rounded-lg p-6 border border-gray-200">
                          <div className="flex items-start gap-3 mb-3">
                            <CheckCircle className={`w-5 h-5 mt-1 ${step.critical ? 'text-red-500' : 'text-green-500'}`} />
                            <div>
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              {step.critical && (
                                <span className="inline-block text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full mt-1">
                                  Critical Step
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                              <Info className="w-4 h-4" />
                              Tips:
                            </h5>
                            <ul className="space-y-1">
                              {step.tips.map((tip, tipIndex) => (
                                <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
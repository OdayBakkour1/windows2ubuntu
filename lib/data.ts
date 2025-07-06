export const roadmapData = {
  title: "Your Ultimate Roadmap: Seamlessly Transitioning from Windows to Ubuntu",
  description: "Welcome to the exciting world of Ubuntu! Making the switch from Windows can feel daunting, but with the right guidance, it's a rewarding journey that opens up a world of freedom, performance, and security.",
  
  phases: [
    {
      id: 1,
      title: "Pre-Installation",
      subtitle: "Preparation is Key",
      description: "This phase is the most critical. Do NOT skip any steps! Proper preparation will prevent data loss and make the installation process significantly smoother.",
      critical: true,
      steps: [
        {
          title: "Backup All Your Important Data",
          description: "Installing a new operating system will erase everything on your current Windows drive. Losing your precious photos, documents, and personal files is the worst possible outcome.",
          critical: true,
          details: [
            "Personal Files: Documents, Photos, Videos, Music, Downloads",
            "Browser Data: Bookmarks, saved passwords, browsing history",
            "Email Data: Desktop email client data files",
            "Application-Specific Data: Specialized software data",
            "Drivers: Optional but recommended for specific hardware"
          ],
          methods: [
            "External Hard Drive/Large USB Drive",
            "Cloud Storage: Google Drive, OneDrive, Dropbox",
            "Network Attached Storage (NAS)",
            "Verification: Test backup accessibility"
          ]
        },
        {
          title: "Note Down Essential Information",
          description: "You'll need these details after installing Ubuntu, especially before you have internet access or all your software set up.",
          critical: true,
          details: [
            "Wi-Fi Network Name (SSID) and Password",
            "Monitor Resolution and refresh rate",
            "Printer/Scanner Model Numbers",
            "Any Specialized Hardware/Peripherals",
            "Important Account Credentials"
          ]
        },
        {
          title: "Create a Windows Recovery Drive",
          description: "In the rare event that you need to revert to Windows, or if you encounter unexpected boot issues, a recovery drive can save you a lot of hassle.",
          critical: false,
          details: [
            "Plug in a USB drive (at least 16GB)",
            "Use Windows 'Create a recovery drive' tool",
            "Store in a safe location"
          ]
        },
        {
          title: "Disable Fast Startup in Windows",
          description: "Windows' 'Fast Startup' doesn't fully shut down the system. This can prevent Linux from fully accessing the hard drive, leading to file system corruption or boot issues.",
          critical: true,
          details: [
            "Right-click Start button → Power Options",
            "Choose what the power buttons do",
            "Change settings that are currently unavailable",
            "Uncheck 'Turn on fast startup (recommended)'",
            "Save changes"
          ]
        },
        {
          title: "Disable Secure Boot and Enable AHCI Mode",
          description: "Secure Boot can prevent potential boot issues during installation. AHCI mode is crucial for modern SSDs and provides better performance.",
          critical: true,
          details: [
            "Reboot and enter BIOS/UEFI settings",
            "Disable Secure Boot under Boot/Security options",
            "Enable AHCI Mode under Storage/SATA Configuration",
            "Save and Exit BIOS settings"
          ]
        },
        {
          title: "Download the Ubuntu Desktop ISO File",
          description: "This is the installation image for the Ubuntu operating system.",
          critical: true,
          details: [
            "Go to ubuntu.com/download/desktop",
            "Download the latest LTS (Long Term Support) version",
            "Verify the Download with SHA256 checksum",
            "Use PowerShell: Get-FileHash -Algorithm SHA256 [filepath]"
          ]
        },
        {
          title: "Create a Bootable Ubuntu USB Drive",
          description: "You'll boot your PC from this USB drive to start the Ubuntu installer.",
          critical: true,
          details: [
            "Use Balena Etcher (recommended)",
            "Minimum 8GB USB drive (16GB safer)",
            "All data on USB drive will be erased",
            "Verify the flash process completes successfully"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Installation",
      subtitle: "The Big Switch",
      description: "Now that your preparations are complete, it's time to install Ubuntu!",
      critical: true,
      steps: [
        {
          title: "Boot from the Ubuntu USB Drive",
          description: "To launch the Ubuntu installer environment.",
          critical: true,
          details: [
            "Insert bootable Ubuntu USB drive",
            "Restart your computer",
            "Press boot menu key (F12, F10, Esc, F8)",
            "Select USB drive from boot menu",
            "Choose 'Try or Install Ubuntu'"
          ]
        },
        {
          title: "Try Ubuntu First",
          description: "This allows you to run Ubuntu directly from the USB drive without installing it. It's crucial to verify hardware compatibility.",
          critical: true,
          details: [
            "Select 'Try Ubuntu' from boot menu",
            "Test Wi-Fi connectivity",
            "Check audio playback",
            "Verify display resolution",
            "Test webcam/microphone",
            "Check touchpad/mouse functionality"
          ]
        },
        {
          title: "Start the Installation Process",
          description: "Once satisfied with hardware compatibility, begin the installation.",
          critical: true,
          details: [
            "Double-click 'Install Ubuntu' icon",
            "Choose language and keyboard layout",
            "Select 'Normal installation'",
            "Check 'Download updates while installing'",
            "Check 'Install third-party software' (CRUCIAL)"
          ]
        },
        {
          title: "Follow the Installer Steps",
          description: "The Ubuntu installer is user-friendly, but pay close attention to these key steps.",
          critical: true,
          details: [
            "Installation Type: Select 'Erase disk and install Ubuntu'",
            "Location: Select your time zone",
            "User Setup: Enter name, computer name, username, password",
            "Encryption: Optional but recommended for security",
            "Wait for installation to complete",
            "Restart when prompted"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Post-Installation",
      subtitle: "Initial Setup & Customization",
      description: "Congratulations, you've installed Ubuntu! Now, let's get it ready for prime time.",
      critical: false,
      steps: [
        {
          title: "First Boot & Login",
          description: "Your computer will boot directly into Ubuntu.",
          critical: true,
          details: [
            "Enter password at login screen",
            "Go through Welcome screen setup",
            "Explore basic Ubuntu features"
          ]
        },
        {
          title: "Connect to the Internet",
          description: "Get online to download updates and install software.",
          critical: true,
          details: [
            "Click Wi-Fi/Network icon in top-right",
            "Select your Wi-Fi network",
            "Enter Wi-Fi password",
            "Test connection with Firefox browser"
          ]
        },
        {
          title: "Update Your System",
          description: "Even if you downloaded updates during installation, new security patches and software updates are released constantly.",
          critical: true,
          details: [
            "Open Terminal (Ctrl + Alt + T)",
            "Run: sudo apt update",
            "Run: sudo apt upgrade",
            "Run: sudo apt dist-upgrade",
            "Run: sudo apt autoremove"
          ]
        },
        {
          title: "Install GNOME Tweaks",
          description: "Unlocks many hidden customization options for themes, fonts, window buttons, and more.",
          critical: false,
          details: [
            "Open Terminal: sudo apt install gnome-tweaks",
            "Search for 'Tweaks' in applications menu",
            "Explore customization options"
          ]
        },
        {
          title: "Configure Online Accounts",
          description: "Integrate your cloud services directly into the Ubuntu desktop environment.",
          critical: false,
          details: [
            "Go to Settings → Online Accounts",
            "Add Google account",
            "Grant necessary permissions",
            "Access Google Drive in Files app"
          ]
        },
        {
          title: "Install Your Favorite Applications",
          description: "This is where you start making Ubuntu truly your own.",
          critical: false,
          details: [
            "Ubuntu Software Center (GUI - Easiest)",
            "apt (Terminal - System tools)",
            "Flatpak (Newer versions, sandboxing)",
            "AppImageLauncher (Portable apps)",
            "Official Tarballs/Binaries (Direct)"
          ]
        },
        {
          title: "Install Proprietary Drivers",
          description: "Some hardware might perform better with proprietary drivers.",
          critical: false,
          details: [
            "Open Software & Updates",
            "Go to Additional Drivers tab",
            "Select recommended drivers",
            "Apply Changes and restart"
          ]
        },
        {
          title: "Set Up Backups",
          description: "Regular backups are your safety net for both personal data and system configuration.",
          critical: true,
          details: [
            "Deja Dup (Built-in Backups app)",
            "Timeshift (System snapshots)",
            "Configure automatic scheduling",
            "Test backup restoration"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Productivity",
      subtitle: "Workflow Optimization",
      description: "Now that your system is set up, let's explore ways to make your daily workflow even more efficient in Ubuntu.",
      critical: false,
      steps: [
        {
          title: "Master Key Keyboard Shortcuts",
          description: "Getting these into muscle memory will dramatically speed up your work.",
          critical: false,
          details: [
            "Super key: Opens Activities Overview",
            "Super + A: Shows all applications",
            "Super + Tab: Switch between apps",
            "Super + D: Minimize all windows",
            "Super + L: Lock screen",
            "Ctrl + Alt + T: Open Terminal"
          ]
        },
        {
          title: "Embrace Workspaces for Organization",
          description: "Workspaces help you organize your open applications and reduce clutter.",
          critical: false,
          details: [
            "Press Super to see workspaces",
            "Drag windows between workspaces",
            "Super + Page Up/Down: Switch workspaces",
            "Shift + Super + Page Up/Down: Move window",
            "Create new workspaces by dragging to empty space"
          ]
        },
        {
          title: "Customize Your Desktop",
          description: "Make Ubuntu truly yours with themes, extensions, and personalization.",
          critical: false,
          details: [
            "Use GNOME Tweaks for customization",
            "Install GNOME Extensions",
            "Browse extensions.gnome.org",
            "Try different themes and icons",
            "Customize top bar settings"
          ]
        },
        {
          title: "Get Comfortable with the Terminal",
          description: "The terminal is incredibly powerful for system administration and advanced tasks.",
          critical: false,
          details: [
            "Learn basic commands: ls, cd, pwd, mkdir",
            "Use Tab completion for efficiency",
            "Navigate command history with arrows",
            "Learn package management with apt",
            "Practice with safe commands first"
          ]
        },
        {
          title: "Explore the Ubuntu Software Center",
          description: "Don't just install the apps you know. Discover fantastic open-source alternatives.",
          critical: false,
          details: [
            "Browse categories in Software Center",
            "Discover new tools and applications",
            "Read reviews and descriptions",
            "Try different installation methods"
          ]
        },
        {
          title: "Dedicated Productivity Tools",
          description: "Consider these tools to enhance specific aspects of your workflow.",
          critical: false,
          details: [
            "Flameshot: Advanced screenshot tool",
            "Voice assistants: Mycroft AI",
            "Time tracking: Hamster Time Tracker",
            "Note-taking: Joplin, Obsidian",
            "Task management: Planner, Todoist"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Maintenance",
      subtitle: "Ongoing Learning",
      description: "Your journey with Ubuntu is just beginning! Here's how to keep your system healthy and continue expanding your Linux knowledge.",
      critical: false,
      steps: [
        {
          title: "Regular Updates",
          description: "Make it a habit to run updates at least once a week.",
          critical: true,
          details: [
            "Run: sudo apt update && sudo apt upgrade",
            "Use Software Updater GUI tool",
            "Restart when prompted for kernel updates",
            "Check for driver updates periodically"
          ]
        },
        {
          title: "Leverage the Community and Documentation",
          description: "The Linux and Ubuntu communities are vast, friendly, and incredibly helpful.",
          critical: false,
          details: [
            "Ubuntu Forums: ubuntuforums.org",
            "Ask Ubuntu: askubuntu.com",
            "Official Ubuntu Documentation",
            "General web search for specific issues",
            "Join Linux communities on social media"
          ]
        },
        {
          title: "Experiment Carefully",
          description: "Linux encourages experimentation. Don't be afraid to try new software or tweak settings.",
          critical: false,
          details: [
            "Always remember your backups",
            "Use Timeshift snapshots before major changes",
            "Experiment with different desktop environments",
            "Try new software and tools",
            "Learn from mistakes and community help"
          ]
        }
      ]
    }
  ]
}

export const essentialTools = {
  categories: [
    {
      name: "Productivity and Office",
      description: "Boost your daily efficiency with these tools for office tasks, note-taking, and workflow automation.",
      tools: [
        { name: "LibreOffice Suite", description: "Complete office suite with Writer, Calc, Impress, and Base" },
        { name: "Flameshot", description: "Superior screenshot tool with annotation and upload features" },
        { name: "Joplin", description: "Secure note-taking with synchronization across devices" },
        { name: "CopyQ", description: "Advanced clipboard manager with search and organization" },
        { name: "GImageReader", description: "Powerful OCR tool for text extraction from images" },
        { name: "Speech Note", description: "Voice-to-text application for hands-free note-taking" },
        { name: "Okular", description: "Versatile document viewer supporting multiple formats" },
        { name: "Freemind", description: "Premier mind-mapping tool for brainstorming" },
        { name: "Bitwarden", description: "Secure password manager with browser integration" },
        { name: "Planner", description: "Task management with clean interface and online sync" }
      ]
    },
    {
      name: "Programming and Development",
      description: "Ubuntu is a developer's paradise. Here are the tools to build, test, and deploy your next project.",
      tools: [
        { name: "Visual Studio Code", description: "World's most popular code editor with extensive extensions" },
        { name: "Git", description: "Essential distributed version control system" },
        { name: "Docker", description: "Platform for developing and running containerized applications" },
        { name: "Postman", description: "Comprehensive API platform for building and testing APIs" },
        { name: "Tilix", description: "Powerful tiling terminal emulator for multitasking" },
        { name: "DBeaver", description: "Universal database tool supporting multiple databases" },
        { name: "Meld", description: "Visual diff and merge tool for comparing files" },
        { name: "JetBrains Suite", description: "Powerful IDEs for Java, Python, and JavaScript" },
        { name: "FileZilla", description: "Fast and reliable FTP client for file transfers" },
        { name: "Zeal", description: "Offline documentation browser for developers" }
      ]
    },
    {
      name: "Business and Finance",
      description: "Manage your business operations, track finances, and streamline administrative tasks.",
      tools: [
        { name: "GnuCash", description: "Powerful financial-accounting software for small businesses" },
        { name: "ProjectLibre", description: "Comprehensive project management tool" },
        { name: "Odoo", description: "All-in-one business management software suite" },
        { name: "Scribus", description: "Professional desktop publishing application" },
        { name: "KMyMoney", description: "Versatile personal finance manager" },
        { name: "InvoicePlane", description: "Self-hosted invoice and client management" },
        { name: "SuiteCRM", description: "Open-source Customer Relationship Management" },
        { name: "Hamster Time Tracker", description: "Simple time tracking for tasks and projects" },
        { name: "KeePassXC", description: "Community-driven password manager for business" },
        { name: "Mattermost", description: "Secure team collaboration platform" }
      ]
    },
    {
      name: "Graphic Design and Illustration",
      description: "Unleash your creativity with professional-grade tools for digital art, photo editing, and design.",
      tools: [
        { name: "GIMP", description: "Powerful raster graphics editor alternative to Photoshop" },
        { name: "Inkscape", description: "Professional vector graphics editor like Illustrator" },
        { name: "Krita", description: "Feature-rich digital painting application for artists" },
        { name: "Blender", description: "World-class 3D creation suite for modeling and animation" },
        { name: "darktable", description: "Open-source photography workflow and raw developer" },
        { name: "digiKam", description: "Advanced digital photo management application" },
        { name: "Pinta", description: "Simple drawing and image editing program" },
        { name: "Font Manager", description: "Dedicated application for font organization" },
        { name: "Gpick", description: "Advanced color picker utility with palette creation" },
        { name: "Diagrams.net", description: "Powerful diagramming tool for flowcharts and diagrams" }
      ]
    },
    {
      name: "Video and Audio Production",
      description: "From video editing to music creation, these tools provide everything you need for multimedia projects.",
      tools: [
        { name: "Kdenlive", description: "Versatile non-linear video editor with multi-track support" },
        { name: "OBS Studio", description: "Industry standard for video recording and live streaming" },
        { name: "Audacity", description: "Popular multi-track audio editor and recorder" },
        { name: "VLC Media Player", description: "Ultimate media player handling all formats" },
        { name: "HandBrake", description: "Tool for converting video to modern codecs" },
        { name: "Ardour", description: "Professional Digital Audio Workstation for musicians" },
        { name: "Mixxx", description: "Free DJ software for live digital mixing" },
        { name: "LMMS", description: "Cross-platform music production suite" },
        { name: "Jellyfin", description: "Free software media system for personal servers" },
        { name: "Subtitle Editor", description: "GTK-based tool for creating and editing subtitles" }
      ]
    }
  ]
} 
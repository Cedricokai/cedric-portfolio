import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    title: "Inventory Management System",
    description: "Developed a full-stack inventory system to automate tracking of electrical/IT assets for Newmont Gold Ghana.",
    technologies: ["React.js", "Spring Boot", "MySQL", "QR Code API"],
    features: [
      "Barcode/QR scanning for real-time asset updates",
      "Automated low-stock notifications (email/SMS)",
      "Role-based dashboard (admin, staff, auditors)"
    ],
    impact: "Reduced manual entry errors by 40%, accelerated audit processes",
    githubUrl: "https://github.com/Cedrickeys/inventory-system",
    demoUrl: "#"
  },
  {
    title: "Attendance Management System",
    description: "Building a biometric + web-based attendance system for 100+ staff at EAC Electrical Solutions-Newmont.",
    technologies: ["React.js", "Spring Boot", "Fingerprint SDK", "Geolocation API"],
    features: [
      "Biometric (fingerprint) and GPS-based check-ins",
      "Automated payroll integration (in development)",
      "Real-time reporting for managers"
    ],
    impact: "Goal: Eliminate buddy-punching and reduce payroll discrepancies",
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Eazy School Educational Platform",
    description: "Full-stack educational platform with user authentication and course enrollment.",
    technologies: ["Spring Boot", "React.js", "MySQL"],
    features: [
      "User authentication system",
      "Course enrollment functionality",
      "Admin dashboard"
    ],
    githubUrl: "#",
    demoUrl: "#"
  }
]

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
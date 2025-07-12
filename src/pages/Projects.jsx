import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

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
    demoUrl: "#",
    image: "/projects/inventory-system.jpg",
    tags: ["Full Stack", "Featured"]
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
    demoUrl: "#",
    image: "/projects/attendance-system.jpg",
    tags: ["Full Stack", "In Progress"]
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
    demoUrl: "#",
    image: "/projects/eazy-school.jpg",
    tags: ["Full Stack"]
  }
];

const allTags = ["All", "Full Stack", "Featured", "In Progress"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects = activeTag === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 text-sm font-medium ${activeTag === tag 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                } ${tag === 'All' ? 'rounded-l-lg' : ''} ${tag === allTags[allTags.length - 1] ? 'rounded-r-lg' : ''}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
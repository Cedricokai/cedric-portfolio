import { FaNetworkWired, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      position: "Computer Engineering National Service",
      company: "EAC Electrical Solutions (Newmont Gold Ghana)",
      duration: "2024--Present",
      icon: <FaNetworkWired className="text-blue-500 text-xl" />,
      responsibilities: [
        "Develop and maintain software solutions for industrial systems",
        "Assist in networking, PLC programming, and IT infrastructure support",
        "Collaborate with engineers to troubleshoot automation systems"
      ],
      technologies: ["Java", "Spring Boot", "React", "PLCs", "Networking"]
    },
    {
      position: "Project Management Intern",
      company: "MTN Ghana",
      duration: "Nov--Dec 2022, Oct--Dec 2023",
      icon: <FaProjectDiagram className="text-blue-500 text-xl" />,
      responsibilities: [
        "Managed project budgets and risk analysis for telecom initiatives",
        "Ensured 100% on-time delivery for 3+ projects",
        "Coordinated between technical and business teams"
      ],
      technologies: ["Project Management", "Risk Analysis", "Budgeting"]
    },
    {
      position: "Webmaster Intern",
      company: "Project Management Institute",
      duration: "Feb--Mar 2023",
      icon: <FaLaptopCode className="text-blue-500 text-xl" />,
      responsibilities: [
        "Updated website content via Joomla CMS",
        "Improved website SEO performance by 15%",
        "Assisted in content migration"
      ],
      technologies: ["Joomla", "HTML/CSS", "SEO"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Work <span className="text-blue-600">Experience</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 h-4 w-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 transform -translate-x-1/2 -translate-y-4"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}`}>
                    <div className="flex items-center md:justify-end">
                      <div className="md:hidden mr-4">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {exp.position}
                        </h3>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400 mt-2">
                      {exp.company}
                    </h4>
                    
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 mt-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-gray-100 dark:bg-gray-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty div for spacing in timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
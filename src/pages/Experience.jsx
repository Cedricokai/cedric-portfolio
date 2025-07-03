export default function Experience() {
  const experiences = [
    {
      position: "Computer Engineering National Service",
      company: "EAC Electrical Solutions (Newmont Gold Ghana)",
      duration: "2024--Present",
      responsibilities: [
        "Develop and maintain software solutions for industrial systems",
        "Assist in networking, PLC programming, and IT infrastructure support",
        "Collaborate with engineers to troubleshoot automation systems"
      ]
    },
    {
      position: "Project Management Intern",
      company: "MTN Ghana",
      duration: "Nov--Dec 2022, Oct--Dec 2023",
      responsibilities: [
        "Managed project budgets and risk analysis for telecom initiatives",
        "Ensured 100% on-time delivery for 3+ projects"
      ]
    },
    {
      position: "Webmaster Intern",
      company: "Project Management Institute",
      duration: "Feb--Mar 2023",
      responsibilities: [
        "Updated website content via Joomla CMS"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Work <span className="text-blue-600">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <span className="text-gray-600 dark:text-gray-300">
                  {exp.duration}
                </span>
              </div>
              <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {exp.company}
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
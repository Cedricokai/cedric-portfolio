export default function About() {
  const skills = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Spring Boot", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 80 },
    { name: "PLCs", level: 65 }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "University of Energy and Natural Resources, Sunyani",
      year: "2021--2024"
    },
    {
      degree: "Project Management",
      institution: "Project Management Institute",
      year: "2022--Present"
    }
  ]

  const certifications = [
    "Project Management (PMI Ghana, 2022--Present)",
    "Web Development (HTML/CSS, DigiLearn, 2019)",
    "Digital Marketing & Graphics Design (GAOTek, 2024)"
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Professional Summary</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer (React.js + Spring Boot) and Computer Engineering student with hands-on 
              experience in software development, networking, and PLCs. Currently completing national service 
              at EAC Electrical Solutions (Newmont Gold Ghana), supporting IT infrastructure and industrial 
              automation. Passionate about building scalable web applications and solving technical challenges.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                  <h4 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-blue-600 dark:text-blue-400">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Skills</h3>
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Languages</h3>
              <div className="flex space-x-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full">
                  English (Fluent)
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-4 py-2 rounded-full">
                  GA
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-4 py-2 rounded-full">
                  Twi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
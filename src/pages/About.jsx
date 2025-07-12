import { useState } from 'react';
import profilePhoto from '../assets/profilePhoto.jpg';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Spring Boot", level: 70 },
    { name: "HTML/CSS", level: 90 },
    { name: "MySQL", level: 70 },
    { name: "Git", level: 80 },
    { name: "PLCs", level: 65 }
  ];

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
  ];

  const certifications = [
    "Project Management (PMI Ghana, 2022--Present)",
    "Web Development (HTML/CSS, DigiLearn, 2019)",
    "Digital Marketing & Graphics Design (GAOTek, 2024)"
  ];

  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "5", label: "Happy Clients" },
    { value: "2", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-6">
              <img 
                src={profilePhoto} 
                alt="Cedric Okai"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center shadow">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition font-medium">
              Download CV
            </button>
          </div>
          
          <div className="lg:w-2/3">
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-4 py-2 font-medium ${activeTab === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-2 font-medium ${activeTab === 'education' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-2 font-medium ${activeTab === 'certifications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 dark:text-gray-400'}`}
              >
                Certifications
              </button>
            </div>
            
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h3>
                  <div className="space-y-4">
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
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-3">
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
            )}
            
            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                    <h4 className="font-bold text-xl text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.year}</p>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'certifications' && (
              <div className="space-y-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                  {certifications.map((cert, index) => (
                    <li key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-0 right-0 flex space-x-2 p-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className={`text-xs px-2 py-1 rounded-full ${
                tag === 'Featured' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                tag === 'In Progress' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400 text-sm">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {project.impact && (
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Impact:</h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">{project.impact}</p>
          </div>
        )}
        
        <div className="flex space-x-3 mt-4">
          {project.githubUrl !== "#" && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {project.demoUrl !== "#" && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import profilePhoto from '../assets/profilePhoto.jpg';

const Home = () => {
  const stats = [
    { value: "10+", label: "Projects Completed" },
    { value: "5", label: "Happy Clients" },
    { value: "2", label: "Years Experience" }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">Cedric Okai</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer (React.js + Spring Boot)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Computer Engineering student with hands-on experience in software development, networking, and PLCs. 
              Passionate about building scalable web applications and solving technical challenges.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                View My Work
                <FiArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center"
              >
                Contact Me
                <FiMessageSquare className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl group">
              <img 
                src={profilePhoto} 
                alt="Cedric Okai"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating tech stack */}
            <div className="hidden md:block absolute -left-10 top-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md animate-float">
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="hidden md:block absolute -right-10 top-1/3 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md animate-float animation-delay-2000">
              <span className="text-sm font-medium">Spring Boot</span>
            </div>
            <div className="hidden md:block absolute -left-5 bottom-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md animate-float animation-delay-3000">
              <span className="text-sm font-medium">Java</span>
            </div>
          </div>
        </div>
        
        {/* Client testimonials */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 text-6xl text-gray-200 dark:text-gray-700">"
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic text-lg relative z-10">
              "Cedric delivered our inventory system ahead of schedule with excellent attention to detail. 
              His technical skills and problem-solving abilities are exceptional."
            </p>
            <div className="flex items-center mt-6">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4 overflow-hidden">
                <img 
                  src="/clients/newmont.jpg" 
                  alt="Client" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-gray-800 dark:text-white">John Smith</p>
                <p className="text-gray-500 dark:text-gray-400">IT Director, Newmont Gold Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
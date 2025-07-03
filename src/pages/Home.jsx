import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600">Cedric Okai</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Full-Stack Developer (React.js + Spring Boot)
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Computer Engineering student with hands-on experience in software development, networking, and PLCs. 
              Passionate about building scalable web applications and solving technical challenges.
            </p>
            <div className="flex space-x-4">
              <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                View My Work
              </Link>
              <Link to="/contact" className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                Contact Me
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              {/* Replace with your actual photo */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
import { motion } from 'framer-motion'
import Profile from '../Profile1-Photoroom.png'
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 mt-16 w-full">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Harshad Vilas Magadum</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              I create beautiful and functional web applications with modern technologies.
              Passionate about clean code and great user experiences.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
              <div className="w-full h-full rounded-full bg-white p-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src={Profile} 
                    alt="Profile" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
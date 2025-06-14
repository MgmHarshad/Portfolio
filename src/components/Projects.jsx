import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'Food Donation & Redistribution Platform',
      description: 'A full-stack Social Good Initiative platform with React, Node.js, and MongoDB.',
      image: '🍔',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Still In Progress'],
      link: '#',
    },
    {
      title: 'Recipe Book Application',
      description: 'Recipe Book is your online kitchen companion, providing delicious recipes for all tastes. Discover new flavors and learn the art of cooking with step-by-step guides.',
      image: '🍳',
      tags: ['React'],
      link: 'https://recipe-iota-roan.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Tailwind CSS.',
      image: '🎨',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 w-full">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
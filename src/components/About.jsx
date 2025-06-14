import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 75 },
    { name: 'Node.js', level: 50 },
    { name: 'Git & GitHub', level: 50 },
    { name: 'MongoDB', level: 50 },
  ]

  return (
    <section id="about" className="section-padding bg-white w-full">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate and curious Full Stack Web Developer currently pursuing a B.E. in Computer Science at SDMIT, Ujire. I enjoy building web applications that solve real-world problems and make a positive impact.
              <br />
              I've gained hands-on experience through online internships and real-time projects, including a social good initiative Food Donation & Redistribution Platform—where I'm contributing to both frontend and backend development using the MERN stack.
            </p>
            <p className="text-gray-600 mb-6">
              I love writing clean, maintainable code and continuously improving my skills in technologies like React.js, Node.js, MongoDB, and REST APIs. When I'm not coding, I explore new tech trends, contribute to team projects, and occasionally dive into UI/UX design.

              I'm eager to grow as a developer and excited to take on new challenges in the tech world.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Download CV
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 
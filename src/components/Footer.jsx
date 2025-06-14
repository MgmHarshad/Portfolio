const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Harshad Vilas Magadum. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/harshad-vilas-magadum-491052282/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MgmHarshad"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
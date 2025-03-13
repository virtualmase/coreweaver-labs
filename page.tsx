import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <a href="#home">
            <img
              src="/logo.png"
              alt="Coreweaver Labs Logo"
              className="h-10 w-auto"
            />
          </a>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <motion.section
        id="home"
        className="pt-24 pb-20 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Weaving the Core of <span className="text-blue-400">Next-Gen Technology</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Coreweaver Labs pioneers innovative solutions for a decentralized future.
          </motion.p>
          <motion.button
            className="mt-8 bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Now
          </motion.button>
        </div>
      </motion.section>

      {/* Products Section with Animations */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Innovations
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-semibold text-blue-400">WeaveStake</h3>
                <p className="mt-3 text-gray-300">
                  Stake your assets to support our decentralized AI network.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-semibold text-blue-400">WeaveNet</h3>
                <p className="mt-3 text-gray-300">
                  A decentralized network for secure AI data sharing.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-blue-400">WeaveCompute</h3>
                <p className="mt-3 text-gray-300">
                  Distributed computing power for AI workloads.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-400">
        <p>© 2025 Coreweaver Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href="#home">
            <img
              src="/logo.png"
              alt="Coreweaver Labs Logo"
              className="h-10 w-auto"
            />
          </a>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#products" className="hover:text-blue-400">Products</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Weaving the Core of <span className="text-blue-400">Next-Gen Technology</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Coreweaver Labs pioneers innovative solutions for a decentralized future.
          </p>
          <button className="mt-8 bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition">
            Explore Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Innovations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-blue-400">WeaveStake</h3>
  <p className="mt-2 text-gray-300">
    Stake your assets to support our decentralized AI network.
  </p>
</div>
<div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
  <h3 className="text-xl font-semibold text-blue-400">ModelTrainer</h3>
  <p className="mt-2 text-gray-300">
    Train your AI models with our decentralized platform.
  </p>
</div>
            <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-400">WeaveCompute</h3>
              <p className="mt-2 text-gray-300">
                Distributed computing power for AI workloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Coreweaver Labs. All rights reserved.</p>
      </footer>
    </div>
  );
}
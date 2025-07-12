import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Network, 
  Code, 
  Zap, 
  Globe, 
  Users, 
  BookOpen,
  Github,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Activity,
  Lock,
  Cpu,
  Database,
  Eye,
  Target,
  Layers,
  GitBranch,
  Sparkles,
  TrendingUp,
  CheckCircle,
  ExternalLink,
  Play,
  Download,
  Star
} from 'lucide-react';
import './App.css';

const NeuralNetwork = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const newNodes = [];
    for (let i = 0; i < 30; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)],
        delay: Math.random() * 12
      });
    }
    setNodes(newNodes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {nodes.map(node => (
        <div
          key={node.id}
          className={`neural-node neural-${node.type}`}
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            animationDelay: `${node.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Technology', href: '#technology' },
    { name: 'Developers', href: '#developers' },
    { name: 'Research', href: '#research' },
    { name: 'Enterprise', href: '#enterprise' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center ai-glow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold coreweaver-text">Coreweaver Labs</span>
              <div className="text-xs text-muted-foreground">Decentralized Agentic AI</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="gradient-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity ai-pulse"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass-card border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full gradient-primary text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.div
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full border border-primary/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="status-indicator"></div>
            <span className="text-sm text-muted-foreground">Dark Gemini Alliance</span>
            <span className="text-sm font-semibold text-primary">Live Systems Active</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold coreweaver-text leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Pioneering
            <br />
            <span className="tech-float inline-block">Decentralized Agentic AI</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            We build autonomous systems that learn, adapt, and collaborate within distributed networks, 
            ensuring privacy, security, and accessibility for all. Reshaping industries through 
            advanced algorithms and open innovation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <button className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 ai-glow flex items-center space-x-2">
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="tech-border bg-transparent text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-card/50 transition-all duration-300 flex items-center space-x-2">
              <span>View Documentation</span>
              <BookOpen className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { icon: Brain, label: "AI Agents", value: "2,847+" },
              { icon: Shield, label: "Threats Blocked", value: "99.98%" },
              { icon: Network, label: "Active Validators", value: "156" },
              { icon: Users, label: "Contributors", value: "6,000+" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center space-y-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto ai-pulse" />
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold coreweaver-text mb-6">
            Autonomous Systems for Blockchain Security
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Coreweaver Labs, we are pioneering the future of decentralized agentic AI. 
            Our mission is to build autonomous systems that learn, adapt, and collaborate 
            within distributed networks, ensuring privacy, security, and accessibility for all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: "Agentic AI Innovation",
              description: "Developing autonomous agents that operate independently, make decisions, and collaborate across distributed networks without central control."
            },
            {
              icon: Network,
              title: "Decentralized Infrastructure",
              description: "Building scalable, resilient infrastructure that eliminates single points of failure and ensures continuous operation."
            },
            {
              icon: Shield,
              title: "Security & Privacy",
              description: "Implementing quantum-resistant security protocols and privacy-preserving technologies that protect user data and transactions."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-lg hover:ai-glow transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-primary mb-6 ai-pulse" />
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EcosystemSection = () => {
  const ecosystemBrands = [
    {
      name: "Vault",
      icon: Lock,
      description: "Secure private key management with multisig wallets and KeyGuard encryption",
      features: ["Multi-Signature Wallets", "Hardware Integration", "Automated Key Rotation"],
      status: "Live"
    },
    {
      name: "Forge",
      icon: Code,
      description: "Development hub for wallet libraries and Stratum V2 protocols for decentralized mining",
      features: ["Wallet Libraries", "Mining Protocols", "Open Source Tools"],
      status: "Active"
    },
    {
      name: "Lab",
      icon: Cpu,
      description: "Research P2P encryption, Layer 2 solutions, and DDPM visualizations",
      features: ["P2P Networking", "Layer 2 Research", "Fuzz Testing"],
      status: "Research"
    },
    {
      name: "Academy",
      icon: BookOpen,
      description: "Learn privacy protocols and node setup through tutorials and forums",
      features: ["Educational Content", "Community Forums", "Developer Guides"],
      status: "Growing"
    },
    {
      name: "Maelstrom",
      icon: Eye,
      description: "AI-driven threat detection with SNICKER, PayJoin, and DDPM analytics",
      features: ["Threat Intelligence", "Privacy Analytics", "AI Detection"],
      status: "Beta"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Layers className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Dark Gemini Alliance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Five Specialized Sub-Brands
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Working in harmony to advance blockchain innovation, privacy, and security 
            through collaborative research and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <brand.icon className="w-12 h-12 text-white" />
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {brand.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{brand.name}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{brand.description}</p>
              
              <div className="space-y-2">
                {brand.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnologySection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  
  const technologies = [
    {
      title: "Diffusion Models",
      description: "Conditional DDPMs for synthetic transaction graph generation and privacy testing",
      code: `from diffusers import DDPMPipeline
pipeline = DDPMPipeline.from_pretrained("coreweaver/ddpm-transaction-64x64")
synthetic_graph = pipeline(num_inference_steps=1000).images[0]`,
      metrics: { accuracy: "99.9%", speed: "847ms", nodes: "2,847" }
    },
    {
      title: "Autonomous Agents",
      description: "Self-learning AI systems that adapt to threats and collaborate across networks",
      code: `class AutonomousAgent:
    def __init__(self, network_id):
        self.network = BitcoinNetwork(network_id)
        self.threat_detector = ThreatDetector()
    
    def analyze_threats(self):
        return self.threat_detector.scan(self.network)`,
      metrics: { threats: "156", uptime: "99.98%", response: "1.2ms" }
    },
    {
      title: "Quantum Security",
      description: "Post-quantum cryptographic protocols for future-proof blockchain security",
      code: `def quantum_encrypt(data, public_key):
    lattice_key = generate_lattice_key()
    encrypted = kyber_encrypt(data, lattice_key)
    return sign_dilithium(encrypted, public_key)`,
      metrics: { strength: "256-bit", resistance: "Quantum", compliance: "NIST" }
    }
  ];

  return (
    <section id="technology" className="py-24 neural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Advanced Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold coreweaver-text mb-6">
            Cutting-Edge AI & Blockchain Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our technology stack combines the latest advances in artificial intelligence, 
            quantum cryptography, and distributed systems to create unprecedented security and capability.
          </p>
        </motion.div>

        <div className="space-y-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold coreweaver-text">{tech.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{tech.description}</p>
                
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(tech.metrics).map(([key, value]) => (
                    <div key={key} className="text-center glass-card p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="glass-card p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">Live Demo</span>
                    <Play className="w-4 h-4 text-primary" />
                  </div>
                  <div className="code-block">
                    <pre className="text-sm">
                      <code>{tech.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DevelopersSection = () => {
  return (
    <section id="developers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Developer Resources</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold coreweaver-text mb-6">
            Build the Future with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 6,000+ developers building open-source tools, protocols, and AI systems 
            that protect and evolve the Bitcoin ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Github className="w-6 h-6 mr-3" />
                Open Source First
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All our tools and protocols are open source, fostering collaboration and 
                transparency in the development of secure blockchain infrastructure.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">⭐ 2,847 stars</span>
                <span className="text-sm text-muted-foreground">🍴 1,156 forks</span>
                <span className="text-sm text-muted-foreground">👥 6,000+ contributors</span>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Comprehensive Documentation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From beginner tutorials to advanced implementation guides, our documentation 
                helps developers at every level contribute to the ecosystem.
              </p>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <Users className="w-6 h-6 mr-3" />
                Active Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Join our forums, Discord, and regular workshops to collaborate with other 
                developers and researchers building the future of decentralized AI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg">
              <h4 className="text-2xl font-bold text-primary mb-6">Getting Started</h4>
              <div className="space-y-4">
                {[
                  "Clone the COREWEAVER repository",
                  "Set up your development environment",
                  "Choose a project from our issue tracker",
                  "Submit your first pull request",
                  "Join the community and get mentorship"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="gradient-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>View on GitHub</span>
              </button>
              <button className="tech-border bg-transparent text-foreground px-6 py-3 rounded-lg hover:bg-card/50 transition-all duration-300 flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download SDK</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  
  const metrics = [
    { label: "AI Agents Deployed", value: "2,847", change: "+24% today", icon: Brain },
    { label: "Threats Blocked", value: "99.98%", change: "All time high", icon: Shield },
    { label: "Network Uptime", value: "99.99%", change: "Enterprise grade", icon: Activity },
    { label: "Response Time", value: "1.2ms", change: "-76% faster", icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Live System Performance
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real-time metrics from our production systems demonstrate the reliability 
            and effectiveness of our decentralized AI infrastructure.
          </p>
        </motion.div>

        <div className="dashboard-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 ${
                activeMetric === index ? 'ai-glow' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <metric.icon className="w-8 h-8 text-white" />
                <div className="status-indicator"></div>
              </div>
              <div className="text-3xl font-bold text-accent mb-2">{metric.value}</div>
              <div className="text-sm text-white/80 mb-2">{metric.label}</div>
              <div className="text-xs text-accent">{metric.change}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative neural-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="tech-border p-12 rounded-lg glass-card text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Join the Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold coreweaver-text mb-6">
            Shape the Future of Decentralized AI
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're a developer, researcher, or organization, there's a place for you 
            in the Coreweaver ecosystem. Join us in building autonomous systems that protect 
            and empower the next generation of blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 ai-glow">
              Start Building Today
            </button>
            <button className="tech-border bg-transparent text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-card/50 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            Open source • Enterprise ready • Community driven
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Coreweaver Labs</span>
                <div className="text-xs text-white/80">Decentralized Agentic AI</div>
              </div>
            </div>
            <p className="text-white/80 text-sm">
              Pioneering autonomous systems that learn, adapt, and collaborate 
              within distributed networks for blockchain security and innovation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ecosystem</h4>
            <div className="space-y-2">
              {["Vault", "Forge", "Lab", "Academy", "Maelstrom"].map((item) => (
                <a key={item} href="#" className="block text-white/80 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Developers</h4>
            <div className="space-y-2">
              {["Documentation", "GitHub", "API Reference", "Community", "Support"].map((item) => (
                <a key={item} href="#" className="block text-white/80 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Research</h4>
            <div className="space-y-2">
              {["Publications", "Whitepapers", "Blog", "Events", "Grants"].map((item) => (
                <a key={item} href="#" className="block text-white/80 hover:text-accent transition-colors text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">
            © 2025 Coreweaver Labs. Pioneering decentralized agentic AI.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <a key={item} href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NeuralNetwork />
      <Navigation />
      <HeroSection />
      <MissionSection />
      <EcosystemSection />
      <TechnologySection />
      <StatsSection />
      <DevelopersSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;


import { useState } from 'react';
import { ArrowUpRight, Database, Zap, Activity, Network } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      title: 'Multi-Tenant IoT Platform',
      company: 'HyperNym',
      category: 'Cloud Architecture',
      icon: Database,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Enterprise-scale IoT platform processing 3M+ daily events with event-driven microservices architecture.',
      challenge: 'Building a scalable, multi-tenant platform capable of handling millions of IoT events daily while maintaining data isolation and real-time processing capabilities.',
      solution: 'Designed event-driven architecture using Azure AKS, Kafka, Redis, and MongoDB. Implemented tenant isolation at the database and application layers.',
      impact: [
        '3M+ events processed daily',
        '99.9% uptime achieved',
        'Sub-second event processing',
        'Multi-region deployment'
      ],
      tech: ['Azure AKS', 'Kafka', 'Redis', 'MongoDB', 'PostgreSQL', 'Event Hubs']
    },
    {
      title: 'DU Smart Building Digital Twin',
      company: 'DU Telecom',
      category: 'Digital Twin',
      icon: Network,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Real-time digital twin platform for smart building management with predictive maintenance and energy optimization.',
      challenge: 'Creating a unified platform to visualize and control thousands of IoT sensors and actuators across multiple buildings in real-time.',
      solution: 'Built digital twin infrastructure with real-time telemetry ingestion, 3D visualization, and ML-powered predictive analytics.',
      impact: [
        '40% reduction in energy costs',
        'Real-time building insights',
        'Predictive maintenance alerts',
        'Unified control interface'
      ],
      tech: ['Azure Digital Twins', 'IoT Hub', 'Time Series Insights', 'Power BI', 'React']
    },
    {
      title: 'Vodafone IoT Platform Modernization',
      company: 'Vodafone Qatar',
      category: 'DevOps & Cloud',
      icon: Zap,
      gradient: 'from-orange-500 to-red-500',
      description: 'Complete platform modernization reducing infrastructure costs by 35% while improving reliability and developer velocity.',
      challenge: 'Legacy infrastructure with high operational costs, limited observability, and slow deployment cycles affecting business agility.',
      solution: 'Migrated to cloud-native architecture with Infrastructure as Code, comprehensive monitoring, and automated CI/CD pipelines.',
      impact: [
        '35% cost reduction',
        '10x faster deployments',
        'Complete observability',
        'Zero-downtime releases'
      ],
      tech: ['Azure', 'Terraform', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'ELK Stack']
    },
    {
      title: 'Consumer IoT Experiences',
      company: 'Elaraby Group',
      category: 'Full-Stack IoT',
      icon: Activity,
      gradient: 'from-green-500 to-teal-500',
      description: 'End-to-end IoT product development from firmware to cloud backend to consumer mobile apps.',
      challenge: 'Delivering seamless consumer experiences that abstract the complexity of IoT connectivity, device management, and data synchronization.',
      solution: 'Built complete stack: embedded firmware, MQTT broker infrastructure, RESTful APIs, and native mobile applications with offline-first architecture.',
      impact: [
        '100K+ connected devices',
        '4.5+ app store rating',
        'Real-time device control',
        'Offline functionality'
      ],
      tech: ['ESP32', 'MQTT', 'Node.js', 'React Native', 'AWS IoT', 'DynamoDB']
    }
  ];

  const project = projects[selectedProject];
  const Icon = project.icon;

  return (
    <section id="projects" className="py-32 px-6 relative bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">Case Studies</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Transforming complex infrastructure challenges into scalable, production-ready solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((proj, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`p-6 rounded-xl text-left transition-all duration-300 ${selectedProject === index
                ? 'bg-blue-500/10 dark:bg-blue-500/20 border-2 border-blue-500'
                : 'bg-white dark:bg-white/5 border-2 border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-white/20 shadow-sm dark:shadow-none'
                }`}
            >
              <div className={`text-sm text-gray-500 dark:text-gray-400 mb-2`}>{proj.category}</div>
              <div className="font-bold text-lg text-gray-900 dark:text-white">{proj.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">{proj.company}</div>
            </button>
          ))}
        </div>

        <div className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none">
          <div className="flex items-start gap-6 mb-8">
            <div className={`p-6 rounded-2xl bg-gradient-to-br ${project.gradient} text-white`}>
              <Icon size={32} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{project.category}</div>
              <h3 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.company}</p>
            </div>
            <button className="p-3 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white">
              <ArrowUpRight size={24} />
            </button>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">Challenge</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">Solution</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="mb-12">
            <h4 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Impact & Results</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.impact.map((item, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-transparent">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {item.split(' ')[0]}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Technology Stack</h4>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/10 text-sm border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Cloud, Cpu, Code, Palette, TrendingUp, Shield } from 'lucide-react';

export default function Capabilities() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      skills: ['Azure Ecosystem', 'AKS & Kubernetes', 'Event-driven Design', 'Multi-tenant Systems', 'Scalability & Resilience']
    },
    {
      icon: Cpu,
      title: 'IoT & Edge',
      skills: ['IoT Platforms', 'Digital Twins', 'MQTT & Protocols', 'Firmware Integration', 'Edge Computing']
    },
    {
      icon: Code,
      title: 'DevOps & Infrastructure',
      skills: ['CI/CD Pipelines', 'IaC (Terraform)', 'Monitoring & Observability', 'Cloud Cost Management', 'Security Compliance']
    },
    {
      icon: Shield,
      title: 'Data & Streaming',
      skills: ['Kafka & Event Hubs', 'PostgreSQL & MongoDB', 'Redis Caching', 'Real-time Processing', 'Data Pipelines']
    },
    {
      icon: Palette,
      title: 'Product & UX',
      skills: ['Product Strategy', 'User Experience', 'Cross-functional Leadership', 'Stakeholder Management', 'Technical Roadmapping']
    },
    {
      icon: TrendingUp,
      title: 'Business Impact',
      skills: ['Technical Sales', 'ROI Analysis', 'Team Leadership', 'Strategic Planning', 'Vendor Management']
    }
  ];

  const stack = [
    'Azure',
    'Kubernetes',
    'Kafka',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Node.js',
    'React',
    'Python',
    'Terraform',
    'GitLab CI/CD',
    'Prometheus',
    'Grafana',
    'IoT Hub',
    'Digital Twins',
    'MQTT'
  ];

  return (
    <section id="capabilities" className="py-32 px-6 bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">Expertise</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            Technical Capabilities
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            A comprehensive toolkit for building scalable, secure, and intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group shadow-sm dark:shadow-none"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{cap.title}</h3>
                <div className="space-y-2">
                  {cap.skills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Technology Stack</h3>
          <div className="flex flex-wrap gap-4">
            {stack.map((tech, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full bg-white dark:bg-white/5 text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div >
    </section >
  );
}

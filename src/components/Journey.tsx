import { useState, useRef } from 'react';
import { Building2, Cpu, Cloud, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Journey() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      year: '2024',
      period: '2024 - Present',
      role: 'Director IoT & Infrastructure',
      company: 'HyperNym, Qatar',
      icon: Cloud,
      description: 'Leading multi-tenant IoT & data platforms on Azure. Processing 3M+ daily events with event-driven architecture.',
      highlights: [
        'Multi-tenant IoT platform architecture',
        'Event-driven microservices (Kafka, AKS)',
        'AI-assisted engineering workflows',
        'Digital twin implementations'
      ],
      tech: ['Azure', 'AKS', 'Kafka', 'IoT Hub', 'Terraform']
    },
    {
      year: '2023',
      period: '2023 - 2024',
      role: 'DU Smart Building Digital Twin',
      company: 'Major Launch',
      icon: Building2,
      description: 'Designed and launched enterprise-scale digital twin platform for smart building management.',
      highlights: [
        'Real-time telemetry visualization',
        'Predictive maintenance systems',
        'Energy optimization algorithms',
        'Cross-platform integration'
      ],
      tech: ['Digital Twins', 'React', 'Node.js', 'Azure', 'TypeScript']
    },
    {
      year: '2022',
      period: '2022 - 2023',
      role: 'IoT Platform Lead',
      company: 'Vodafone Qatar',
      icon: Sparkles,
      description: 'Platform modernization reducing costs by 35% while improving reliability and scalability.',
      highlights: [
        'Infrastructure cost optimization',
        'Observability & monitoring systems',
        'DevOps automation pipelines',
        'Cloud migration strategy'
      ],
      tech: ['DevOps', 'Terraform', 'AWS', 'Monitoring', 'CI/CD']
    },
    {
      year: '2018',
      period: '2018 - 2021',
      role: 'IoT Solutions Architect',
      company: 'Elaraby Group & Zenath',
      icon: Cpu,
      description: 'Built consumer IoT experiences and telemetry systems from firmware to cloud to UX.',
      highlights: [
        'End-to-end IoT product delivery',
        'Firmware → Cloud integration',
        'Consumer app experiences'
      ],
      tech: ['Embedded C', 'ESP32', 'AWS IoT', 'Mobile Apps', 'Data Pipelines', 'UX Design']
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="journey" className="py-32 px-6 relative bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
              Professional Journey
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-all active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-gray-200 dark:border-white/10 hover:bg-blue-50 dark:hover:bg-white/10 text-gray-600 dark:text-white transition-all active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className={`min-w-[85vw] md:min-w-[450px] snap-center p-8 rounded-3xl transition-all duration-300 group ${activeCard === index
                    ? 'bg-white dark:bg-white/10 border-blue-500/50 shadow-xl dark:shadow-none scale-[1.02]'
                    : 'bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 hover:border-blue-500/30'
                  } border backdrop-blur-sm flex flex-col`}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-4 rounded-2xl transition-colors duration-300 ${activeCard === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-blue-400'
                    }`}>
                    <Icon size={32} />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{exp.role}</h3>
                <div className="text-lg text-blue-600 dark:text-blue-400 mb-6 font-medium">{exp.company}</div>

                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
                  {exp.description}
                </p>

                <div className="space-y-6">
                  <div className="space-y-3">
                    {exp.highlights.slice(0, 2).map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-white/10 flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

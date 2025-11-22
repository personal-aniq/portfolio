import { Activity, Globe, Zap } from 'lucide-react';

export default function Impact() {
  // New stats array for the updated section
  const stats = [
    { value: '3M+', label: 'Events Processed Daily' },
    { value: '35%', label: 'Cost Reduction' },
    { value: '100K+', label: 'Connected Devices' },
    { value: '4', label: 'GCC Markets' },
  ];

  return (
    <section id="impact" className="py-32 px-6 relative bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">Impact</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-8 text-gray-900 dark:text-white">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              Delivering tangible business value through technical innovation. Every solution is architected with clear performance and efficiency goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm dark:shadow-none"
                >
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-xl dark:shadow-none">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Core Philosophy</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Performance First</h4>
                    <p className="text-gray-600 dark:text-gray-400">Optimizing for speed, efficiency, and resource utilization at every layer of the stack.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Global Scale</h4>
                    <p className="text-gray-600 dark:text-gray-400">Architecting systems that maintain reliability and consistency across distributed regions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Rapid Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-400">Enabling faster development cycles through automated pipelines and modern tooling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

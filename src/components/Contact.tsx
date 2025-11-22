import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-32 px-6 bg-gray-50 dark:bg-[#0a0e27] transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-sm tracking-[0.3em] text-blue-600 dark:text-blue-400 uppercase">Get in Touch</span>
        <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
          Let's Build Something Extraordinary
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Whether you need to scale your infrastructure, modernize your IoT platform, or define your product strategy, I'm here to help.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Subject
            </label>
            <select
              id="subject"
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white"
            >
              <option value="" className="dark:bg-[#0a0e27]">Select a topic</option>
              <option value="consulting" className="dark:bg-[#0a0e27]">IoT Consulting</option>
              <option value="architecture" className="dark:bg-[#0a0e27]">Cloud Architecture</option>
              <option value="devops" className="dark:bg-[#0a0e27]">DevOps Transformation</option>
              <option value="other" className="dark:bg-[#0a0e27]">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-gray-900 dark:text-white resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25"
          >
            Send Message
            <Send size={20} />
          </button>
        </form>

        <div className="mt-16 flex justify-center gap-8">
          <a href="https://github.com/aniqurahman" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/aniqurrahman" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:aniqurrahman@outlook.com" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

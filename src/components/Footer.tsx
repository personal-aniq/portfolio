import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 bg-gray-50 dark:bg-[#0a0e27] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Aniq ur Rahman</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Building intelligent infrastructure for the future.
                    </p>
                </div>

                <div className="flex gap-6">
                    <a
                        href="https://github.com/aniqurahman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/aniqurrahman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:aniqurrahman@outlook.com"
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-500">
                    © {currentYear} Aniq ur Rahman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

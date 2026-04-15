import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  delay?: number;
  darkMode?: boolean;
}

export function ProjectCard({ title, description, image, liveUrl, codeUrl, delay = 0, darkMode = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{title}</h3>
        <p className={`text-xs mb-4 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
        
        <div className="flex gap-3">
          {liveUrl && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-shadow"
            >
              <ExternalLink className="w-5 h-5" />
              Live Demo
            </motion.button>
          )}
          {codeUrl && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full font-semibold text-sm transition-colors ${
                darkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Github className="w-5 h-5" />
              Code
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
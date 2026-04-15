import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  delay?: number;
  darkMode?: boolean;
}

export function SkillCard({ icon: Icon, name, level, delay = 0, darkMode = false }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className={`rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border ${
        darkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2.5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{name}</h3>
      </div>
      
      <div className={`w-full rounded-full h-2 overflow-hidden ${
        darkMode ? 'bg-gray-700' : 'bg-gray-100'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
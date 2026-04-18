import { Home, User, FolderOpen, Award, Mail, Moon, Sun, Sparkles, Trophy, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'education', icon: Award, label: 'Education' },
  { id: 'skills', icon: User, label: 'Skills' },
  { id: 'achievements', icon: Trophy, label: 'Achievements' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function FloatingNav({ activeSection, onNavigate, darkMode, toggleDarkMode }: FloatingNavProps) {
  const activeItem = navItems.find((item) => item.id === activeSection) ?? navItems[0];

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
      className={`fixed bottom-6 left-1/2 z-50 w-[calc(100%-7.5rem)] max-w-6xl -translate-x-1/2 rounded-[2rem] border px-3 py-2.5 backdrop-blur-xl shadow-2xl sm:px-4 sm:py-3 lg:px-6 lg:py-4 ${
        darkMode 
          ? 'bg-gray-900/90 border-gray-700' 
          : 'bg-white/80 border-white/50'
      }`}
      style={{
        boxShadow: darkMode 
          ? '0 8px 32px rgba(59, 130, 246, 0.2)' 
          : '0 8px 32px rgba(37, 99, 235, 0.15)',
      }}
    >
      <div className="relative flex items-center lg:hidden">
        <div className="mx-auto">
          <motion.button
            key={activeItem.id}
            onClick={() => onNavigate(activeItem.id)}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center gap-2 rounded-full px-4 py-2 text-white"
          >
            <motion.div
              layoutId="active-nav-mobile"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <activeItem.icon className="relative z-10 h-5 w-5" />
            <span className="relative z-10 text-sm font-semibold">
              {activeItem.label}
            </span>
          </motion.button>
        </div>

        {/* Dark Mode Toggle moved to top-right */}
      </div>

      <div className="hidden items-center justify-between gap-4 lg:flex">
        <div className={`flex items-center gap-2 rounded-2xl px-4 py-2 ${darkMode ? 'bg-gray-800/80 text-gray-100' : 'bg-white/80 text-gray-900'}`}>
          <Sparkles className={`h-4 w-4 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
          <p className="text-sm font-semibold whitespace-nowrap">Dr. G SATYA PRATAP</p>
        </div>

        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -1 }}
                className={`relative flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-300'
                    : 'text-gray-600 hover:bg-white hover:text-blue-700'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" />
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            );
          })}

          {/* Theme toggle moved to top-right */}
        </div>
      </div>
    </motion.nav>
  );
}
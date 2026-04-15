import { Home, User, FolderOpen, Award, Mail, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: User, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'education', icon: Award, label: 'Education' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export function Sidebar({ activeSection, onNavigate, darkMode, toggleDarkMode }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 h-screen w-64 ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
      } border-r hidden lg:flex flex-col z-50`}
    >
      {/* Logo/Brand */}
      <div className="p-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent`}
        >
          Portfolio
        </motion.h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                    : darkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </nav>

      {/* Dark Mode Toggle */}
      <div className="p-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </motion.button>
      </div>

      {/* Footer */}
      <div className={`p-4 text-center text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
        <p>© 2026 Portfolio</p>
      </div>
    </motion.aside>
  );
}

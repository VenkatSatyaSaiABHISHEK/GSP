import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  contributions: string[];
  technologies: string[];
  impact: string[];
  liveUrl?: string;
  codeUrl?: string;
  projectIndex: number;
  delay?: number;
  darkMode?: boolean;
}

export function ProjectCard({ title, description, image, contributions, technologies, impact, liveUrl, codeUrl, projectIndex, delay = 0, darkMode = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-lg transition-all duration-300 hover:shadow-2xl ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-slate-200'
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
        <div className="absolute left-5 top-5">
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${
            darkMode ? 'bg-white/10 text-white' : 'bg-white/90 text-slate-900'
          }`}>
            Project {projectIndex}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h3>
          <span className={`rounded-full p-2 ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
        <p className={`mt-3 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`rounded-full px-3 py-1 font-semibold ${
                darkMode ? 'bg-gray-800 text-gray-300' : 'bg-slate-100 text-slate-700'
              }`}
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-slate-500'}`}>
              +{technologies.length - 3} more
            </span>
          )}
        </div>

        <Dialog>
          <div className="mt-auto grid grid-cols-2 gap-3">
            <DialogTrigger asChild>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 text-sm font-semibold text-white shadow-md hover:shadow-lg"
              >
                <ExternalLink className="h-4 w-4" />
                View Brief
                <ArrowUpRight className="h-4 w-4" />
              </motion.button>
            </DialogTrigger>
            {codeUrl && (
              <motion.button
                whileTap={{ scale: 0.97 }}
                className={`flex h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold ${
                  darkMode
                    ? 'border border-gray-700 text-gray-200 hover:border-blue-500/60'
                    : 'border border-slate-200 text-slate-700 hover:border-blue-300'
                }`}
              >
                <Github className="h-4 w-4" />
                Details
              </motion.button>
            )}
          </div>

          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>

            <div className="space-y-5 text-sm">
              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  Key Contributions
                </p>
                <ul className="mt-2 space-y-1">
                  {contributions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-1 h-2 w-2 rounded-full ${darkMode ? 'bg-blue-300' : 'bg-blue-600'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  Technologies Used
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        darkMode ? 'bg-gray-800 text-gray-300' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>
                  Impact
                </p>
                <ul className="mt-2 space-y-1">
                  {impact.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-1 h-2 w-2 rounded-full ${darkMode ? 'bg-blue-300' : 'bg-blue-600'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
}
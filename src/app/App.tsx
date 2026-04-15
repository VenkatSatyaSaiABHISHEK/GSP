import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Brain, Database, Palette, Smartphone, TrendingUp, FileText, GraduationCap, Medal, Users, Award, Star, Trophy, Sparkles, Zap, Briefcase, Building2, Calendar } from 'lucide-react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { FloatingNav } from './components/FloatingNav';
import { ProjectCard } from './components/ProjectCard';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [capabilityFilter, setCapabilityFilter] = useState('All');
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'achievements', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch projects from Firestore with real-time updates
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projectsList: any[] = [];
      snapshot.forEach((doc) => {
        projectsList.push({ id: doc.id, ...doc.data() });
      });
      setProjects(projectsList.length > 0 ? projectsList : getDefaultProjects());
    }, (error) => {
      console.error('Error fetching projects:', error);
      // Fallback to default projects if Firebase is not configured
      setProjects(getDefaultProjects());
    });

    return () => unsubscribe();
  }, []);

  const getDefaultProjects = () => [
    {
      id: '1',
      title: 'AI & Data Science Academic Programs',
      description: 'Designed and mentored AI and Data Science academic initiatives with outcome-driven learning and research orientation.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTM5Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '2',
      title: 'Renewable Energy Power Systems Advisory',
      description: 'Provided guidance for sustainable development through power systems planning, implementation strategy, and technical oversight.',
      image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzc1MzgyNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '3',
      title: 'NCC Naval Wing Leadership',
      description: 'Serving as Associate NCC Officer with leadership development, discipline training, and student mentoring activities.',
      image: 'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzUyOTE2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '4',
      title: 'Technology Entrepreneurship',
      description: 'Leading MEEKIREETI SAFEST TECHNOLOGY Pvt.ltd. with focus on engineering services and sustainable technology solutions.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzUzNDY2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '5',
      title: 'IoT Smart City Solutions',
      description: 'Implemented comprehensive IoT framework for urban infrastructure monitoring using cloud integration and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGNpdHl8ZW58MXx8fHwxNzc1MzQ2NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '6',
      title: 'Blockchain Supply Chain System',
      description: 'Developed decentralized supply chain tracking using blockchain technology for enhanced transparency and security.',
      image: 'https://images.unsplash.com/photo-1639762681033-f461519b906f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwYXJ0fGVufDF8fHx8MTc3NTM0NjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '7',
      title: 'Machine Learning Predictive Models',
      description: 'Built advanced ML models for predictive analytics in healthcare and financial sectors with 95% accuracy rates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc1MzQ2Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '8',
      title: 'Cloud Infrastructure Migration',
      description: 'Orchestrated seamless cloud migration for enterprise systems with zero downtime and 40% cost reduction.',
      image: 'https://images.unsplash.com/photo-1560949059-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlfGVufDF8fHx8MTc3NTM0NjcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const academicMilestones = [
    {
      year: '2025-Present',
      title: 'Ph.D. Computer Engineering',
      institute: 'Lincoln University College, Malaysia',
      detail: 'Distinction in advanced research applications and sustainable energy systems.',
      grade: 'Research Scholar',
      accent: 'blue',
    },
    {
      year: '2024',
      title: 'One Year Certification: AI & ML',
      institute: 'IIT Kharagpur (Certification)',
      detail: 'Advanced hands-on training in AI, machine learning, and applied analytics.',
      grade: 'Completed with Distinction',
      accent: 'cyan',
    },
    {
      year: '2020',
      title: 'MBA: HRM & Marketing Management',
      institute: 'Adikavi Nannaya University',
      detail: 'Focused on leadership, management strategy, and organizational development.',
      grade: 'First Class',
      accent: 'emerald',
    },
    {
      year: '2015',
      title: 'M.Tech: Power Electronics',
      institute: 'JNTU Kakinada',
      detail: 'Specialized in power systems, control systems, and high voltage applications.',
      grade: 'First Class with Distinction',
      accent: 'amber',
    },
    {
      year: '2010',
      title: 'B.Tech: Electrical & Electronics Engineering',
      institute: 'Pondicherry University',
      detail: 'Strong engineering foundation in electrical machines and system design.',
      grade: 'First Class',
      accent: 'orange',
    },
    {
      year: '2006',
      title: 'Advanced Diploma in Computer Applications',
      institute: 'ESTC Govt. of India',
      detail: 'Programming with C, C++, and Oracle database fundamentals.',
      grade: 'Completed',
      accent: 'rose',
    },
  ] as const;

  const journeyStats = [
    { icon: GraduationCap, value: '6', label: 'Degrees & Diplomas' },
    { icon: Users, value: '20+', label: 'Years in Academics' },
    { icon: Award, value: '5+', label: 'Academic Honors' },
    { icon: Medal, value: '3+', label: 'Fields of Expertise' },
  ] as const;

  const achievements = [
    {
      icon: Star,
      title: 'Most Inspiring Teacher',
      location: 'KIET, Kakinada',
      date: '2023',
      description: 'Recognized for exceptional teaching methods and student inspiration.',
      accent: 'from-blue-500 to-cyan-500',
      bgAccent: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-300',
    },
    {
      icon: Trophy,
      title: 'Honorary Doctorate Award',
      location: 'Washington University, American Council of Training and Development',
      date: 'June 15, 2024',
      description: 'Awarded for contributions to AI education and research excellence.',
      accent: 'from-blue-500 to-cyan-500',
      bgAccent: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-300',
    },
    {
      icon: Sparkles,
      title: 'GATE - 1050 AIR',
      location: 'Graduate Aptitude Test in Engineering',
      date: '2008',
      description: 'Secured All India Rank of 1050 in the prestigious GATE examination.',
      accent: 'from-blue-500 to-cyan-500',
      bgAccent: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-300',
    },
    {
      icon: Zap,
      title: 'University Topper',
      location: 'Jawaharlal Technological University Kakinada',
      date: '2011',
      description: 'Achieved top rank with 83% in academics for MTech Power Systems & HVE.',
      accent: 'from-blue-500 to-cyan-500',
      bgAccent: 'from-blue-100 to-cyan-100',
      borderColor: 'border-blue-300',
    },
  ] as const;

  const professionalJourney = [
    {
      year: '2010-Present',
      title: 'Chief Executive Officer',
      company: 'MEEKIREETI SAFEST TECHNOLOGY',
      location: 'Andhra Pradesh, India',
      duration: '15 yrs 11 mos',
      description: 'Leading technology-driven solutions in solar power systems, engineering services, and sustainable technology. Overseeing operations, commissioning, troubleshooting, and repairs.',
      skills: ['Operational Execution', 'Engineering', 'Project Management'],
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      accent: 'blue',
      icon: Briefcase,
    },
    {
      year: '2013-Present',
      title: 'Associate Professor & Academic Advisor',
      company: 'Kakinada Institute of Engineering and Technology (KIET)',
      location: 'Kakinada, India',
      duration: '12 yrs 11 mos',
      description: 'Designing curriculum, mentoring students, conducting research, and providing academic leadership. Fostering excellence in engineering education and student development.',
      skills: ['Curriculum Design', 'Research', 'Student Mentoring'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      accent: 'cyan',
      icon: Building2,
    },
    {
      year: '2020-Present',
      title: 'Associate NCC Officer - Naval Wing',
      company: 'KIET Group of Institutions, Korangi',
      location: 'Korangi, India',
      duration: '6 yrs 3 mos',
      description: 'Leading Naval Wing operations with focus on discipline training, leadership development, and student mentorship. Organizing maritime training activities and character building.',
      skills: ['Leadership', 'Training', 'Discipline'],
      image: 'https://images.unsplash.com/photo-1520492966384-7f7f1a7f4f4b?auto=format&fit=crop&w=1200&q=80',
      accent: 'blue',
      icon: Award,
    },
    {
      year: '2019-Present',
      title: 'Research Scholar',
      company: 'Lincoln University College',
      location: 'Malaysia · Hybrid',
      duration: '6 yrs 8 mos',
      description: 'Conducting advanced research in AI, machine learning, and sustainable energy systems. Publishing scholarly work and contributing to academic knowledge.',
      skills: ['Research', 'AI & ML', 'Publications'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      accent: 'cyan',
      icon: Brain,
    },
  ] as const;

  const technicalSkills = [
    { icon: Brain, name: 'AI & ML Systems', level: 95, bar: 'from-violet-500 to-fuchsia-500' },
    { icon: TrendingUp, name: 'Data Science Analytics', level: 92, bar: 'from-blue-500 to-indigo-500' },
    { icon: Database, name: 'Power Electronics Research', level: 90, bar: 'from-cyan-500 to-blue-500' },
    { icon: Award, name: 'Renewable Energy Advisory', level: 94, bar: 'from-emerald-500 to-teal-500' },
    { icon: Code2, name: 'Research Computing', level: 86, bar: 'from-green-500 to-emerald-500' },
    { icon: Users, name: 'Academic Leadership Systems', level: 93, bar: 'from-amber-500 to-orange-500' },
    { icon: FileText, name: 'Scholarly Communication', level: 88, bar: 'from-rose-500 to-orange-500' },
  ] as const;

  const academicCapabilities = [
    { icon: Users, title: 'Academic Leadership', detail: 'Driving institutional growth, policy alignment, and quality standards.', category: 'Leadership' },
    { icon: FileText, title: 'Curriculum Architecture', detail: 'Designing industry-relevant curriculum with measurable outcomes.', category: 'Teaching' },
    { icon: TrendingUp, title: 'Research Strategy', detail: 'Building publication roadmaps, peer-reviewed outputs, and impact.', category: 'Research' },
    { icon: Award, title: 'EdTech Integration', detail: 'Applying digital tools for smarter teaching and blended delivery.', category: 'Teaching' },
    { icon: GraduationCap, title: 'Mentorship Ecosystem', detail: 'Guiding students for research, placements, and higher studies.', category: 'Mentoring' },
    { icon: Database, title: 'Academic Publications', detail: 'Publishing technical and interdisciplinary research contributions.', category: 'Research' },
    { icon: Brain, title: 'Innovation & Grants', detail: 'Converting ideas into funded projects and sustainable initiatives.', category: 'Research' },
    { icon: Palette, title: 'Outcome-Based Course Design', detail: 'Crafting engaging modules with strong assessment alignment.', category: 'Teaching' },
  ] as const;

  const capabilityFilters = ['All', 'Leadership', 'Research', 'Teaching', 'Mentoring'] as const;
  const visibleCapabilities = capabilityFilter === 'All'
    ? academicCapabilities
    : academicCapabilities.filter((item) => item.category === capabilityFilter);

  const educationRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: educationProgress } = useScroll({
    target: educationRef,
    offset: ['start 75%', 'end 25%'],
  });
  const lineScaleY = useTransform(educationProgress, [0, 1], [0, 1]);
  const lineOpacity = useTransform(educationProgress, [0, 0.08, 1], [0.3, 1, 1]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-950' : 'bg-[#F8FAFC]'
    }`}>
      {/* Main Content */}
      <div>
        <div className="overflow-x-hidden pb-40">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-start justify-center px-6 pt-14 pb-36 lg:pt-16 lg:pb-28">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-lg"
            >
              {/* Profile Image with Gradient Glow */}
              <div className="relative inline-block mb-8">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 blur-2xl opacity-40"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="relative w-36 h-36 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                >
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D5635AQGgFhcguXmaCg/profile-framedphoto-shrink_200_200/B56ZkinJzPJoAY-/0/1757222313529?e=1776844800&v=beta&t=shGlfF1ZN6wkp9SM-SmQRWDm3sMRcRXT3_542-PMrfA"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Name & Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 whitespace-nowrap ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Dr. G Satya (GSP) Pratap
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`text-lg lg:text-xl mb-8 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Academic Researcher | AI & DATA SCIENCE Academician | Renewable Energy Power Systems Advisor for Sustainable Development | CEO at MEEKIREETI SAFEST TECHNOLOGY Pvt.ltd.
              </motion.p>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center justify-center gap-4"
              >
                {[
                  { icon: Phone, href: 'tel:+919640959425' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/satya-pratap-gsp' },
                  { icon: Mail, href: 'mailto:g.satyapratap@gmail.com' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:text-blue-400' 
                        : 'bg-white text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`mt-7 mx-auto w-full max-w-xl rounded-2xl px-4 py-5 sm:px-8 sm:py-6 shadow-lg ${
                  darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white/90 backdrop-blur-sm'
                }`}
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                  {[
                    { value: '15+', label: 'Years Experience' },
                    { value: '20+', label: 'Publications' },
                    { value: 'Ph.D.', label: 'Completed' },
                  ].map((item, index) => (
                    <div key={item.label} className="relative px-1">
                      <p className={`text-3xl sm:text-4xl leading-none font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                        {item.value}
                      </p>
                      <p className={`mt-1 text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.label}
                      </p>
                      {index < 2 && (
                        <span className={`hidden sm:block absolute right-0 top-1/2 h-8 -translate-y-1/2 w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="px-6 py-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="pointer-events-none absolute -left-16 top-8 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl" />
              <div className="pointer-events-none absolute -right-12 bottom-8 h-32 w-32 rounded-full bg-amber-300/20 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mb-10 text-center"
              >
                <h2 className={`text-4xl lg:text-5xl font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  About
                </h2>
                <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600" />
              </motion.div>

              <div className="grid items-start gap-6 lg:grid-cols-12">
                <div className="order-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-2 lg:col-span-5">
                  {[
                    { value: '15+', label: 'YEARS EXPERIENCE' },
                    { value: '20+', label: 'PUBLICATIONS' },
                    { value: '8+', label: 'AWARDS' },
                    { value: '1000+', label: 'STUDENTS MENTORED' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.45 }}
                      whileHover={{ y: -5, scale: 1.015 }}
                      className={`rounded-2xl border p-8 text-center shadow-sm transition-shadow hover:shadow-lg ${
                        darkMode
                          ? 'border-gray-700 bg-gray-900'
                          : 'border-slate-200 bg-white'
                      }`}
                    >
                      <p className={`text-5xl font-medium leading-none ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>
                        {stat.value}
                      </p>
                      <p className={`mt-3 text-sm tracking-wider ${darkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`order-2 rounded-3xl p-8 shadow-lg lg:order-1 lg:col-span-7 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'}`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <motion.span
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                      className="inline-flex rounded-xl bg-amber-500/15 p-2 text-amber-600"
                    >
                      <FileText className="h-5 w-5" />
                    </motion.span>
                    <h3 className={`text-3xl font-medium ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>
                      Biography
                    </h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08, duration: 0.45 }}
                    className={`mb-5 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}
                  >
                    Dr. G Satya Pratap is an accomplished academic leader and AI/ML expert with a distinguished
                    career spanning over a decade in higher education, research, and sustainable technology.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16, duration: 0.45 }}
                    className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}
                  >
                    With extensive expertise in Artificial Intelligence, Machine Learning, Data Science, and
                    Renewable Energy Power Systems, he bridges academic excellence with practical impact through
                    publications, student mentorship, and institutional leadership.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.26, duration: 0.45 }}
                    className={`mt-8 text-2xl italic ${darkMode ? 'text-blue-200' : 'text-blue-900'}`}
                  >
                    "The future belongs to those who believe in the beauty of their dreams."
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Academic Journey Section */}
          <section id="education" ref={educationRef} className="px-6 py-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className={`text-center text-xs font-semibold tracking-[0.18em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                ACADEMIC JOURNEY
              </p>
              <h2 className={`mt-2 text-3xl lg:text-5xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Educational Timeline
              </h2>
              <p className={`max-w-2xl mx-auto mt-3 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                A journey through knowledge, research, and academic achievement across multiple disciplines and prestigious institutions.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {academicMilestones.map((item, index) => (
                  <span
                    key={`${item.year}-${index}`}
                    className={`rounded-full border px-3 py-1 text-xs ${darkMode ? 'border-gray-700 bg-gray-900 text-gray-300' : 'border-blue-200 bg-blue-50 text-blue-700'}`}
                  >
                    {item.year}
                  </span>
                ))}
              </div>

              <div className="relative mt-12">
                <motion.div
                  style={{ transformOrigin: 'top', scaleY: lineScaleY, opacity: lineOpacity }}
                  className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-blue-400 via-cyan-500 to-violet-500 lg:block"
                />

                <div className="space-y-8">
                  {academicMilestones.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const accentClasses =
                      item.accent === 'blue'
                        ? 'border-blue-300 bg-blue-50/60 text-blue-700'
                        : item.accent === 'cyan'
                        ? 'border-cyan-300 bg-cyan-50/60 text-cyan-700'
                        : item.accent === 'emerald'
                        ? 'border-emerald-300 bg-emerald-50/60 text-emerald-700'
                        : item.accent === 'amber'
                        ? 'border-amber-300 bg-amber-50/60 text-amber-700'
                        : item.accent === 'orange'
                        ? 'border-orange-300 bg-orange-50/60 text-orange-700'
                        : 'border-rose-300 bg-rose-50/60 text-rose-700';

                    const dotClass =
                      item.accent === 'blue'
                        ? 'bg-blue-500'
                        : item.accent === 'cyan'
                        ? 'bg-cyan-500'
                        : item.accent === 'emerald'
                        ? 'bg-emerald-500'
                        : item.accent === 'amber'
                        ? 'bg-amber-500'
                        : item.accent === 'orange'
                        ? 'bg-orange-500'
                        : 'bg-rose-500';

                    return (
                      <motion.div
                        key={`${item.title}-${item.year}`}
                        initial={{ opacity: 0, y: 30, x: isLeft ? -40 : 40, scale: 0.96 }}
                        whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                        className={`relative flex ${isLeft ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}
                      >
                        <div className={`w-full lg:w-[46%] rounded-2xl border shadow-lg ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                          <div className="p-5">
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-300' : accentClasses}`}>
                              {item.year}
                            </span>
                            <h3 className={`mt-3 text-base lg:text-lg font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                              {item.title}
                            </h3>
                            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {item.institute}
                            </p>
                            <p className={`mt-2 text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {item.detail}
                            </p>
                            <p className={`mt-3 text-xs font-medium ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {item.grade}
                            </p>
                          </div>
                        </div>

                        <motion.span
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false, amount: 0.35 }}
                          transition={{ delay: 0.12 + index * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
                          className={`absolute left-1/2 top-7 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ${dotClass} ${darkMode ? 'ring-gray-950' : 'ring-[#F8FAFC]'} lg:block`}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {journeyStats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index, duration: 0.4 }}
                    className={`rounded-2xl p-5 text-center shadow-md ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200'}`}
                  >
                    <item.icon className={`mx-auto h-5 w-5 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                    <p className={`mt-2 text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                    <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="mt-7 flex justify-center"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl"
                >
                  Connect for Academic Collaborations
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="px-6 py-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12 text-center">
                <p className={`text-xs font-semibold tracking-[0.18em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  CORE COMPETENCY MATRIX
                </p>
                <h2 className={`mt-2 text-4xl lg:text-6xl font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  Skills & Capability Grid
                </h2>
                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                  <span className={`h-px w-14 ${darkMode ? 'bg-blue-400/60' : 'bg-blue-300'}`} />
                  <span className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600" />
                  <span className={`h-px w-14 ${darkMode ? 'bg-blue-400/60' : 'bg-blue-300'}`} />
                </div>
              </div>

              <div className="grid items-start gap-8 lg:grid-cols-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.55 }}
                  className="lg:col-span-7"
                >
                  <div className={`rounded-2xl border p-4 shadow-md ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                    <h3 className={`text-3xl font-medium ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>Technical Strengths</h3>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {technicalSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ delay: index * 0.06, duration: 0.45 }}
                        className={`rounded-2xl border p-4 ${darkMode ? 'border-gray-800 bg-gray-900/70' : 'border-gray-200 bg-white/90'} shadow-sm`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <p className={`flex items-center gap-2 text-base font-medium ${darkMode ? 'text-gray-200' : 'text-slate-700'}`}>
                            <span className={`rounded-lg p-1.5 ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-50 text-blue-700'}`}>
                              <skill.icon className="h-4 w-4" />
                            </span>
                            <span>{skill.name}</span>
                          </p>
                          <span className={`text-base font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{skill.level}%</span>
                        </div>
                        <div className={`h-3 w-full overflow-hidden rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.1 + index * 0.05, duration: 0.65, ease: 'easeOut' }}
                            className={`h-full rounded-full bg-gradient-to-r ${skill.bar}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: 0.55 }}
                  className="lg:col-span-5"
                >
                  <div className={`rounded-2xl border p-4 shadow-md ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
                    <h3 className={`text-3xl font-medium ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>Academic Capability</h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {capabilityFilters.map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setCapabilityFilter(filter)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                          capabilityFilter === filter
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md'
                            : darkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {visibleCapabilities.map((capability, index) => (
                      <motion.div
                        key={`${capabilityFilter}-${capability.title}`}
                        layout
                        initial={{ opacity: 0, y: 18, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.35 }}
                        transition={{ delay: index * 0.05, duration: 0.42 }}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className={`group relative overflow-hidden rounded-2xl border p-4 shadow-sm transition-all ${
                          darkMode
                            ? 'border-gray-700 bg-gray-900 hover:border-cyan-500/60 hover:shadow-[0_10px_28px_rgba(34,211,238,0.18)]'
                            : 'border-gray-200 bg-gradient-to-br from-white to-amber-50/50 hover:border-cyan-300 hover:shadow-[0_10px_28px_rgba(59,130,246,0.14)]'
                        }`}
                      >
                        <span className={`absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b ${darkMode ? 'from-blue-500 to-cyan-400' : 'from-blue-400 to-cyan-500'}`} />
                        <span className={`absolute -right-6 -top-6 h-16 w-16 rounded-full ${darkMode ? 'bg-amber-400/10' : 'bg-amber-300/20'}`} />
                        <span className={`absolute right-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${
                          darkMode ? 'bg-gray-800 text-cyan-300' : 'bg-white/90 text-blue-700 border border-blue-100'
                        }`}>
                          {capability.category}
                        </span>
                        <div className="mb-3 flex items-center gap-2">
                          <span className={`rounded-lg p-2 ${darkMode ? 'bg-blue-400/15 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                            <capability.icon className="h-4 w-4" />
                          </span>
                          <h4 className={`text-base font-semibold ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>{capability.title}</h4>
                        </div>
                        <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{capability.detail}</p>
                        <span className={`mt-3 block h-px w-full ${darkMode ? 'bg-gray-700' : 'bg-amber-200'}`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Leadership & Achievements Section */}
          <section id="achievements" className="px-6 py-16 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12 text-center">
                <p className={`text-xs font-semibold tracking-[0.18em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  PROFESSIONAL GROWTH
                </p>
                <h2 className={`mt-2 text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Leadership & Achievements
                </h2>
                <p className={`max-w-2xl mx-auto mt-3 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Milestones and recognitions that showcase excellence, innovation, and dedication to academic and professional growth.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12, duration: 0.5 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 ${
                        darkMode
                          ? 'border-gray-700 bg-gray-900 hover:shadow-2xl hover:border-blue-500/50'
                          : 'border-gray-200 bg-white hover:shadow-2xl hover:border-blue-300'
                      }`}
                    >
                      {/* Gradient Background Accent */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgAccent} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                      {/* Animated Background Orbs */}
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180, 270, 360],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${achievement.accent} opacity-5 blur-3xl`}
                      />
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          rotate: [360, 270, 180, 90, 0],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className={`absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-gradient-to-br ${achievement.accent} opacity-5 blur-3xl`}
                      />

                      <div className="relative p-5 lg:p-6">
                        {/* Icon Circle */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.08 + index * 0.12, type: 'spring', stiffness: 200 }}
                          className={`inline-flex rounded-xl bg-gradient-to-br ${achievement.accent} p-3 text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </motion.div>

                        {/* Content */}
                        <motion.h3
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.12 + index * 0.12, duration: 0.4 }}
                          className={`mt-4 text-lg lg:text-xl font-bold ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {achievement.title}
                        </motion.h3>

                        {/* Meta Information */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.16 + index * 0.12, duration: 0.4 }}
                          className="mt-3 space-y-1"
                        >
                          <div className="flex items-start gap-2">
                            <MapPin className={`h-3.5 w-3.5 mt-0.5 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            <p className={`text-xs lg:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                              {achievement.location}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className={`h-3.5 w-3.5 flex-shrink-0 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            <p className={`text-xs lg:text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {achievement.date}
                            </p>
                          </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.12, duration: 0.4 }}
                          className={`mt-4 text-xs lg:text-sm leading-relaxed ${
                            darkMode ? 'text-gray-400' : 'text-gray-700'
                          }`}
                        >
                          {achievement.description}
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.24 + index * 0.12, duration: 0.6 }}
                          className={`mt-4 h-px bg-gradient-to-r ${achievement.bgAccent} opacity-50`}
                        />

                        {/* Bottom Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.28 + index * 0.12, duration: 0.4 }}
                          className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs ${
                            darkMode
                              ? 'bg-gray-800 text-gray-300 border border-gray-700'
                              : 'bg-blue-50 text-blue-900 border border-blue-200'
                          }`}
                        >
                          <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${achievement.accent}`} />
                          <span className="font-semibold tracking-wide">Recognized</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Professional Journey Section */}
          <section id="experience" className="px-6 py-14 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className={`text-center text-xs font-semibold tracking-[0.18em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                CAREER PROGRESSION
              </p>
              <h2 className={`mt-2 text-3xl lg:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Professional Journey
              </h2>
              <p className={`max-w-2xl mx-auto mt-3 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                A dynamic career spanning leadership, academia, research, and entrepreneurship across diverse sectors.
              </p>

              <div className="relative mt-10">
                {/* Mobile Timeline Line */}
                <div className="absolute bottom-0 left-3 top-0 w-px lg:hidden bg-gradient-to-b from-blue-400/80 via-cyan-400/70 to-blue-500/80" />
                <motion.div
                  animate={{ y: ['0%', '100%'] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-[11px] top-0 h-16 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-blue-300 to-transparent lg:hidden"
                />

                {/* Wavy SVG Line */}
                <svg className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden lg:block" viewBox="0 0 2 1200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={darkMode ? '#60a5fa' : '#3b82f6'} stopOpacity="0.8" />
                      <stop offset="50%" stopColor={darkMode ? '#22d3ee' : '#06b6d4'} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={darkMode ? '#3b82f6' : '#0ea5e9'} stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 1 0 Q 1.5 150 1 300 T 1 600 T 1 900 T 1 1200"
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeWidth="3"
                    vectorEffect="non-scaling-stroke"
                  />
                  <motion.path
                    d="M 1 0 Q 1.5 150 1 300 T 1 600 T 1 900 T 1 1200"
                    fill="none"
                    stroke={darkMode ? '#93c5fd' : '#60a5fa'}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="12 80"
                    animate={{ strokeDashoffset: [0, -240] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div className="space-y-10 lg:space-y-12">
                  {professionalJourney.map((experience, index) => {
                    const IconComponent = experience.icon;
                    const isLeft = index % 2 === 0;
                    
                    const colors = experience.accent === 'blue' 
                      ? { dot: 'bg-blue-500', ring: 'ring-blue-400/30', text: darkMode ? 'text-blue-300' : 'text-blue-600' }
                      : { dot: 'bg-cyan-500', ring: 'ring-cyan-400/30', text: darkMode ? 'text-cyan-300' : 'text-cyan-600' };

                    return (
                      <motion.div
                        key={experience.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ delay: index * 0.15, duration: 0.6 }}
                        className="relative"
                      >
                        {/* Timeline Dot */}
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false, amount: 0.25 }}
                          transition={{ delay: 0.1 + index * 0.15, type: 'spring', stiffness: 300 }}
                          animate={{ scale: [1, 1.18, 1] }}
                          className={`absolute left-3 top-6 h-4 w-4 -translate-x-1/2 translate-y-0 rounded-full ${colors.dot} ring-4 ${colors.ring} lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2`}
                        />

                        {/* Content Box */}
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 items-center pl-8 lg:pl-0 ${isLeft ? 'lg:grid-flow-col-dense' : ''}`}>
                          {/* Text Content */}
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ delay: 0.12 + index * 0.15, duration: 0.6 }}
                            className={`lg:col-span-1 order-1 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}
                          >
                            <div className={`rounded-2xl p-4 lg:p-5 backdrop-blur-sm ${
                              darkMode
                                ? 'bg-gray-900/60 border border-gray-800'
                                : 'bg-white/70 border border-gray-200/50'
                            }`}>
                              {/* Icon Badge */}
                              <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ delay: 0.14 + index * 0.15, type: 'spring', stiffness: 260 }}
                                className={`inline-flex rounded-xl ${
                                  experience.accent === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'
                                } p-2.5 text-white shadow-lg mb-3`}
                              >
                                <IconComponent className="h-5 w-5" />
                              </motion.div>

                              {/* Title & Company */}
                              <motion.h3
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ delay: 0.16 + index * 0.15, duration: 0.4 }}
                                className={`text-xl lg:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
                              >
                                {experience.title}
                              </motion.h3>
                              
                              <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ delay: 0.18 + index * 0.15, duration: 0.4 }}
                                className={`mt-1.5 text-sm lg:text-base font-semibold ${colors.text}`}
                              >
                                {experience.company}
                              </motion.p>

                              {/* Year & Duration */}
                              <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                                className="mt-3 flex flex-col gap-1.5"
                              >
                                <div className="flex items-center gap-2">
                                  <Calendar className={`h-4 w-4 ${colors.text}`} />
                                  <span className={`text-xs font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {experience.year}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className={`h-4 w-4 ${colors.text}`} />
                                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {experience.location}
                                  </span>
                                </div>
                              </motion.div>

                              {/* Description */}
                              <motion.p
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ delay: 0.22 + index * 0.15, duration: 0.4 }}
                                className={`mt-3.5 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                              >
                                {experience.description}
                              </motion.p>

                              {/* Skills */}
                              <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ delay: 0.24 + index * 0.15, duration: 0.4 }}
                                className="mt-4 flex flex-wrap gap-1.5"
                              >
                                {experience.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                                      darkMode
                                        ? 'bg-gray-800 text-blue-300 border border-gray-700'
                                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                                    }`}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Image/Visual */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ delay: 0.18 + index * 0.15, duration: 0.6 }}
                            className={`lg:col-span-1 order-2 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
                          >
                            <div className="relative h-40 overflow-hidden rounded-2xl shadow-xl lg:h-48">
                              <img
                                src={experience.image}
                                alt=""
                                className="h-full w-full object-cover"
                              />
                              <div className={`absolute inset-0 ${
                                experience.accent === 'blue'
                                  ? 'bg-gradient-to-tr from-blue-900/45 via-blue-500/15 to-cyan-400/10'
                                  : 'bg-gradient-to-tr from-cyan-900/40 via-cyan-500/15 to-blue-400/10'
                              }`} />
                              <motion.div
                                animate={{ x: ['-8%', '108%'] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: 'linear', delay: index * 0.3 }}
                                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              />
                              <div className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                                Live Journey
                              </div>
                              
                              {/* Duration Badge */}
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.25 }}
                                transition={{ delay: 0.26 + index * 0.15 }}
                                className={`absolute bottom-3 right-3 rounded-lg px-2.5 py-1.5 font-semibold text-xs backdrop-blur-sm ${
                                  darkMode
                                    ? 'bg-gray-900/80 text-blue-300 border border-gray-700'
                                    : 'bg-white/80 text-blue-700 border border-blue-200'
                                }`}
                              >
                                {experience.duration}
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl lg:text-4xl font-bold mb-12 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>Projects</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    liveUrl={project.liveUrl}
                    codeUrl={project.codeUrl}
                    delay={index * 0.1}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="px-6 py-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="mb-9 text-center">
                <p className={`text-xs font-semibold tracking-[0.18em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  GET IN TOUCH
                </p>
                <h2 className={`mt-2 text-3xl lg:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Let&apos;s Work Together
                </h2>
                <p className={`mx-auto mt-3 max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  For academic collaborations, research guidance, and sustainable technology advisory, feel free to reach out.
                </p>
              </div>

              <div className={`relative overflow-hidden rounded-3xl border p-5 lg:p-7 shadow-xl ${
                darkMode ? 'border-gray-800 bg-gray-900/90' : 'border-blue-100 bg-white'
              }`}>
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative grid gap-5 lg:grid-cols-12">
                  <div className="lg:col-span-7 space-y-3">
                    {[
                      { icon: Mail, label: 'Email', value: 'g.satyapratap@gmail.com', href: 'mailto:g.satyapratap@gmail.com' },
                      { icon: Phone, label: 'Phone', value: '+91 9640959425', href: 'tel:+919640959425' },
                      { icon: MapPin, label: 'Location', value: 'Ganapavaram, Andhra Pradesh, India', href: 'https://www.linkedin.com/in/satya-pratap-gsp' },
                    ].map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.href}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ delay: index * 0.08, duration: 0.45 }}
                        whileHover={{ x: 3, scale: 1.01 }}
                        className={`flex items-center gap-4 rounded-2xl border p-4 transition-all ${
                          darkMode
                            ? 'border-gray-800 bg-gray-900 hover:border-blue-500/50'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/30'
                        }`}
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-md">
                          <contact.icon className="h-5 w-5 text-white" />
                        </span>
                        <span>
                          <p className={`text-xs uppercase tracking-wide ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{contact.label}</p>
                          <p className={`text-lg font-semibold leading-tight ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{contact.value}</p>
                        </span>
                      </motion.a>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.5 }}
                    className={`lg:col-span-5 rounded-2xl border p-5 lg:p-6 ${
                      darkMode
                        ? 'border-blue-900/60 bg-gradient-to-br from-blue-950/40 to-cyan-950/30'
                        : 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50'
                    }`}
                  >
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-200' : 'text-blue-900'}`}>
                      Quick Connect
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Fastest response via email and phone. Open for speaking invitations, academic partnerships, and advisory projects.
                    </p>

                    <div className="mt-5 grid gap-2">
                      <a
                        href="mailto:g.satyapratap@gmail.com"
                        className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:shadow-lg"
                      >
                        Send Email
                      </a>
                      <a
                        href="tel:+919640959425"
                        className={`rounded-xl border px-4 py-3 text-center text-sm font-semibold ${
                          darkMode
                            ? 'border-blue-800 text-blue-200 hover:bg-blue-900/30'
                            : 'border-blue-300 text-blue-700 hover:bg-blue-100/60'
                        }`}
                      >
                        Call Now
                      </a>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {['Academic Collaboration', 'Research Guidance', 'Technology Advisory'].map((item) => (
                        <span
                          key={item}
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                            darkMode
                              ? 'bg-gray-900 text-blue-300 border border-gray-700'
                              : 'bg-white text-blue-700 border border-blue-200'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Mobile Floating Navigation */}
      <FloatingNav 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

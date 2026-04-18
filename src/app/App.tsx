import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Brain, Database, Palette, Smartphone, TrendingUp, FileText, GraduationCap, Medal, Users, Award, Star, Trophy, Sparkles, Zap, Briefcase, Building2, Calendar, Moon, Sun } from 'lucide-react';
import { FloatingNav } from './components/FloatingNav';
import { ProjectCard } from './components/ProjectCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
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

  useEffect(() => {
    setProjects(getDefaultProjects());
  }, []);

  const getDefaultProjects = () => [
    {
      id: '1',
      title: 'AI Data-Driven Predictive Analytics Platform for Sustainable IoT',
      description: 'Developed an advanced intelligent system that integrates AI and IoT to optimize energy consumption in smart environments.',
      contributions: [
        'Designed system architecture using ESP32 edge devices and cloud integration.',
        'Implemented AI-based predictive models for energy consumption forecasting.',
        'Applied optimization techniques for efficient energy scheduling.',
        'Built a scalable solution for sustainable IoT ecosystems.',
      ],
      technologies: ['AI / Machine Learning', 'IoT Architecture', 'ESP32', 'Data Analytics'],
      impact: [
        'Improved energy efficiency in IoT-based systems.',
        'Demonstrated real-world AI use in sustainable energy management.',
      ],
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTM5Nzc3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '2',
      title: 'Solar Fundamentals Training Module',
      description: 'Designed and delivered a structured training program focused on solar energy systems and PV technologies.',
      contributions: [
        'Developed a comprehensive lecture series on Solar Fundamentals.',
        'Covered Sun Path Analysis and PV system design topics.',
        'Trained engineering students in renewable energy concepts.',
      ],
      technologies: ['Solar Energy', 'PV Systems', 'Sun Path Analysis'],
      impact: [
        'Enhanced student knowledge in renewable energy technologies.',
        'Promoted awareness of sustainable energy solutions.',
      ],
      image: 'https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBzY3JlZW58ZW58MXx8fHwxNzc1MzgyNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '3',
      title: 'Smart City Energy Optimization Initiative (IIIT Hyderabad Collaboration)',
      description: 'Contributed to Smart City infrastructure projects focused on energy-efficient urban solutions.',
      contributions: [
        'Managed and contributed to Smart City Lab operations.',
        'Integrated IoT and AI technologies for urban infrastructure.',
        'Focused on energy optimization and smart system development.',
      ],
      technologies: ['IoT', 'AI', 'Smart City Systems'],
      impact: [
        'Supported development of energy-efficient urban systems.',
        'Strengthened collaboration between academia and research institutions.',
      ],
      image: 'https://images.unsplash.com/photo-1540397106260-e24a507a08ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NzUyOTE2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '4',
      title: 'Entrepreneurship Development Programme (EDP)',
      description: 'Organized a structured program to promote innovation and startup culture among students.',
      contributions: [
        'Planned and executed Entrepreneurship Development workshops.',
        'Collaborated with organizations such as NIESBUD.',
        'Encouraged students to develop startup ideas and innovation skills.',
      ],
      technologies: ['Entrepreneurship', 'Innovation', 'Startup Ecosystem'],
      impact: [
        'Boosted entrepreneurial mindset among students.',
        'Strengthened industry-academia interaction.',
      ],
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzUzNDY2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '5',
      title: 'Faculty Grievance Monitoring System',
      description: 'Developed and implemented a structured system to monitor and resolve faculty issues effectively.',
      contributions: [
        'Designed a transparent grievance handling mechanism.',
        'Improved communication between faculty and administration.',
        'Ensured timely resolution of issues.',
      ],
      technologies: ['HR Management', 'Monitoring Systems'],
      impact: [
        'Improved faculty satisfaction and organizational harmony.',
        'Strengthened institutional management practices.',
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '6',
      title: 'Campus Infrastructure Development Projects',
      description: 'Led multiple infrastructure development initiatives to enhance institutional facilities.',
      contributions: [
        'Planned and supervised campus development projects.',
        'Coordinated with vendors and engineering teams.',
        'Ensured timely execution and quality improvements.',
      ],
      technologies: ['Infrastructure Planning', 'Project Coordination'],
      impact: [
        'Modernized campus infrastructure.',
        'Improved overall learning environment and facilities.',
      ],
      image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxJb1QlMjBzbWFydCUyMGNpdHl8ZW58MXx8fHwxNzc1MzQ2NjUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      liveUrl: '#',
      codeUrl: '#',
    },
    {
      id: '7',
      title: 'Examination Management System (Operational Role)',
      description: 'Managed large-scale academic examination processes efficiently.',
      contributions: [
        'Coordinated exam scheduling, execution, and evaluation.',
        'Ensured data accuracy and academic integrity.',
        'Maintained compliance with university guidelines.',
      ],
      technologies: ['Academic Evaluation', 'Compliance'],
      impact: [
        'Streamlined examination workflows.',
        'Ensured fair and transparent evaluation system.',
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc1MzQ2Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      year: 'Ph.D.',
      title: 'Doctor of Philosophy (Ph.D.) in Engineering',
      institute: 'Malaysia',
      detail: 'Specialized in advanced engineering research with strong expertise in research methodology, innovation, and technical problem-solving; contributed to academic publications.',
      grade: 'Completed',
      accent: 'blue',
    },
    {
      year: 'M.Tech',
      title: 'M.Tech – Artificial Intelligence & Data Science',
      institute: 'India',
      detail: 'Focused on AI, Machine Learning, Data Science, and predictive analytics with applied engineering use cases.',
      grade: 'Completed',
      accent: 'cyan',
    },
    {
      year: 'M.Tech',
      title: 'M.Tech – Power Electronics',
      institute: 'India',
      detail: 'Specialized in power electronics, energy systems, circuit design, and power management for sustainable energy applications.',
      grade: 'Completed',
      accent: 'amber',
    },
    {
      year: 'MBA',
      title: 'MBA – Human Resource Management (HRM)',
      institute: 'India',
      detail: 'Developed leadership, organizational behavior, conflict resolution, and strategic planning for institutional governance.',
      grade: 'Completed',
      accent: 'emerald',
    },
    {
      year: 'MISTE',
      title: 'Professional Membership – ISTE (MISTE)',
      institute: 'Member of Indian Society for Technical Education',
      detail: 'Professional membership supporting academic leadership and quality standards.',
      grade: 'Active',
      accent: 'orange',
    },
  ] as const;

  const journeyStats = [
    { icon: GraduationCap, value: 'Ph.D.', label: 'Engineering (Malaysia)' },
    { icon: Brain, value: 'M.Tech', label: 'AI & Data Science' },
    { icon: Award, value: 'M.Tech', label: 'Power Electronics' },
    { icon: Medal, value: 'MBA', label: 'HRM' },
  ] as const;

  const achievementGroups = [
    {
      title: 'Academic & Professional Achievements',
      items: [
        'Successfully earned a Ph.D. in Engineering from Malaysia, demonstrating advanced research capability and international academic exposure.',
        'Completed dual M.Tech specializations in Power Electronics and Artificial Intelligence & Data Science, showcasing strong multi-domain technical expertise.',
        'Acquired an MBA in Human Resource Management (HRM), enabling effective leadership, team management, and institutional governance.',
        'Serving as an Associate Professor, contributing to high-quality teaching, mentoring, and curriculum development in engineering education.',
      ],
    },
    {
      title: 'Institutional Leadership Achievements',
      items: [
        'Acted as Diploma In-charge Principal, managing academic and administrative operations effectively.',
        'Successfully handled Chief Hostel Administration (Boys & Girls) for 5 years, ensuring student welfare, discipline, and smooth operations.',
        'Led Campus Infrastructure Development for 3 years, contributing to the growth and modernization of institutional facilities.',
        'Managed Examination Section (B.Tech, M.Tech, Diploma) for 3 years, ensuring transparency, accuracy, and academic integrity.',
      ],
    },
    {
      title: 'Administrative & Governance Achievements',
      items: [
        "Played a key role in Principal's Office administration, contributing to strategic planning and institutional decision-making.",
        'Implemented and managed Faculty Grievance Monitoring Systems for around 4 years, improving faculty satisfaction and organizational harmony.',
        'Strengthened industrial collaborations and partnerships, enhancing opportunities for students and faculty.',
        'Contributed to policy implementation and compliance with academic standards such as NAAC/NBA.',
      ],
    },
    {
      title: 'Financial & Operational Achievements',
      items: [
        'Gained 2 years of experience in Financial Audit Management, ensuring transparency and proper financial governance.',
        'Contributed to budget planning and institutional financial discipline, supporting smooth administrative functioning.',
      ],
    },
    {
      title: 'Research & Technical Achievements',
      items: [
        'Worked as a Solar Research Training Officer, promoting renewable energy education and research.',
        'Designed and delivered a Solar Fundamentals Lecture Series, enhancing technical knowledge among students.',
        'Developed AI-driven Predictive Analytics solutions for Sustainable IoT systems, improving energy efficiency.',
        'Contributed to Smart City and energy-efficient technology initiatives, integrating IoT and AI concepts.',
      ],
    },
    {
      title: 'Industry & Collaboration Achievements',
      items: [
        'Facilitated Memorandums of Understanding (MoUs) with industry partners to enhance training, research, and placement opportunities.',
        'Organized and contributed to Entrepreneurship Development Programs (EDP), encouraging innovation and startup culture.',
        'Promoted industry-academia interaction, bridging the gap between theoretical learning and real-world applications.',
      ],
    },
    {
      title: 'Leadership & NCC Achievements',
      items: [
        'Serving as Sub Lieutenant (ANO) in NCC Naval Wing, demonstrating exceptional leadership and discipline.',
        'Successfully trained and mentored cadets in leadership, discipline, and national service.',
        'Contributed to organizational discipline and structured leadership development within the institution.',
      ],
    },
    {
      title: 'Key Impact Achievements',
      items: [
        'Built a strong profile combining Engineering + AI + Management + Military Leadership.',
        'Proven ability to handle multi-level institutional responsibilities.',
        'Established a balance between academic excellence and administrative efficiency.',
        'Played a crucial role in institutional growth, discipline, and innovation.',
      ],
    },
  ] as const;

  const professionalJourney = [
    {
      year: 'Present',
      title: 'Associate Professor & Administrative Lead (Principal’s Office)',
      company: 'KIET Group of Institutions, Korangi - Kakinada',
      location: 'Kakinada, India',
      duration: 'Present',
      description: 'Serving in the Principal’s Office with institutional governance, academic planning, strategic decision-making, and accreditation readiness (NAAC/NBA).',
      skills: ['Governance', 'Academic Planning', 'Strategic Leadership'],
      accent: 'blue',
      icon: Building2,
    },
    {
      year: 'Present',
      title: 'Sub Lieutenant (ANO) – NCC Naval Wing',
      company: 'KIET Group of Institutions',
      location: 'Korangi, India',
      duration: 'Present',
      description: 'Leading the NCC Naval Wing, conducting cadet training, discipline development, and national service activities.',
      skills: ['Command', 'Discipline', 'Leadership'],
      accent: 'cyan',
      icon: Award,
    },
    {
      year: 'Leadership',
      title: 'Diploma In-charge Principal',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: 'Tenure',
      description: 'Managed academic and administrative operations of the diploma wing, ensuring curriculum execution and academic standards.',
      skills: ['Academic Operations', 'Faculty Coordination', 'Student Success'],
      accent: 'blue',
      icon: Briefcase,
    },
    {
      year: 'Operations',
      title: 'Chief Hostel In-charge (Boys & Girls)',
      company: 'KIET Campus Hostels',
      location: 'KIET Campus',
      duration: '5 Years',
      description: 'Managed end-to-end hostel operations, student welfare, safety, and disciplined residential environment.',
      skills: ['Residential Ops', 'Student Welfare', 'Crisis Management'],
      accent: 'cyan',
      icon: Users,
    },
    {
      year: 'Infrastructure',
      title: 'Campus Infrastructure Development Lead',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: '3 Years',
      description: 'Led campus infrastructure projects, modernization, and facility expansion initiatives.',
      skills: ['Infrastructure', 'Project Coordination', 'Modernization'],
      accent: 'blue',
      icon: Building2,
    },
    {
      year: 'Academic Control',
      title: 'Examination Section In-charge (B.Tech, M.Tech, Diploma)',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: '3 Years',
      description: 'Managed examination scheduling, evaluation, and academic integrity processes.',
      skills: ['Exam Planning', 'Compliance', 'Academic Integrity'],
      accent: 'cyan',
      icon: Calendar,
    },
    {
      year: 'Finance',
      title: 'Financial Audit & Management Role',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: '2 Years',
      description: 'Handled financial audits, documentation, and budget planning for institutional compliance.',
      skills: ['Audit', 'Budgeting', 'Compliance'],
      accent: 'blue',
      icon: FileText,
    },
    {
      year: 'Industry',
      title: 'Faculty Grievance & Industrial Collaboration Coordinator',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: '~4 Years',
      description: 'Managed grievance monitoring systems and strengthened industry partnerships for academic growth.',
      skills: ['Grievance Redressal', 'Industry Liaison', 'Faculty Relations'],
      accent: 'cyan',
      icon: Users,
    },
    {
      year: 'Research',
      title: 'Solar Research Training Officer',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: 'Ongoing',
      description: 'Led solar training modules, sun path analysis initiatives, and PV system optimization awareness.',
      skills: ['Solar Training', 'Sun Path Analysis', 'PV Systems'],
      accent: 'blue',
      icon: Award,
    },
    {
      year: 'Research',
      title: 'AI & IoT Research Contributor',
      company: 'KIET Group of Institutions',
      location: 'Kakinada, India',
      duration: 'Ongoing',
      description: 'Developed AI-driven predictive analytics for sustainable IoT systems using ESP32 edge devices.',
      skills: ['AI Models', 'IoT', 'ESP32'],
      accent: 'cyan',
      icon: Brain,
    },
    {
      year: 'International Research',
      title: 'Ph.D. Researcher – Malaysia',
      company: 'International Research',
      location: 'Malaysia',
      duration: 'Ph.D. Period',
      description: 'Conducted advanced research in engineering domains with academic publications and international exposure.',
      skills: ['Research', 'Publications', 'International Exposure'],
      accent: 'blue',
      icon: GraduationCap,
    },
  ] as const;

  const technicalSkills = [
    { icon: Award, name: 'Solar Energy Systems & Sun Path Analysis', level: 92, bar: 'from-emerald-500 to-teal-500' },
    { icon: Database, name: 'Photovoltaic (PV) System Design', level: 90, bar: 'from-cyan-500 to-blue-500' },
    { icon: Brain, name: 'AI & Machine Learning Applications', level: 90, bar: 'from-violet-500 to-fuchsia-500' },
    { icon: TrendingUp, name: 'Sustainable IoT Architecture', level: 88, bar: 'from-blue-500 to-indigo-500' },
    { icon: Code2, name: 'ESP32 Edge Device Computing', level: 86, bar: 'from-green-500 to-emerald-500' },
    { icon: Palette, name: 'Smart City & Energy Systems', level: 85, bar: 'from-amber-500 to-orange-500' },
    { icon: FileText, name: 'Predictive Data Analytics', level: 87, bar: 'from-rose-500 to-orange-500' },
  ] as const;

  const skillGroups = [
    {
      title: 'Technical Skills',
      items: [
        'Solar Energy Systems & Solar Sun Path Analysis',
        'Photovoltaic (PV) System Design & Optimization',
        'Sustainable IoT Architecture',
        'AI & Machine Learning Applications',
        'Predictive Data Analytics',
        'ESP32 Edge Device Computing',
        'Power Electronics Engineering',
        'Smart City Technologies & Energy Systems',
        'Data Science & AI-driven Modeling',
      ],
    },
    {
      title: 'Software & Tools',
      items: [
        'MATLAB / Simulink',
        'Solar Simulation Tools',
        'Data Analytics Platforms',
        'IoT Development Tools',
        'AI/ML Frameworks (General Applications)',
      ],
    },
    {
      title: 'Academic Competencies',
      items: [
        'Curriculum Development (AI, IoT, Engineering Subjects)',
        'Research Methodology & Academic Writing',
        'Teaching & Mentoring Engineering Students',
        'Solar Training Program Development',
        'Examination Planning & Academic Evaluation',
        'Faculty Development Programs (FDP)',
      ],
    },
    {
      title: 'Leadership & Administrative Skills',
      items: [
        'Institutional Governance & Strategic Planning',
        'Diploma In-charge Principal Responsibilities',
        'Examination Section Management (B.Tech, M.Tech, Diploma)',
        'Campus Infrastructure Development',
        'Hostel Administration (Boys & Girls – 5 Years)',
        'Policy Implementation & Academic Compliance (NAAC/NBA)',
        'Program Coordination & Academic Leadership',
      ],
    },
    {
      title: 'Management & HR Competencies',
      items: [
        'Human Resource Management (HRM)',
        'Faculty Grievance Monitoring Systems',
        'Performance Evaluation & KPI Frameworks',
        'Conflict Resolution & Team Management',
        'Organizational Behavior & Leadership Development',
      ],
    },
    {
      title: 'Financial & Operational Skills',
      items: [
        'Financial Audit Management',
        'Budget Planning & Resource Allocation',
        'Institutional Financial Compliance',
        'Operational Oversight & Administration',
      ],
    },
    {
      title: 'Industry & Collaboration Skills',
      items: [
        'Industrial Interaction & Partnerships',
        'Memorandums of Understanding (MoUs)',
        'Corporate Training & Workshops',
        'Entrepreneurship Development Programs (EDP)',
        'Industry-Academia Collaboration',
      ],
    },
    {
      title: 'Military & Discipline Leadership',
      items: [
        'Sub Lieutenant – NCC Naval Wing (ANO)',
        'Cadet Training & Leadership Development',
        'Discipline Management & Organizational Control',
        'National Service & Maritime Awareness',
      ],
    },
    {
      title: 'Core Strengths (Highlight Section)',
      items: [
        'Multi-disciplinary Expertise (Engineering + AI + HRM)',
        'Strong Administrative & Leadership Capabilities',
        'Research-Oriented Thinking',
        'Institutional Development & Growth Strategy',
        'Ability to Bridge Academia & Industry',
        'High Discipline & Decision-Making Ability',
      ],
    },
  ] as const;

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
          <section id="home" className="min-h-screen flex items-start justify-center px-6 pt-6 pb-28 lg:pt-10 lg:pb-24">
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
                className={`hero-title text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Dr. G Satya Pratap
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`hero-text mx-auto text-balance text-[13px] lg:text-sm mb-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <span className="block">
                  Associate Professor | Solar Research Training Officer | Sub Lieutenant (ANO) NCC Naval
                </span>
                <span className="block">
                  Ph.D. (Malaysia) | M.Tech (Power Electronics) | M.Tech (AI & DS) | MBA (HRM) | MISTE
                </span>
                <span className="block">
                  Strategic Academic Leader | Institutional Administrator | Researcher
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className={`hero-description mx-auto text-balance text-[13px] lg:text-sm font-semibold mb-4 ${
                  darkMode ? 'text-blue-200' : 'text-blue-900'
                }`}
              >
                Bridging Engineering, Management, and Disciplined Leadership for Institutional Excellence
              </motion.p>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center justify-center gap-4"
              >
                {[
                  { icon: Phone, href: 'tel:+919640959425' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/satya-pratap-gsp' },
                  { icon: Mail, href: 'mailto:gsp@kietgroup.com' },
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
                    { value: 'Ph.D.', label: 'Malaysia' },
                    { value: '10+ Years', label: 'Leadership' },
                    { value: 'Sub Lt.', label: 'NCC Naval' },
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
                <div className="order-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-2 lg:col-span-4">
                  {[
                    { value: '5 Years', label: 'HOSTEL ADMIN' },
                    { value: '3 Years', label: 'INFRASTRUCTURE' },
                    { value: '3 Years', label: 'EXAM CELL' },
                    { value: '2 Years', label: 'AUDIT MGMT' },
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
                  className={`order-1 rounded-[2.75rem] p-8 shadow-lg lg:order-1 lg:col-span-8 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'}`}
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
                    Dr. G Satya Pratap is a distinguished academician and institutional administrator with a Ph.D. in
                    Engineering from Malaysia, dual M.Tech specializations (Power Electronics, AI & Data Science), and an MBA
                    in Human Resource Management. He leads governance, academic planning, and administrative strategy at
                    KIET Group of Institutions, Korangi - Kakinada.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16, duration: 0.45 }}
                    className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-slate-700'}`}
                  >
                    His leadership spans diploma administration, hostel management, infrastructure development, examinations,
                    audit governance, and faculty grievance monitoring with industry collaborations. As Sub Lieutenant (ANO) in
                    the NCC Naval Wing, he mentors students in discipline and leadership while advancing solar energy and
                    sustainable IoT initiatives.
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Academic Journey Section */}
          <section id="education" ref={educationRef} className="relative px-6 py-16 max-w-6xl mx-auto">
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
                  Connect for Institutional Collaborations
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
                  SKILLS / COMPETENCIES
                </p>
                <h2 className={`mt-2 text-4xl lg:text-6xl font-semibold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                  Skills & Competencies
                </h2>
                <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                  <span className={`h-px w-14 ${darkMode ? 'bg-blue-400/60' : 'bg-blue-300'}`} />
                  <span className="h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600" />
                  <span className={`h-px w-14 ${darkMode ? 'bg-blue-400/60' : 'bg-blue-300'}`} />
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {skillGroups.map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    transition={{ delay: index * 0.06, duration: 0.45 }}
                    className={`rounded-3xl border p-6 shadow-sm ${
                      darkMode ? 'border-gray-800 bg-gray-900/80' : 'border-slate-200 bg-white'
                    }`}
                  >
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {group.title}
                    </h3>
                    <ul className={`mt-4 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className={`mt-1 h-2 w-2 rounded-full ${darkMode ? 'bg-blue-300' : 'bg-blue-600'}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
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
                  ACHIEVEMENTS
                </p>
                <h2 className={`mt-2 text-4xl lg:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Achievements
                </h2>
                <p className={`max-w-2xl mx-auto mt-3 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Academic, administrative, and leadership milestones at director level.
                </p>
              </div>

              <div className={`mx-auto max-w-4xl rounded-3xl border p-4 shadow-sm ${
                darkMode ? 'border-gray-800 bg-gray-900/80' : 'border-slate-200 bg-white'
              }`}>
                <Accordion type="single" collapsible>
                  {achievementGroups.map((group, index) => (
                    <AccordionItem
                      key={group.title}
                      value={`achievement-${index}`}
                      className={darkMode ? 'border-gray-800' : 'border-slate-200'}
                    >
                      <AccordionTrigger
                        className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}
                      >
                        {group.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className={`space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className={`mt-1 h-2 w-2 rounded-full ${darkMode ? 'bg-blue-300' : 'bg-blue-600'}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
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
                ADMINISTRATIVE LEADERSHIP
              </p>
              <h2 className={`mt-2 text-3xl lg:text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Leadership Journey
              </h2>
              <p className={`max-w-2xl mx-auto mt-3 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Director-level leadership across governance, operations, and disciplined institutional growth.
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

                          <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.25 }}
                            transition={{ delay: 0.18 + index * 0.15, duration: 0.6 }}
                            className={`lg:col-span-1 order-2 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}
                          >
                            <div className={`relative rounded-2xl border p-5 shadow-sm ${
                              darkMode
                                ? 'border-gray-800 bg-gray-900/70'
                                : 'border-blue-100 bg-white'
                            }`}>
                              <div className="flex items-center justify-between">
                                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                                  darkMode
                                    ? 'bg-gray-800 text-blue-300'
                                    : 'bg-blue-50 text-blue-700'
                                }`}>
                                  Experience Focus
                                </span>
                                <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                                  darkMode
                                    ? 'bg-gray-800 text-gray-200'
                                    : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {experience.duration}
                                </span>
                              </div>
                              <ul className={`mt-4 space-y-2 text-sm ${darkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                                {experience.skills.map((skill) => (
                                  <li key={skill} className="flex items-start gap-2">
                                    <span className={`mt-1 h-2 w-2 rounded-full ${
                                      darkMode ? 'bg-blue-300' : 'bg-blue-600'
                                    }`} />
                                    <span>{skill}</span>
                                  </li>
                                ))}
                              </ul>
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
          <section id="projects" className="px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`mx-auto max-w-6xl rounded-[2.5rem] border px-6 py-10 shadow-2xl ${
                darkMode ? 'border-gray-800 bg-gray-950/70' : 'border-slate-200 bg-white'
              }`}>
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className={`text-xs font-semibold tracking-[0.2em] ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                      TOP PROJECTS
                    </p>
                    <h2 className={`mt-3 text-3xl lg:text-5xl font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Projects
                    </h2>
                    <p className={`mt-3 max-w-2xl text-sm lg:text-base ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                      Signature initiatives aligned with governance, operations, and research-driven institutional impact.
                    </p>
                  </div>
                  <div className={`rounded-2xl border px-4 py-3 text-xs font-semibold ${
                    darkMode ? 'border-gray-800 bg-gray-900 text-gray-300' : 'border-slate-200 bg-slate-50 text-slate-600'
                  }`}>
                    Executive-ready portfolio for board-level review
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      className={index === 0 ? 'md:col-span-2' : undefined}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        contributions={project.contributions}
                        technologies={project.technologies}
                        impact={project.impact}
                        liveUrl={project.liveUrl}
                        codeUrl={project.codeUrl}
                        projectIndex={index + 1}
                        delay={index * 0.08}
                        darkMode={darkMode}
                      />
                    </div>
                  ))}
                </div>
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
                      { icon: Mail, label: 'Email', value: 'gsp@kietgroup.com', href: 'mailto:gsp@kietgroup.com' },
                      { icon: Phone, label: 'Phone', value: '+91 9640959425', href: 'tel:+919640959425' },
                      { icon: MapPin, label: 'Location', value: 'Korangi - Kakinada, Andhra Pradesh, India', href: 'https://www.linkedin.com/in/satya-pratap-gsp' },
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
                      Open for director-level academic leadership, institutional collaborations, and strategic partnerships.
                    </p>

                    <div className="mt-5 grid gap-2">
                      <a
                        href="mailto:gsp@kietgroup.com"
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
                      {['Institutional Governance', 'Industry Collaborations', 'Strategic Leadership'].map((item) => (
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

      <motion.button
        onClick={toggleDarkMode}
        whileTap={{ scale: 0.92 }}
        className={`fixed right-5 top-5 z-50 rounded-full border p-3 shadow-lg backdrop-blur-md transition-all ${
          darkMode
            ? 'border-gray-700 bg-gray-900/80 text-gray-200 hover:text-blue-300'
            : 'border-white/60 bg-white/80 text-gray-700 hover:text-blue-600'
        }`}
      >
        {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </motion.button>

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

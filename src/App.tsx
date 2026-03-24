/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  Award, 
  Briefcase, 
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone
} from "lucide-react";
import React, { useEffect, useState } from "react";

const PROJECTS = [
  {
    title: "Credit Card Fraud Detection",
    date: "Oct 2022",
    description: "Developed an end-to-end machine learning system to detect and classify fraudulent credit card transactions.",
    tech: ["Python", "Scikit-Learn", "FastAPI", "Streamlit", "SHAP"],
    link: "https://github.com/Vardhan1160/CreditCard_fraud_detection",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Word Suggestor",
    date: "Jul 2025",
    description: "A Trie-based word suggestion system enabling fast prefix search and auto keyword prediction.",
    tech: ["C++", "Trie", "CGI", "JavaScript", "XAMPP"],
    link: "https://github.com/Vardhan1160/word_suggestor_main",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Excel Data Analysis",
    date: "Dec 2024",
    description: "Comprehensive data analysis and visualization project using advanced Excel features, pivot tables, and interactive dashboards.",
    tech: ["Excel", "Data Visualization", "Pivot Tables", "VLOOKUP", "Dashboards"],
    link: "https://github.com/Vardhan1160/Excel_project",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  }
];

const SKILLS = {
  languages: [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
  ],
  tech: [
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "Scikit Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
  ],
  domain: [
    { name: "Data Structures", icon: null },
    { name: "Algorithms", icon: null },
    { name: "DBMS", icon: null },
    { name: "OS", icon: null },
    { name: "Networking", icon: null },
    { name: "OOPS", icon: null }
  ]
};

const EDUCATION = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Aug 2023 - Present",
    score: "CGPA: 7.02",
    location: "Phagwara, Punjab"
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "12th Standard",
    period: "May 2021 - May 2023",
    score: "Percentage: 82.6",
    location: "Amalapuram, Andhra Pradesh"
  },
  {
    school: "Sri Chaitanya School",
    degree: "10th Standard",
    period: "Mar 2020 - Mar 2021",
    score: "CGPA: 99",
    location: "Amalapuram, Andhra Pradesh"
  }
];

const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure Certified Data Science",
    date: "Sep 2025",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/1DTQ7602La_-bJlegiwStL9c4N-VvNYA5/view"
  },
  {
    title: "Cloud Computing NPTEL",
    date: "Aug 2025",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/19RhrjHqn4OhR_TDgvozKLu5tV6-2o4tI/view?usp=drive_link"
  },
  {
    title: "SQL Advanced",
    date: "Feb 2026",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/16fd0cec7863"
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [sliderConstraints, setSliderConstraints] = useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderConstraints(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, []);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display font-bold text-xl tracking-tighter"
          >
            VARDHAN.
          </motion.span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
            {['About', 'Projects', 'Skills', 'Education'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <motion.a
            href="mailto:vardhanguthula99@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-colors"
          >
            Hire Me
          </motion.a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                Available for opportunities
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[0.9]">
                Guthula Venkata Sahitya <br />
                <span className="text-zinc-400">Vardhan.</span>
              </h1>
              <p className="text-xl text-zinc-600 mb-10 max-w-md leading-relaxed">
                Computer Science student at LPU. Passionate about Machine Learning, C++, and building efficient software solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <MapPin size={16} />
                  <span>Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Phone size={16} />
                  <span>+91 8885604839</span>
                </div>
              </div>

              <div className="flex gap-6">
                <SocialLink href="https://github.com/Vardhan1160" icon={<Github size={20} />} />
                <SocialLink href="https://www.linkedin.com/in/vardhan-guthula" icon={<Linkedin size={20} />} />
                <SocialLink href="mailto:vardhanguthula99@gmail.com" icon={<Mail size={20} />} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200 group"
            >
              <img 
                src="https://picsum.photos/seed/vardhan/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 relative">
          <div className="flex justify-between items-end mb-12">
            <SectionHeader title="Projects" subtitle="A collection of my recent work" noMargin />
            <div className="hidden md:flex gap-4 mb-4">
              <button 
                onClick={() => scrollSlider('left')}
                className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="p-3 rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="relative group">
            <div 
              ref={sliderRef}
              className="overflow-x-auto no-scrollbar px-4 -mx-4 pb-8"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex gap-8 w-max">
                {PROJECTS.map((project, idx) => (
                  <div key={idx} className="min-w-[320px] shrink-0 scroll-snap-align-start">
                    <ProjectCard {...project} index={idx} />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-zinc-400 mt-4 md:hidden font-medium uppercase tracking-widest">
              Swipe to explore
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Technical Arsenal" subtitle="Tools and technologies I work with" />
          <div className="grid md:grid-cols-3 gap-12">
            <SkillGroup title="Languages" skills={SKILLS.languages} icon={<Code2 className="text-zinc-400" />} />
            <SkillGroup title="Tech & Frameworks" skills={SKILLS.tech} icon={<Briefcase className="text-zinc-400" />} />
            <SkillGroup title="Domain Skills" skills={SKILLS.domain} icon={<Award className="text-zinc-400" />} />
          </div>
        </section>

        {/* Education & Training */}
        <section id="education" className="mb-32">
          <SectionHeader title="Education & Training" subtitle="My academic journey" />
          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <EducationCard key={idx} {...edu} index={idx} />
            ))}
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-zinc-900 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase size={20} className="text-zinc-400" />
                <h3 className="text-xl font-bold">Mastering C++ Training</h3>
              </div>
              <p className="text-zinc-400 mb-4">LPU | Jun 2025 - Jul 2025</p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-zinc-300">
                <li className="flex gap-2"><ChevronRight size={16} className="shrink-0 text-zinc-500" /> Intensive C++ covering OOPS, Data Structures</li>
                <li className="flex gap-2"><ChevronRight size={16} className="shrink-0 text-zinc-500" /> Practical implementations of Trees, Stacks, Queues</li>
                <li className="flex gap-2"><ChevronRight size={16} className="shrink-0 text-zinc-500" /> Algorithm optimization techniques</li>
                <li className="flex gap-2"><ChevronRight size={16} className="shrink-0 text-zinc-500" /> Time and space complexity strategies</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-32">
          <SectionHeader title="Certifications" subtitle="Professional recognition" />
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert: any, idx) => (
              <motion.a
                key={idx}
                href={cert.link}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex items-center justify-between p-6 rounded-2xl border border-zinc-200 transition-colors group ${cert.link ? 'hover:border-zinc-900 cursor-pointer' : 'cursor-default'}`}
              >
                <div>
                  <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                  <p className="text-sm text-zinc-500">{cert.issuer} • {cert.date}</p>
                </div>
                <Award className="text-zinc-200 group-hover:text-zinc-900 transition-colors" size={24} />
              </motion.a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-top border-zinc-200 text-center">
          <h2 className="text-4xl font-display font-extrabold mb-8">Let's build something together.</h2>
          <div className="flex justify-center gap-8 mb-12">
            <SocialLink href="https://github.com/Vardhan1160" icon={<Github size={24} />} />
            <SocialLink href="https://www.linkedin.com/in/vardhan-guthula" icon={<Linkedin size={24} />} />
            <SocialLink href="mailto:vardhanguthula99@gmail.com" icon={<Mail size={24} />} />
          </div>
          <p className="text-sm text-zinc-400">© 2026 Guthula Venkata Sahitya Vardhan. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="p-3 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-all shadow-xs"
    >
      {icon}
    </motion.a>
  );
}

function SectionHeader({ title, subtitle, noMargin }: { title: string; subtitle: string; noMargin?: boolean }) {
  return (
    <div className={noMargin ? "" : "mb-12"}>
      <h2 className="text-4xl font-display font-extrabold tracking-tight mb-2">{title}</h2>
      <p className="text-zinc-500 font-medium">{subtitle}</p>
    </div>
  );
}

function ProjectCard({ title, date, description, tech, link, image, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-3xl border border-zinc-200 hover:border-zinc-900 transition-all duration-500 bg-white overflow-hidden min-h-[340px] flex flex-col justify-end"
    >
      {image && (
        <>
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-900/60 to-transparent" />
        </>
      )}
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl transition-colors ${image ? 'bg-white/10 backdrop-blur-md text-white' : 'bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white'}`}>
            <Code2 size={24} />
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer" className={`${image ? 'text-white/70 hover:text-white' : 'text-zinc-400 hover:text-zinc-900'} transition-colors`}>
            <ExternalLink size={20} />
          </a>
        </div>
        <span className={`text-xs font-bold uppercase tracking-widest ${image ? 'text-zinc-300' : 'text-zinc-400'}`}>{date}</span>
        <h3 className={`text-xl font-bold mt-2 mb-3 group-hover:tracking-tight transition-all ${image ? 'text-white' : 'text-zinc-900'}`}>{title}</h3>
        <p className={`mb-6 line-clamp-2 text-sm leading-relaxed ${image ? 'text-zinc-300' : 'text-zinc-600'}`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t: string) => (
            <span key={t} className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${image ? 'bg-white/10 text-white backdrop-blur-sm' : 'bg-zinc-100 text-zinc-600'}`}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillGroup({ title, skills, icon }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h3 className="font-bold text-lg uppercase tracking-widest text-zinc-400">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill: any) => (
          <div key={skill.name} className="flex items-center gap-2 group cursor-default">
            {skill.icon ? (
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-zinc-900 transition-colors" />
            )}
            <span className="text-lg font-bold text-zinc-900 group-hover:text-zinc-400 transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function EducationCard({ school, degree, period, score, location, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 border-l-2 border-zinc-200 group"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-zinc-200 group-hover:bg-zinc-900 transition-colors" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="text-xl font-bold">{school}</h3>
          <p className="text-zinc-600 font-medium">{degree}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-zinc-400">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
        <div className="text-right md:text-right">
          <p className="text-sm font-bold text-zinc-900">{period}</p>
          <p className="text-sm font-medium text-zinc-500">{score}</p>
        </div>
      </div>
    </motion.div>
  );
}

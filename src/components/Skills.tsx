import './Skills.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPhp, FaDatabase, FaServer, FaCode, FaHtml5, FaCss3Alt, FaCube, FaNetworkWired, FaBrain, FaAws } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: <FaCode size={24} />,
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <FaCube /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> }
    ]
  },
  {
    title: "Backend & Frameworks",
    icon: <FaServer size={24} />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Java (Spring, J2EE)", icon: <FaJava /> },
      { name: "PHP (Laravel, Symfony)", icon: <FaPhp /> }
    ]
  },
  {
    title: "Database & Infrastructure",
    icon: <FaDatabase size={24} />,
    skills: [
      { name: "AWS", icon: <FaAws /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "OpenStack", icon: <FaServer /> },
      { name: "Hyperledger Fabric", icon: <FaNetworkWired /> },
      { name: "Neural Networks", icon: <FaBrain /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="skill-category glass-panel"
            >
              <div className="category-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

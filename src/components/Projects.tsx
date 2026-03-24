import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: "fabric-mns",
    description: "Implementation and experiments on Hyperledger Fabric. Features custom node selection logic and Artificial Neural Networks.",
    url: "https://github.com/shirshakmaskey/fabric-mns"
  },
  {
    name: "blockchain_multithread",
    description: "A multithreaded blockchain implementation focusing on performance, optimization, and concurrency.",
    url: "https://github.com/shirshakmaskey/blockchain_multithread"
  },
  {
    name: "gold-price",
    description: "A sleek web application for tracking and displaying real-time precious metal prices and details.",
    url: "https://github.com/shirshakmaskey/gold-price"
  },
  {
    name: "packetanalyzer",
    description: "Network packet analyzer tool for monitoring, diagnosing, and inspecting deep network traffic capabilities.",
    url: "https://github.com/shirshakmaskey/packetanalyzer"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects & Repositories</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card glass-panel"
            >
              <div className="project-header">
                <FaGithub size={28} className="project-icon" />
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${project.name} on GitHub`}>
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

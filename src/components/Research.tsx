import './Projects.css';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaExternalLinkAlt, FaQuoteRight } from 'react-icons/fa';

const researchPapers = [
  {
    title: "Bits: Blockchain based intelligent transportation system with outlier detection for smart city",
    citations: 42,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S5-VInMAAAAJ&citation_for_view=S5-VInMAAAAJ:u-x6o8ySG0sC"
  },
  {
    title: "ALICIA: Applied intelligence in blockchain based VANET: Accident validation as a case study",
    citations: 33,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S5-VInMAAAAJ&citation_for_view=S5-VInMAAAAJ:2osOgNQ5qMEC"
  },
  {
    title: "Reputation-based miner node selection in blockchain-based vehicular edge computing",
    citations: 18,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S5-VInMAAAAJ&citation_for_view=S5-VInMAAAAJ:9yKSN-GCB0IC"
  },
  {
    title: "Reputation-based miner node selection in blockchain-based vehicular networks",
    citations: 2,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=S5-VInMAAAAJ&citation_for_view=S5-VInMAAAAJ:qjMakFHDy7sC"
  }
];

export default function Research() {
  return (
    <section id="research" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="projects-grid">
          {researchPapers.map((paper, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card glass-panel"
            >
              <div className="project-header">
                <FaGraduationCap size={28} className="project-icon" />
                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${paper.title} on Google Scholar`}>
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
              <h3 className="project-name" style={{ fontSize: '1.1rem', marginBottom: '16px', lineHeight: '1.4' }}>{paper.title}</h3>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontWeight: 600 }}>
                <FaQuoteRight size={14} />
                <span>Cited by {paper.citations}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

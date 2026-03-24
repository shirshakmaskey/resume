import './Experience.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    company: "Kforce Inc. (HP)",
    role: "Full Stack Developer",
    period: "Aug 2021 - Nov 2025",
    summary: "Led system design for a multi-billion dollar procurement platform migration to a modern web stack.",
    details: [
      "Built core microservices handling millions of users with sub-200ms latency.",
      "Spearheaded migration of a legacy MS Access application to a scalable, modular web-based platform using React JS and Laravel PHP.",
      "Developed high-throughput data ingestion services that process hundreds of millions of data records daily.",
      "Helped millions of HP clients find curated services for better experience through development of the customer engagement center."
    ]
  },
  {
    company: "University of Nevada, Reno",
    role: "Research Assistant (Blockchain)",
    period: "Aug 2019 - May 2021",
    summary: "Specialized in blockchain security using AI, proposing novel solutions for node selection in Hyperledger Fabric.",
    details: [
      "Proposed a novel solution to select the miner node in Hyperledger fabric with the use of artificial neural networks.",
      "Published three peer-reviewed papers on improving the security of blockchain-based applications.",
      "Configured and ran experiments on Hyperledger Explorer using NodeJS.",
      "Developed a REST API for Hyperledger Explorer that measured different statistics for Hyperledger Fabric blockchain."
    ]
  },
  {
    company: "Cloudtoko B.V.",
    role: "Full Stack Engineer",
    period: "Jun 2017 - Jul 2019",
    summary: "Designed a POS web app with workflow management, increasing organizational productivity by 30%.",
    details: [
      "Built a React & Redux-based online course registration system and a travel package booking platform that boosted traffic by 50%.",
      "Developed and maintained varied e-commerce platforms and client-facing websites.",
      "Created a user-friendly control panel on top of OpenStack to simplify VM management for non-technical users.",
      "Worked extensively with PHP (Symfony, Laravel), React, Spring Boot, J2EE, and MySQL."
    ]
  },
  {
    company: "Broadlink Communications Pvt. Ltd.",
    role: "Full Stack Engineer",
    period: "Dec 2016 - May 2017",
    summary: "Developed internal tools for ticket and task management, improving efficiency by over 50%.",
    details: [
      "Maintained and upgraded the corporate website for improved security and user experience.",
      "Used Spring MVC, Java, and CSS for building middle-tier business logic and responsive UI components."
    ]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`experience-card glass-panel ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-summary">{exp.summary}</p>
                
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="experience-details-container"
                    >
                      <ul className="experience-details-list">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className="expand-indicator">
                  {isExpanded ? (
                    <><FaChevronUp size={16} /> Show Less</>
                  ) : (
                    <><FaChevronDown size={16} /> Read More</>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import './Education.css';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master of Science - Computer Science and Engineering",
    school: "University of Nevada, Reno",
    period: "May 2021"
  },
  {
    degree: "Bachelor of Engineering - Electronics & Communication",
    school: "Tribhuwan University, Kathmandu",
    period: "Oct 2016"
  }
];

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="education-card glass-panel"
            >
              <h3 className="education-degree">{edu.degree}</h3>
              <div className="education-footer">
                <span className="education-school">{edu.school}</span>
                <span className="education-period">{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

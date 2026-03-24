import './Hero.css';
import { motion } from 'framer-motion';
import { FaChevronRight, FaGithub, FaLinkedin, FaGraduationCap } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <h2 className="hero-subtitle">Software Engineer</h2>
          <h1 className="hero-title">
            Language agnostic. <br />
            <span className="gradient-text">Results driven.</span>
          </h1>
          <p className="hero-description">
            Versatile Full Stack Developer with over 5 years of experience building robust, scalable, and high-performance web applications. Expertise in modernizing legacy systems and designing microservices across diverse industries.
          </p>
          <div className="hero-actions">
            <a href="#experience">
              <button className="primary">
                View Experience <FaChevronRight size={18} />
              </button>
            </a>
            <a href="mailto:shirshak.maskey17@gmail.com" className="secondary-link">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/shirshakmaskey" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shirshakmaskey/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://scholar.google.com/citations?user=S5-VInMAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Google Scholar">
              <FaGraduationCap size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

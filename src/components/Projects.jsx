import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Projects.css';
import { projects } from './projects.js';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeProjectImages, setActiveProjectImages] = useState([]);

  const toggleProject = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const openLightbox = (images, index) => {
    setActiveProjectImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showPrev = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? activeProjectImages.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setLightboxIndex((prev) =>
      prev === activeProjectImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => {
            const isExpanded = expandedIndex === index;
            const heroImage = project.images?.[0];

            return (
              <motion.div
                key={index}
                className={`project-card ${isExpanded ? 'expanded' : ''}`}
                variants={cardVariants}
                layout
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card Header — always visible */}
                <div
                  className="card-header"
                  onClick={() => toggleProject(index)}
                >
                  {heroImage && (
                    <div className="card-image-wrapper">
                      <img
                        src={heroImage}
                        alt={`${project.title} preview`}
                        className="card-hero-image"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="card-info">
                    <div className="card-title-row">
                      <h3>{project.title}</h3>
                      <span className="card-role">{project.role}</span>
                    </div>

                    <p className="card-description">{project.description}</p>

                    <div className="card-tech-tags">
                      {project.technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="card-tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="card-tech-tag more-tag">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="card-expand-icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`expand-arrow ${isExpanded ? 'open' : ''}`}
                    >
                      <path
                        d="M8 10l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="card-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="card-details-inner">
                        {/* Highlights */}
                        {project.highlights && (
                          <div className="detail-section highlights-section">
                            <h4>Highlights</h4>
                            <div className="highlights-row">
                              {project.highlights.map((h, i) => (
                                <span key={i} className="highlight-tag">
                                  ✓ {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Features */}
                        {project.detailedFeatures && (
                          <div className="detail-section features-section">
                            <h4>Key Features</h4>
                            <ul>
                              {project.detailedFeatures.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Full Gallery */}
                        {project.images && project.images.length > 1 && (
                          <div className="detail-section gallery-section">
                            <h4>Gallery</h4>
                            <div className="card-gallery-grid">
                              {project.images.map((img, i) => (
                                <motion.div
                                  key={i}
                                  className="card-gallery-item"
                                  whileHover={{ scale: 1.03 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  onClick={() =>
                                    openLightbox(project.images, i)
                                  }
                                >
                                  <img
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    loading="lazy"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* All Technologies */}
                        <div className="detail-section tech-section">
                          <h4>Technologies</h4>
                          <div className="tech-row">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                src={activeProjectImages[lightboxIndex]}
                alt={`Project screenshot ${lightboxIndex + 1}`}
                className="lightbox-image"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <button
                className="lightbox-close"
                onClick={closeLightbox}
                aria-label="Close"
              >
                ✕
              </button>
              <button
                className="lightbox-nav lightbox-prev"
                onClick={showPrev}
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="lightbox-nav lightbox-next"
                onClick={showNext}
                aria-label="Next"
              >
                ›
              </button>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {activeProjectImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;

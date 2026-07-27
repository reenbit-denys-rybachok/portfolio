import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Projects.css';
import { projects } from './projects.js';

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function Projects() {
    const [expandedProjects, setExpandedProjects] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [activeProjectImages, setActiveProjectImages] = useState([]);

    const toggleProject = (index) => {
        setExpandedProjects((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
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

                <div className="projects-accordion">
                    {projects.map((project, index) => {
                        const isOpen = expandedProjects.includes(index);
                        return (
                            <div
                                key={index}
                                className={`accordion-item ${isOpen ? 'open' : ''}`}
                            >
                                <button
                                    className="accordion-header"
                                    onClick={() => toggleProject(index)}
                                >
                                    <div className="accordion-header-left">
                                        <h3>{project.title}</h3>
                                        <span className="project-role">{project.role}</span>
                                    </div>

                                    <span
                                        className={`accordion-icon ${isOpen ? 'open' : ''}`}
                                    >
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M8 10l4 4 4-4"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <motion.div
                                                className="accordion-body"
                                                variants={containerVariants}
                                                initial="hidden"
                                                animate="show"
                                            >
                                                <motion.p
                                                    variants={itemVariants}
                                                    className="project-description"
                                                >
                                                    {project.description}
                                                </motion.p>

                                                {project.detailedFeatures && (
                                                    <motion.div
                                                        variants={itemVariants}
                                                        className="project-features"
                                                    >
                                                        <h4>Key Features</h4>

                                                        <ul>
                                                            {project.detailedFeatures.map((feature, i) => (
                                                                <li key={i}>{feature}</li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}

                                                <motion.div
                                                    variants={itemVariants}
                                                    className="project-highlights"
                                                >
                                                    {project.highlights.map((highlight, i) => (
                                                        <motion.span
                                                            key={i}
                                                            variants={itemVariants}
                                                            className="highlight-tag"
                                                        >
                                                            ✓ {highlight}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>

                                                {project.images && project.images.length > 0 && (
                                                    <motion.div
                                                        variants={itemVariants}
                                                        className="project-gallery"
                                                    >
                                                        <h4 className="gallery-title">Gallery</h4>
                                                        <div className="gallery-grid">
                                                            {project.images.map((image, i) => (
                                                                <motion.div
                                                                    key={i}
                                                                    className="gallery-grid-item"
                                                                    whileHover={{ scale: 1.03 }}
                                                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                                                    onClick={() => openLightbox(project.images, i)}
                                                                >
                                                                    <img
                                                                        src={image}
                                                                        alt={`${project.title} screenshot ${i + 1}`}
                                                                        className="gallery-grid-image"
                                                                        loading="lazy"
                                                                    />
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}

                                                <motion.div
                                                    variants={itemVariants}
                                                    className="project-technologies"
                                                >
                                                    {project.technologies.map((tech, i) => (
                                                        <motion.span
                                                            key={i}
                                                            variants={itemVariants}
                                                            className="tech-tag"
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
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
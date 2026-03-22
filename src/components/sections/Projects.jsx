import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import riceVisionImg from '../../assets/image.png';
import snakHutImg from '../../assets/res.png';
import grandAbodeImg from '../../assets/ga.png';
import infantJesusImg from '../../assets/ijc.png';

const projectsList = [
    {
        title: "RiceVision",
        description: "Built a data-driven paddy monitoring and yield prediction platform integrating satellite data and ML models, with a FastAPI + PostgreSQL backend and React frontend.",
        image: riceVisionImg,
        tech: ["Python", "FastAPI", "PostgreSQL", "React", "AWS", "Vercel", "Render"],
        github: "https://github.com/RakinduNiwunhella/RiceVision",
        live: "https://www.ricevisionlanka.com/"
    },
    {
        title: "SnakHut",
        description: "Developed a full-stack POS system with secure REST APIs, layered architecture (Controller-Service-Repository), and Dockerized backend services for reliable deployment.",
        image: snakHutImg,
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Maven", "React"],
        github: "https://github.com/Chethi2003/Smart-resturant-management-system",
        live: "#"
    },
    {
        title: "Grand Abode",
        description: "React web app with persistent favourites using localStorage, reusable components, client-side routing, and automated testing with Vitest and React Testing Library.",
        image: grandAbodeImg,
        tech: ["React", "JavaScript", "CSS3", "Vitest", "RTL", "Vercel"],
        github: "https://github.com/Chethi2003/Estate_Agent_Client-side_Web_Application",
        live: "https://grandabode.vercel.app/"
    },
    {
        title: "Infant Jesus Church",
        description: "Designed and developed a responsive website to improve community communication with user-friendly navigation, announcements, and media galleries.",
        image: infantJesusImg,
        tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
        github: "#",
        live: "https://infantjesusnedimala.lk/"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-slate-50 dark:bg-brand-dark/50">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        Featured <span className="text-brand-purple">Projects</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-blue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projectsList.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-poppins font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-brand-blue dark:group-hover:text-brand-blue transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 font-inter mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-mono font-medium text-brand-purple bg-brand-purple/10 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-2 text-sm font-inter font-medium text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                    {project.title !== "SnakHut" && (
                                        <a
                                            href={project.live}
                                            className="flex items-center gap-2 text-sm font-inter font-medium text-white bg-brand-blue hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg shadow-md shadow-brand-blue/20"
                                        >
                                            <ExternalLink size={18} />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a href="https://github.com/Chethi2003" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-blue font-inter font-medium hover:text-brand-purple transition-colors">
                        View more on GitHub <ExternalLink size={16} />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;

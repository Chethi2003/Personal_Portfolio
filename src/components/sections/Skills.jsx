import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="text-brand-blue" size={24} />,
        accent: "brand-blue",
        summary: "Core programming foundations",
        skills: ["Java", "Python", "JavaScript", "SQL"]
    },
    {
        title: "Frontend",
        icon: <Layout className="text-brand-purple" size={24} />,
        accent: "brand-purple",
        summary: "Interactive and responsive UI development",
        skills: ["HTML5", "CSS3", "React", "TailwindCSS"]
    },
    {
        title: "Backend",
        icon: <Server className="text-brand-blue" size={24} />,
        accent: "brand-blue",
        summary: "Scalable services and API engineering",
        skills: ["Spring Boot", "REST APIs", "Client-Server Architecture"]
    },
    {
        title: "Databases",
        icon: <Database className="text-brand-purple" size={24} />,
        accent: "brand-purple",
        summary: "Relational and NoSQL data management",
        skills: ["MySQL", "PostgreSQL", "MongoDB (Basic)"]
    },
    {
        title: "Tools",
        icon: <Wrench className="text-brand-blue" size={24} />,
        accent: "brand-blue",
        summary: "Productivity, design, and dev tooling",
        skills: ["Docker", "Postman", "DBeaver", "pgAdmin", "Anaconda", "Figma"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        Technical <span className="text-brand-blue">Skills</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-purple mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-white dark:bg-slate-900/80 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-100">
                                        {category.title}
                                    </h3>
                                    <p className="text-xs font-inter text-slate-500 dark:text-slate-400">
                                        {category.summary}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2.5 pt-2">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.12 + (skillIdx * 0.04) }}
                                        className={`px-3 py-1.5 rounded-full text-sm font-inter font-medium border transition-colors ${
                                            category.accent === 'brand-purple'
                                                ? 'text-brand-purple border-brand-purple/30 bg-brand-purple/10 group-hover:bg-brand-purple/15'
                                                : 'text-brand-blue border-brand-blue/30 bg-brand-blue/10 group-hover:bg-brand-blue/15'
                                        }`}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;

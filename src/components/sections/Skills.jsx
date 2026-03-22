import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
    {
        title: "Languages",
        icon: <Code2 className="text-brand-blue" size={24} />,
        skills: [
            { name: "Java", level: 85 },
            { name: "Python", level: 80 },
            { name: "JavaScript", level: 90 },
            { name: "SQL", level: 85 },
        ]
    },
    {
        title: "Frontend",
        icon: <Layout className="text-brand-purple" size={24} />,
        skills: [
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 },
            { name: "React", level: 85 },
            { name: "TailwindCSS", level: 90 },
        ]
    },
    {
        title: "Backend",
        icon: <Server className="text-brand-blue" size={24} />,
        skills: [
            { name: "Spring Boot", level: 80 },
            { name: "REST APIs", level: 90 },
            { name: "Client-Server Architecture", level: 85 },
        ]
    },
    {
        title: "Databases",
        icon: <Database className="text-brand-purple" size={24} />,
        skills: [
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
        ]
    },
    {
        title: "Tools",
        icon: <Wrench className="text-brand-blue" size={24} />,
        skills: [
            { name: "Docker", level: 70 },
            { name: "Postman", level: 90 },
            { name: "DBeaver / pgAdmin", level: 85 },
            { name: "Anaconda", level: 75 },
            { name: "Figma", level: 80 },
        ]
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
                            className="bg-white dark:bg-slate-900/80 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-100">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {category.skills.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="mb-1">
                                            <span className="font-inter text-sm font-medium text-slate-700 dark:text-slate-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                                className={`h-2 rounded-full ${idx % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-purple'}`}
                                            />
                                        </div>
                                    </div>
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

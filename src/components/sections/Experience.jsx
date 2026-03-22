import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Managing Director",
        company: "Dharshana Trading Company (Pvt) Ltd",
        period: "2023 – 2025",
        description: "Oversaw operations of an interior design and workshop business, managing design projects from concept to completion while coordinating teams, timelines, and delivery quality.",
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-slate-50 dark:bg-brand-dark/50">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        Professional <span className="text-brand-purple">Experience</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-blue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-auto">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="mb-12 ml-8 relative group"
                        >
                            <div className="absolute -left-[43px] bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full p-2 text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue/30 transition-all duration-300 shadow-md">
                                <Briefcase size={20} />
                            </div>

                            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 group-hover:border-brand-blue/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-poppins font-bold text-slate-800 dark:text-slate-100 group-hover:text-brand-blue transition-colors">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg font-inter font-medium text-brand-purple">
                                            {exp.company}
                                        </h4>
                                    </div>
                                    <div className="mt-2 md:mt-0 px-4 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono text-sm rounded-full self-start md:self-auto border border-slate-200 dark:border-slate-700">
                                        {exp.period}
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-slate-400 font-inter leading-relaxed whitespace-pre-line">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;

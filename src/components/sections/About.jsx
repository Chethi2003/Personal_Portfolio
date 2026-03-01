import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-slate-50 dark:bg-brand-dark/50">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        About <span className="text-brand-purple">Me</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-blue mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <h3 className="text-2xl font-poppins font-semibold text-brand-blue mb-4">
                            My Journey
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-lg leading-relaxed mb-6">
                            I am a driven and passionate Computer Science undergraduate studying at the Informatics Institute of Technology (IIT), affiliated with the University of Westminster. My primary focus revolves around solving complex computational problems, designing robust backend architectures, and analyzing data patterns to construct innovative software solutions.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 font-inter text-lg leading-relaxed">
                            With a solid foundation in modern software engineering principles, I constantly seek opportunities to learn and adapt to emerging technologies, aiming to bridge the gap between abstract concepts and real-world applications.
                        </p>

                        <div className="mt-8 relative w-full h-48 md:w-3/4 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="University Environment"
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <span className="text-white font-inter font-medium">Informatics Institute of Technology</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:w-1/2 w-full"
                    >
                        <h3 className="text-2xl font-poppins font-semibold text-brand-purple mb-8 text-center lg:text-left">
                            Education
                        </h3>

                        <div className="relative border-l-2 border-brand-blue ml-4 md:ml-0">

                            <div className="mb-10 ml-8 relative">
                                <div className="absolute -left-[45px] bg-brand-light dark:bg-brand-dark rounded-full p-2 border-2 border-brand-blue text-brand-blue">
                                    <GraduationCap size={24} />
                                </div>
                                <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 hover:border-brand-blue dark:hover:border-brand-blue transition-colors">
                                    <h4 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-100">
                                        BSc (Hons) Computer Science
                                    </h4>
                                    <p className="text-brand-blue font-medium mb-2">2024 – Present</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-inter">
                                        Informatics Institute of Technology (IIT) <br />
                                        Affiliated with University of Westminster, UK
                                    </p>
                                </div>
                            </div>

                            <div className="ml-8 relative">
                                <div className="absolute -left-[45px] bg-brand-light dark:bg-brand-dark rounded-full p-2 border-2 border-brand-purple text-brand-purple">
                                    <BookOpen size={24} />
                                </div>
                                <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl shadow-md border border-slate-100 dark:border-slate-800 hover:border-brand-purple dark:hover:border-brand-purple transition-colors">
                                    <h4 className="text-xl font-poppins font-bold text-slate-800 dark:text-slate-100">
                                        GCE Advanced Level
                                    </h4>
                                    <p className="text-brand-purple font-medium mb-2">2020 – 2022</p>
                                    <p className="text-slate-600 dark:text-slate-400 font-inter">
                                        Successfully completed secondary education with a strong foundation in analytical subjects, serving as a stepping stone into computer science.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;

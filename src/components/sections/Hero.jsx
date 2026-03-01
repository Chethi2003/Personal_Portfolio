import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left shadow-brand-blue"
                    >
                        <h2 className="text-xl md:text-2xl text-brand-blue font-inter font-medium mb-2">
                            Hello, I'm
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-slate-800 dark:text-slate-100 mb-4 tracking-tight">
                            Chethina <span className="text-brand-purple">Fernando</span>
                        </h1>

                        <div className="text-xl md:text-3xl font-poppins font-semibold text-slate-600 dark:text-slate-300 mb-6 h-10">
                            I am a{' '}
                            <span className="text-brand-blue">
                                <Typewriter
                                    words={['Software Developer', 'Backend Developer', 'Data Enthusiast']}
                                    loop={true}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 font-inter text-lg mb-8 max-w-xl leading-relaxed">
                            Motivated Computer Science undergraduate passionate about backend systems, data-driven technologies, and building scalable applications.
                        </p>

                        {/* Buttons & Socials */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                            <a
                                href="#"
                                className="flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-6 py-3 rounded-full font-inter font-medium transition-all transform hover:scale-105 shadow-lg shadow-brand-blue/30"
                            >
                                <FileText size={20} />
                                Download CV
                            </a>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="flex items-center gap-2 border-2 border-slate-300 dark:border-slate-700 hover:border-brand-purple text-slate-700 dark:text-slate-300 hover:text-brand-purple dark:hover:text-brand-purple px-6 py-3 rounded-full font-inter font-medium transition-all cursor-pointer"
                            >
                                View Projects
                            </Link>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://github.com/Chethi2003" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-blue transition-colors transform hover:scale-110">
                                <Github size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/fernandochethina2003" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-blue transition-colors transform hover:scale-110">
                                <Linkedin size={28} />
                            </a>
                            <a href="mailto:kovida.fernando@gmail.com" className="text-slate-500 hover:text-brand-blue transition-colors transform hover:scale-110">
                                <Mail size={28} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end relative"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Glowing gradient rings */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple opacity-20 blur-3xl animate-pulse"></div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10px] rounded-full border-2 border-dashed border-brand-blue/50"
                            ></motion.div>

                            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Chethina Fernando"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X } from 'lucide-react';
import certi1Img from '../../assets/certi1.jpg';
import certi2Img from '../../assets/certi2.jpg';
import certi3Img from '../../assets/certi3.png';
import certi4Img from '../../assets/certi4.jpg';
import certi5Img from '../../assets/certi5.jpg';
import certi6Img from '../../assets/certi6.jpg';

const certsList = [
    {
        title: "PostgreSQL Essential Training",
        issuer: "LinkedIn Learning",
        date: "Oct 03, 2025",
        image: certi1Img
    },
    {
        title: "Introduction to NoSQL",
        issuer: "LinkedIn Learning",
        date: "Oct 22, 2025",
        image: certi2Img
    },
    {
        title: "Introduction to MongoDB",
        issuer: "LinkedIn Learning",
        date: "Oct 22, 2025",
        image: certi3Img
    },
    {
        title: "Deep Learning Getting Started",
        issuer: "LinkedIn Learning",
        date: "Dec 07, 2025",
        image: certi4Img
    },
    {
        title: "Introduction to Web APIs",
        issuer: "NASBA",
        date: "2025",
        image: certi5Img
    },
    {
        title: "CodeRally Certificate of Participation",
        issuer: "IEEE CIS",
        date: "2025",
        image: certi6Img
    }
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    // Close modal on escape key press
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setSelectedCert(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        Licenses & <span className="text-brand-blue">Certifications</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-purple mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certsList.map((cert, idx) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            onClick={() => cert.image && setSelectedCert(cert)}
                            className={`bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 group hover:shadow-xl hover:shadow-brand-blue/10 hover:border-brand-blue/50 transition-all ${cert.image ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            <div className="h-40 overflow-hidden relative">
                                {cert.image ? (
                                    <>
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all font-inter shadow-lg">
                                                View Certificate
                                            </span>
                                        </div>
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </>
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-slate-100 dark:to-slate-800 flex items-center justify-center">
                                        <Award size={42} className="text-brand-blue" />
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-poppins font-bold text-slate-800 dark:text-slate-100 mb-2 leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center text-brand-purple font-inter text-sm mb-1">
                                    <Award size={16} className="mr-1" />
                                    {cert.issuer}
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">
                                    Issued: {cert.date}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-200 dark:border-slate-800"
                        >
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-20 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative pt-[60%] sm:pt-[50%]">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                                <h3 className="text-2xl font-poppins font-bold text-slate-800 dark:text-slate-100 mb-2">
                                    {selectedCert.title}
                                </h3>
                                <p className="text-brand-purple font-medium font-inter mb-1 flex items-center">
                                    <Award size={18} className="mr-2" />
                                    {selectedCert.issuer}
                                </p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-mono">
                                    Issued: {selectedCert.date}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Certifications;

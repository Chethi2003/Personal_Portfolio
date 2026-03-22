import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

    const onSubmit = async (data) => {
        // Simulate API call
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, 1500));
        reset();
        alert("Message sent successfully!");
    };

    return (
        <>
            <section id="contact" className="py-20 relative bg-slate-50 dark:bg-brand-dark/50">
                <div className="container mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                            Get In <span className="text-brand-blue">Touch</span>
                        </h2>
                        <div className="h-1 w-20 bg-brand-purple mx-auto mt-4 rounded-full"></div>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-1/3"
                        >
                            <h3 className="text-2xl font-poppins font-semibold text-slate-800 dark:text-slate-100 mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 font-inter mb-8 leading-relaxed">
                                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-blue/10 p-3 rounded-full text-brand-blue mt-1">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-medium text-slate-800 dark:text-slate-200">Email</h4>
                                        <a href="mailto:chethina.20240331@iit.ac.lk" className="text-slate-600 dark:text-slate-400 font-inter hover:text-brand-blue transition-colors">
                                            chethina.20240331@iit.ac.lk
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-purple/10 p-3 rounded-full text-brand-purple mt-1">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-medium text-slate-800 dark:text-slate-200">Phone</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-inter font-mono">
                                            +94 77 249 2154
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-500/10 p-3 rounded-full text-emerald-500 mt-1">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-poppins font-medium text-slate-800 dark:text-slate-200">Location</h4>
                                        <p className="text-slate-600 dark:text-slate-400 font-inter">
                                            Dehiwala, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:w-2/3"
                        >
                            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-800">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 font-inter mb-2">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="John Doe"
                                                {...register("name", { required: "Name is required" })}
                                                className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-blue focus:ring-brand-blue'} focus:ring-2 outline-none transition-colors text-slate-800 dark:text-slate-200 font-inter`}
                                            />
                                            {errors.name && <p className="mt-1 text-sm text-red-500 font-inter">{errors.name.message}</p>}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 font-inter mb-2">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                                className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-blue focus:ring-brand-blue'} focus:ring-2 outline-none transition-colors text-slate-800 dark:text-slate-200 font-inter`}
                                            />
                                            {errors.email && <p className="mt-1 text-sm text-red-500 font-inter">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 font-inter mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            placeholder="Your message here..."
                                            {...register("message", { required: "Message is required" })}
                                            className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:border-brand-blue focus:ring-brand-blue'} focus:ring-2 outline-none transition-colors text-slate-800 dark:text-slate-200 font-inter resize-none`}
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-500 font-inter">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-purple hover:from-blue-600 hover:to-purple-700 text-white font-poppins font-semibold py-4 rounded-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-brand-blue/30"
                                    >
                                        {isSubmitting ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-brand-light dark:bg-brand-dark border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-slate-600 dark:text-slate-400 font-inter text-sm mb-4 md:mb-0">
                        © 2026 Chethina Fernando. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-slate-600 dark:text-slate-400 text-sm font-inter">
                        <span>Built with React & TailwindCSS</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;

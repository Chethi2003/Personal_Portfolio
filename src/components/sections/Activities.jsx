import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Music, Code } from 'lucide-react';

const activities = [
    {
        title: "IEEE Member",
        type: "Professional",
        icon: <Activity size={24} />,
        color: "from-blue-500 to-indigo-600"
    },
    {
        title: "IEEE Xtreme Participation",
        type: "Competition",
        icon: <Code size={24} />,
        color: "from-indigo-500 to-purple-600"
    },
    {
        title: "CodeRally Participation",
        type: "Competition",
        icon: <Code size={24} />,
        color: "from-purple-500 to-pink-600"
    },
    {
        title: "ABRSM Piano Grade 2",
        type: "Extracurricular",
        icon: <Music size={24} />,
        color: "from-pink-500 to-rose-600"
    },
    {
        title: "Sangeeth Visharadha",
        type: "Extracurricular",
        icon: <Music size={24} />,
        color: "from-rose-500 to-orange-600"
    }
];

const Activities = () => {
    return (
        <section id="activities" className="py-20 relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <Heart className="text-brand-purple animate-pulse" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-poppins font-bold text-slate-800 dark:text-slate-100 inline-block">
                        Volunteering & <span className="text-brand-blue">Activities</span>
                    </h2>
                    <div className="h-1 w-20 bg-brand-purple mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {activities.map((activity, idx) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: idx * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="relative overflow-hidden group rounded-2xl p-[2px] cursor-default"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative bg-white dark:bg-slate-900 rounded-[14px] p-6 flex items-center gap-4 h-full">
                                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${activity.color}`}>
                                    {activity.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-poppins font-bold text-slate-800 dark:text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-blue group-hover:to-brand-purple transition-all duration-300">
                                        {activity.title}
                                    </h3>
                                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                                        {activity.type}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Activities;

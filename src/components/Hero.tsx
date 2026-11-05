import React, { useEffect } from 'react';
import { Sun, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    useEffect(() => {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach((item, index) => {
            (item as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        });
    }, []);

    return (
        <header className="py-32 px-4 text-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="grid grid-cols-6 grid-rows-6 gap-2 h-full w-full">
                    {Array(36).fill(null).map((_, i) => (
                        <motion.div
                            key={i}
                            className="grid-item bg-yellow-500 rounded-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: "easeOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex justify-center mb-6">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Sun className="text-yellow-500" size={48} />
                        </motion.div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
                        Maximize Your Solar Investment
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                        Your solar system deserves regular maintenance to perform at its peak efficiency. Let our experts help you get the most out of your clean energy investment.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-md text-lg shadow-lg hover:bg-yellow-400 transition group"
                        >
                            Prepare an Enquiry
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </header>
    );
};

export default Hero; 
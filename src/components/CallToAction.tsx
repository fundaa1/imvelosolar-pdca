import React from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
    return (
        <section className="py-20 bg-green-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Ready to Optimize Your Solar System?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Schedule a maintenance service today and experience the difference
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                            <Phone className="text-green-600" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
                        <p className="text-gray-600 mb-4">
                            Speak with our solar maintenance experts
                        </p>
                        <a
                            href="tel:+1234567890"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            +1 (234) 567-890
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                            <Mail className="text-green-600" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                        <p className="text-gray-600 mb-4">
                            Get a quick response to your inquiries
                        </p>
                        <a
                            href="mailto:info@imvelosolar.com"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            info@imvelosolar.com
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
                            <Calendar className="text-green-600" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Schedule Online</h3>
                        <p className="text-gray-600 mb-4">
                            Book your maintenance service instantly
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Schedule Now
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction; 
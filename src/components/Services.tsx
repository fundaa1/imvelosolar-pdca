import React from 'react';
import { PanelTop, Wrench, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: PanelTop,
        title: 'Solar Panel Cleaning',
        description: 'Dirt, dust, and debris can reduce panel efficiency by up to 25%. Our specialized cleaning service restores optimal performance.',
        benefits: ['Increased energy production', 'Extended panel lifespan', 'Improved system efficiency']
    },
    {
        icon: Wrench,
        title: 'Inverter Maintenance',
        description: 'We ensure your inverters are performing optimally with thorough inspections, firmware updates, and preventative maintenance.',
        benefits: ['Optimal power conversion', 'Reduced downtime', 'Extended warranty coverage']
    },
    {
        icon: Sun,
        title: 'System Upgrades & Repairs',
        description: 'From minor repairs to system upgrades, our technicians can resolve issues and recommend improvements for better performance.',
        benefits: ['Enhanced system performance', 'Future-proof technology', 'Cost-effective solutions']
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        Our Solar Optimization Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive maintenance solutions to keep your solar system performing at its best
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="group"
                        >
                            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full">
                                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                                    <service.icon className="text-green-700 group-hover:text-green-600" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services; 
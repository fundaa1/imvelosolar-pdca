import React from 'react';
import { Zap, DollarSign, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: Zap,
        title: 'Maximize Energy Production',
        description: "Regular maintenance ensures your solar panels operate at peak efficiency, maximizing your energy output.",
        value: '25%',
        width: '25%',
        color: 'text-yellow-500', barColor: 'bg-yellow-500'
    },
    {
        icon: DollarSign,
        title: 'Extend System Lifespan',
        description: "Regular maintenance can add years to your system's operational life, protecting your investment.",
        value: '5-10 years',
        width: '100%',
        color: 'text-green-500', barColor: 'bg-green-500'
    },
    {
        icon: Clock,
        title: 'Prevent Costly Repairs',
        description: "Early detection of issues through maintenance can prevent expensive repairs down the line.",
        value: '50%',
        width: '50%',
        color: 'text-blue-500', barColor: 'bg-blue-500'
    },
    {
        icon: Shield,
        title: 'Maintain Warranty Coverage',
        description: "Regular maintenance is often required to keep your system's warranty valid.",
        value: '100%',
        width: '100%',
        color: 'text-purple-500', barColor: 'bg-purple-500'
    }
];

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="py-20 bg-gray-50 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Regular Maintenance</h2>
                    <p className="text-xl text-gray-600">Keep your solar system performing at its best</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className={`${benefit.color} mb-4`}>
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 mb-4">{benefit.description}</p>
                            <div className="flex items-center">
                                <span className={`text-2xl font-bold ${benefit.color}`}>{benefit.value}</span>
                                <div className="ml-4 flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: benefit.width }}
                                        transition={{ duration: 1, delay: index * 0.2 }}
                                        className={`h-full ${benefit.barColor}`}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits; 
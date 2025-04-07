import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Homeowner',
        content: "After Imvelo cleaned our solar panels, we saw an immediate 20% increase in energy production. Their team was professional and thorough. Highly recommended!",
        rating: 5,
        image: '/testimonials/sarah.jpg'
    },
    {
        name: 'Michael Thompson',
        role: 'Business Owner',
        content: "We've been using Imvelo's maintenance services for our business solar system for two years now. The difference in performance and reliability is remarkable.",
        rating: 5,
        image: '/testimonials/michael.jpg'
    },
    {
        name: 'Emily Rodriguez',
        role: 'Property Manager',
        content: "Regular maintenance has saved us thousands in potential repair costs. The peace of mind knowing our system is in good hands is priceless.",
        rating: 5,
        image: '/testimonials/emily.jpg'
    }
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 p-8 rounded-lg shadow-md"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-24 h-24 rounded-full overflow-hidden">
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex mb-4">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="text-yellow-500 fill-current"
                                                size={20}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic mb-6">
                                        "{testimonials[currentIndex].content}"
                                    </p>
                                    <div>
                                        <p className="font-bold text-gray-800">
                                            {testimonials[currentIndex].name}
                                        </p>
                                        <p className="text-gray-600">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8 space-x-4">
                        <button
                            onClick={prevTestimonial}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 
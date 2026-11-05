import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['services', 'benefits', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Sun className="text-yellow-500" size={28} strokeWidth={1.5} />
                    <span className="font-bold text-xl text-green-800">Imvelo Smart Solar</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6">
                    <button
                        onClick={() => scrollToSection('services')}
                        className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'services' ? 'text-green-600 font-semibold' : ''
                            }`}
                    >
                        Services
                    </button>
                    <button
                        onClick={() => scrollToSection('benefits')}
                        className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'benefits' ? 'text-green-600 font-semibold' : ''
                            }`}
                    >
                        Benefits
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'contact' ? 'text-green-600 font-semibold' : ''
                            }`}
                    >
                        Contact
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 hover:text-green-600 transition-colors"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white py-4 px-4">
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => scrollToSection('services')}
                            className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'services' ? 'text-green-600 font-semibold' : ''
                                }`}
                        >
                            Services
                        </button>
                        <button
                            onClick={() => scrollToSection('benefits')}
                            className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'benefits' ? 'text-green-600 font-semibold' : ''
                                }`}
                        >
                            Benefits
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`text-gray-700 hover:text-green-600 transition-colors ${activeSection === 'contact' ? 'text-green-600 font-semibold' : ''
                                }`}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation; 
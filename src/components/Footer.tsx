import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-6">
            <div>
                <h2 className="text-xl font-bold mb-2">ImveloSolar</h2>
                <p className="text-gray-300">Solar maintenance services preview</p>
            </div>
            <nav aria-label="Footer navigation" className="flex gap-6">
                <a className="text-gray-300 hover:text-white" href="#services">Services</a>
                <a className="text-gray-300 hover:text-white" href="#benefits">Benefits</a>
                <a className="text-gray-300 hover:text-white" href="#contact">Enquiry checklist</a>
            </nav>
        </div>
    </footer>
);

export default Footer;

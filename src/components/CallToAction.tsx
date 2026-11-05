import React, { useState } from 'react';
import { ClipboardCheck, Copy } from 'lucide-react';

const CallToAction: React.FC = () => {
    const [copied, setCopied] = useState('');
    const details = [
        'System location and preferred contact details',
        'Solar panel and inverter details, if available',
        'What you have noticed and when it started',
        'Any access or scheduling requirements',
    ];

    const copyChecklist = async () => {
        try {
            await navigator.clipboard.writeText('Solar maintenance enquiry\n' + details.map(item => '- ' + item).join('\n'));
            setCopied('Checklist copied. Add your details before sharing it.');
        } catch {
            setCopied('Copy unavailable. You can select the checklist text and copy it manually.');
        }
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20 bg-green-50 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <ClipboardCheck className="mx-auto text-green-700 mb-4" size={40} aria-hidden="true" />
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Prepare for a maintenance enquiry</h2>
                    <p className="text-lg text-gray-700">Gather a few details to help describe your system and the service you need.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Useful information to have ready</h3>
                    <ul className="space-y-3 list-disc pl-6 text-gray-700">
                        {details.map(detail => <li key={detail}>{detail}</li>)}
                    </ul>
                    <button type="button" onClick={copyChecklist} className="mt-6 inline-flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-md hover:bg-green-800">
                        <Copy size={18} aria-hidden="true" /> Copy checklist
                    </button>
                    <p role="status" className="mt-3 text-gray-700">{copied}</p>
                    <p className="mt-4 text-sm text-gray-600">Contact and booking details are awaiting confirmation.</p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

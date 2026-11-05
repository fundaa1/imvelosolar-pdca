import React, { useState } from 'react';
import { ClipboardCheck, Copy } from 'lucide-react';

const CallToAction: React.FC = () => {
    const [location, setLocation] = useState('');
    const [system, setSystem] = useState('');
    const [issue, setIssue] = useState('');
    const [availability, setAvailability] = useState('');
    const [copyStatus, setCopyStatus] = useState('');

    const message = [
        'Solar maintenance enquiry',
        `Location: ${location.trim() || 'Not provided'}`,
        `System details: ${system.trim() || 'Not provided'}`,
        `Service needed: ${issue.trim() || 'Not provided'}`,
        `Access or scheduling: ${availability.trim() || 'Not provided'}`,
    ].join('\n');

    const copyMessage = async () => {
        try {
            await navigator.clipboard.writeText(message);
            setCopyStatus('Message copied. You can paste it into your preferred contact method.');
        } catch {
            setCopyStatus('Copy unavailable. Select the prepared message below and copy it manually.');
        }
    };

    return (
        <section id="contact" className="scroll-mt-24 py-20 bg-green-50 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <ClipboardCheck className="mx-auto text-green-700 mb-4" size={40} aria-hidden="true" />
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Prepare for a maintenance enquiry</h2>
                    <p className="text-lg text-gray-700">Add the details you know and prepare a message to share when contact details are confirmed.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <p className="text-sm text-gray-600 mb-6">All fields are optional. Your details stay on this page until you copy them or leave.</p>
                    <div className="grid md:grid-cols-2 gap-5">
                        <label className="text-gray-800 font-semibold">
                            System location
                            <input value={location} onChange={event => setLocation(event.target.value)} placeholder="Town or area" className="mt-2 block w-full border border-gray-400 rounded-md px-3 py-2 font-normal" />
                        </label>
                        <label className="text-gray-800 font-semibold">
                            Panel or inverter details
                            <input value={system} onChange={event => setSystem(event.target.value)} placeholder="If known" className="mt-2 block w-full border border-gray-400 rounded-md px-3 py-2 font-normal" />
                        </label>
                        <label className="text-gray-800 font-semibold">
                            Service needed or issue noticed
                            <textarea value={issue} onChange={event => setIssue(event.target.value)} rows={3} className="mt-2 block w-full border border-gray-400 rounded-md px-3 py-2 font-normal" />
                        </label>
                        <label className="text-gray-800 font-semibold">
                            Access or scheduling requirements
                            <textarea value={availability} onChange={event => setAvailability(event.target.value)} rows={3} className="mt-2 block w-full border border-gray-400 rounded-md px-3 py-2 font-normal" />
                        </label>
                    </div>
                    <label className="block mt-6 text-gray-800 font-semibold">
                        Prepared message
                        <textarea readOnly value={message} rows={6} className="mt-2 block w-full border border-gray-400 bg-gray-50 rounded-md px-3 py-2 font-normal" />
                    </label>
                    <button type="button" onClick={copyMessage} className="mt-4 inline-flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-md hover:bg-green-800">
                        <Copy size={18} aria-hidden="true" /> Copy message
                    </button>
                    <p role="status" className="mt-3 text-gray-700">{copyStatus}</p>
                    <p className="mt-4 text-sm text-gray-600">Contact and booking details are awaiting confirmation. This page does not send your enquiry.</p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;

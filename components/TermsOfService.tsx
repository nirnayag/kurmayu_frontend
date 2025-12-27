import React from 'react';
import { FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                            <FileText size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-900">Terms of Service</h1>
                    </div>

                    <div className="prose prose-emerald max-w-none text-gray-600">
                        <p className="lead text-lg text-gray-700 mb-8">
                            Welcome to Kurmayu Ayurveda. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-emerald-600" /> Acceptance of Terms
                        </h3>
                        <p className="mb-6">
                            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Kurmayu Ayurveda if you do not agree to take all of the terms and conditions stated on this page.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                            <AlertCircle size={20} className="text-emerald-600" /> Medical Disclaimer
                        </h3>
                        <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl mb-6">
                            <p className="text-amber-900 font-medium">
                                The content provided on this website, including text, graphics, images, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                            </p>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">User Responsibilities</h3>
                        <p className="mb-4">
                            As a user of our services, you agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Provide accurate and complete information when creating an account or using our assessment tools.</li>
                            <li>Maintain the confidentiality of your account information.</li>
                            <li>Use the services only for lawful purposes.</li>
                            <li>Not interfere with or disrupt the integrity or performance of the services.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h3>
                        <p className="mb-6">
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h3>
                        <p className="mb-6">
                            In no event shall Kurmayu Ayurveda, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Kurmayu Ayurveda, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page. You are advised to review this Terms of Service periodically for any changes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

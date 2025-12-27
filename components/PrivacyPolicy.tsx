import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                            <Shield size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-serif text-gray-900">Privacy Policy</h1>
                    </div>

                    <div className="prose prose-emerald max-w-none text-gray-600">
                        <p className="lead text-lg text-gray-700 mb-8">
                            At Kurmayu Ayurveda, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                            <Eye size={20} className="text-emerald-600" /> Information We Collect
                        </h3>
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                            <li><strong>Health Data:</strong> Information related to your health status, dosha type, and symptoms that you voluntarily provide through our assessment tools.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
                            <Lock size={20} className="text-emerald-600" /> How We Use Your Information
                        </h3>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                            <li>Provide you with specific Ayurvedic recommendations based on your dosha and symptoms.</li>
                            <li>Process your appointments and orders.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
                        </ul>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Security of Your Information</h3>
                        <p className="mb-6">
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>

                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h3>
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-medium text-emerald-800">
                            privacy@kurmayuayurveda.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

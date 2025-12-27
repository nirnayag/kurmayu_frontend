import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactUs: React.FC = () => {
    return (
        <div className="bg-[#FDFCF7] min-h-screen pt-28 pb-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <MessageSquare size={16} />
                        <span>Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Contact Us</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Have questions about your Ayurvedic journey? We're here to help you find balance and wellness.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-serif text-gray-900 mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                                        <p className="text-gray-600">123 Wellness Avenue, Ayurveda Park<br />Mumbai, Maharashtra 400001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                                        <p className="text-gray-600">hello@kurmayuayurveda.com</p>
                                        <p className="text-gray-600">support@kurmayuayurveda.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-700">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 22 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-900 p-8 rounded-[32px] shadow-xl text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif mb-4">Book a Consultation</h3>
                                <p className="text-emerald-100 mb-6">
                                    Ready to start your healing journey? Schedule a personalized consultation with our Vaidyas.
                                </p>
                                <button className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors w-full">
                                    Schedule Now
                                </button>
                            </div>
                            {/* Decorative circle */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-800 rounded-full opacity-50"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
                        <h3 className="text-2xl font-serif text-gray-900 mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-600">
                                    <option>General Inquiry</option>
                                    <option>Consultation</option>
                                    <option>Treatment Information</option>
                                    <option>Feedback</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

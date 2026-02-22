"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = encodeURIComponent(
            `Name: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\nMessage: ${formState.message}`
        );
        window.open(`https://wa.me/1234567890?text=${msg}`, "_blank");
    };

    return (
        <div className="bg-noir min-h-screen">
            {/* Header */}
            <div className="relative py-28 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1920&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-noir via-noir/80 to-noir" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-5">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 text-xs uppercase tracking-[0.2em] font-medium"
                    >
                        <ArrowLeft size={16} /> Back Home
                    </Link>
                    <h1 className="font-display text-5xl md:text-7xl text-white tracking-wide mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gold text-sm tracking-[0.25em] uppercase">
                        We&apos;d Love to Hear from You
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display text-2xl text-white mb-8">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-grey-400 text-xs uppercase tracking-[0.2em] mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-noir-light border border-white/10 text-white px-5 py-4 text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-grey-600"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-grey-400 text-xs uppercase tracking-[0.2em] mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-noir-light border border-white/10 text-white px-5 py-4 text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-grey-600"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-grey-400 text-xs uppercase tracking-[0.2em] mb-2">Subject</label>
                                <input
                                    type="text"
                                    value={formState.subject}
                                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                    className="w-full bg-noir-light border border-white/10 text-white px-5 py-4 text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-grey-600"
                                    placeholder="What is this about?"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-grey-400 text-xs uppercase tracking-[0.2em] mb-2">Message</label>
                                <textarea
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    rows={5}
                                    className="w-full bg-noir-light border border-white/10 text-white px-5 py-4 text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-grey-600 resize-none"
                                    placeholder="Your message..."
                                    required
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full bg-gold text-noir py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
                            >
                                <Send size={14} /> Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Business Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="font-display text-2xl text-white mb-8">Get in Touch</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium mb-1">Email</h4>
                                        <p className="text-grey-400 text-sm">hello@mysticalmagical.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium mb-1">Phone</h4>
                                        <p className="text-grey-400 text-sm">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium mb-1">Location</h4>
                                        <p className="text-grey-400 text-sm">123 Mystic Lane, Crystal City</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 border border-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Instagram size={18} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium mb-1">Instagram</h4>
                                        <p className="text-grey-400 text-sm">@mysticalmagical</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="border border-gold/10 rounded-xl p-8">
                            <h3 className="font-display text-xl text-white mb-6">Business Hours</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-grey-400">Monday - Friday</span>
                                    <span className="text-white">10:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-grey-400">Saturday</span>
                                    <span className="text-white">11:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-grey-400">Sunday</span>
                                    <span className="text-gold">By Appointment</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

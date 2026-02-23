"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Calendar, Heart, Shield, CircleDollarSign, Moon, Sun, Star, Eye, Flame, Wind, Crown } from "lucide-react";
import { BookingModal, SessionType } from "@/components/BookingModal";
import { SingleConstellation, SparkleOverlay } from "@/components/Constellation";

/* ────────────────── DATA ────────────────── */

const consultations = [
    { id: "c1", title: "Quick Insight Drop", duration: "12 min", price: 25, icon: Eye, desc: "A fast reading to get single questions answered." },
    { id: "c2", title: "Twin Flame Connection", duration: "25 min", price: 45, icon: Heart, desc: "Deep dive into romantic energies." },
    { id: "c3", title: "Full Celtic Cross", duration: "45 min", price: 80, icon: Star, desc: "A comprehensive traditional 10-card pull." },
    { id: "c4", title: "Career Path Mapping", duration: "35 min", price: 65, icon: Sun, desc: "Insights on business and work." },
    { id: "c5", title: "Shadow Work Dive", duration: "60 min", price: 110, icon: Moon, desc: "Addressing hidden blocks." },
    { id: "c6", title: "Past Life Regression", duration: "90 min", price: 150, icon: Eye, desc: "Glimpses into your karmic history." },
    { id: "c7", title: "Chakra Alignment", duration: "20 min", price: 40, icon: Sparkles, desc: "Energy center check up." },
    { id: "c8", title: "Astrology Birth Chart", duration: "55 min", price: 95, icon: Star, desc: "Planetary deep dive." },
    { id: "c9", title: "Year Ahead Forecast", duration: "40 min", price: 75, icon: Calendar, desc: "12-month trajectory reading." },
    { id: "c10", title: "Dream Interpretation", duration: "18 min", price: 30, icon: Moon, desc: "Decoding your subconscious messages." }
];

const loveSpells = [
    { id: "ls1", title: "Ultimate Attraction", price: 90, oldPrice: 150, discount: "40% OFF", icon: Heart, desc: "Magnetic energy pull to draw an admirer." },
    { id: "ls2", title: "Twin Flame Reunion", price: 110, oldPrice: 180, discount: "39% OFF", icon: Heart, desc: "Draw back your missing half." },
    { id: "ls3", title: "Self-Love Awakening", price: 50, oldPrice: 85, discount: "41% OFF", icon: Sparkles, desc: "Radiate confidence and charm." },
    { id: "ls4", title: "Karmic Cord Cutting", price: 75, oldPrice: 120, discount: "38% OFF", icon: Wind, desc: "Release past romantic attachments." },
];

const genericSpells = [
    { title: "Abundance Portal", price: 55, icon: CircleDollarSign, desc: "Money flow and career alignment" },
    { title: "Aura Protection Shield", price: 45, icon: Shield, desc: "Block negative entity attachments" },
    { title: "Mental Clarity Spell", price: 35, icon: Eye, desc: "Clear mental fog and find truth" },
    { title: "Creative Spark Ignition", price: 40, icon: Flame, desc: "Burst of passion and artistry" },
    { title: "Home Cleansing Ritual", price: 60, icon: Sparkles, desc: "Purify physical and astral space" },
    { title: "Luck Enhancer", price: 50, icon: Star, desc: "Turn the cosmic odds in your favor" },
];

// Generate 100+ spells organically based on generic seeds
const allSpells = Array.from({ length: 112 }, (_, i) => {
    const base = genericSpells[i % genericSpells.length];
    return {
        id: `sp-${i}`,
        title: `${base.title} ${Math.floor(i / genericSpells.length) > 0 ? `v${Math.floor(i / genericSpells.length) + 1}` : ''}`,
        price: base.price + (Math.floor(Math.random() * 5) * 5),
        icon: base.icon,
        desc: base.desc
    };
});

/* ────────────────── COMPONENT ────────────────── */

export default function ServicesPage() {
    const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Toggles
    const [activeTab, setActiveTab] = useState<"consultations" | "spells">("consultations");

    // Initial load from URL sync
    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const tab = params.get("tab");
            if (tab === "spells" || tab === "consultations") {
                setActiveTab(tab);
            }
        }
    }, []);

    const handleBookSession = (session: { id: string; title: string; duration: string; price: number }) => {
        setSelectedSession(session);
        setIsModalOpen(true);
    };

    return (
        <div className="pt-28 pb-20 bg-noir min-h-screen relative overflow-hidden">
            <SparkleOverlay />
            <SingleConstellation name="Orion" className="top-40 right-[10%] w-96 h-96 hidden lg:block opacity-40" />
            <SingleConstellation name="Cassiopeia" className="bottom-[10%] left-[5%] w-72 h-72 hidden md:block opacity-30" />

            <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-20">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-white tracking-wide mb-6">
                        Consultations & Spells
                    </h1>
                    <p className="text-gold text-sm sm:text-base tracking-[0.25em] uppercase font-light max-w-2xl mx-auto">
                        Discover profound clarity or shape your reality with over 100+ ancient enchantments.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 sm:gap-8 mb-16 border-b border-white/10 pb-1">
                    <button
                        onClick={() => setActiveTab("consultations")}
                        className={`text-sm tracking-[0.2em] uppercase transition-all pb-4 relative ${activeTab === "consultations" ? "text-gold font-medium" : "text-white/50 hover:text-white"
                            }`}
                    >
                        Consultations
                        {activeTab === "consultations" && (
                            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-gold" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("spells")}
                        className={`text-sm tracking-[0.2em] uppercase transition-all pb-4 relative ${activeTab === "spells" ? "text-gold font-medium" : "text-white/50 hover:text-white"
                            }`}
                    >
                        Spells (100+)
                        {activeTab === "spells" && (
                            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-gold" />
                        )}
                    </button>
                </div>

                <AnimatePresence mode="wait">
                    {/* ═══════════════ CONSULTATIONS TAB ═══════════════ */}
                    {activeTab === "consultations" && (
                        <motion.div
                            key="consultations"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {consultations.map((session, i) => {
                                    const Icon = session.icon;
                                    return (
                                        <motion.div
                                            key={session.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.05, duration: 0.4 }}
                                            className="border border-white/5 rounded-xl p-8 hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-500 bg-black/40 backdrop-blur-md flex flex-col items-center text-center group"
                                        >
                                            <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-500">
                                                <Icon strokeWidth={1} size={42} />
                                            </div>
                                            <div className="text-[10px] text-white/40 tracking-[0.3em] uppercase mb-2 border border-white/10 rounded-full px-3 py-1">
                                                {session.duration}
                                            </div>
                                            <h4 className="font-display text-2xl text-white mb-3 mt-3">{session.title}</h4>
                                            <p className="text-white/60 text-sm mb-8 flex-1 leading-relaxed">{session.desc}</p>

                                            <div className="w-full flex items-center justify-between border-t border-white/10 pt-6">
                                                <div className="text-2xl font-medium tracking-wider text-gold/90">
                                                    ${session.price}
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handleBookSession(session)}
                                                    className="bg-gold/10 border border-gold/30 text-gold px-6 py-2 rounded-lg text-xs tracking-wider uppercase hover:bg-gold hover:text-noir transition-all duration-300 flex items-center gap-2"
                                                >
                                                    <Calendar size={12} /> Book
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* ═══════════════ SPELLS TAB ═══════════════ */}
                    {activeTab === "spells" && (
                        <motion.div
                            key="spells"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Featured Love Spells Selection */}
                            <div className="mb-16">
                                <div className="flex items-center justify-center gap-4 mb-10">
                                    <div className="h-px bg-gradient-to-r from-transparent to-red-500/50 flex-1 max-w-[100px]" />
                                    <Crown className="text-red-500" size={24} />
                                    <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide text-center">
                                        Exclusive Love Spells
                                    </h2>
                                    <div className="h-px bg-gradient-to-l from-transparent to-red-500/50 flex-1 max-w-[100px]" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                                    {loveSpells.map((spell, i) => {
                                        const Icon = spell.icon;
                                        return (
                                            <motion.div
                                                key={spell.id}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                className="relative overflow-hidden border border-red-500/20 rounded-2xl p-8 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all duration-500 bg-gradient-to-b from-red-950/20 to-black backdrop-blur-md group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6"
                                            >
                                                {/* Discount Badge */}
                                                <div className="absolute top-4 right-[-30px] bg-red-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase py-1 px-10 rotate-45 z-10 shadow-lg">
                                                    {spell.discount}
                                                </div>

                                                <div className="w-16 h-16 rounded-full bg-red-950/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 border border-red-500/20">
                                                    <Icon strokeWidth={1.5} size={28} className="text-red-400" />
                                                </div>

                                                <div className="flex-1">
                                                    <h3 className="font-display text-2xl text-white mb-2">{spell.title}</h3>
                                                    <p className="text-white/60 text-sm mb-4 leading-relaxed">{spell.desc}</p>
                                                    <div className="flex items-center justify-center sm:justify-start gap-4 mb-4">
                                                        <span className="text-3xl font-medium tracking-wider text-red-400">
                                                            ${spell.price}
                                                        </span>
                                                        <span className="text-lg text-white/30 line-through">
                                                            ${spell.oldPrice}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="sm:self-end sm:mt-auto">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => handleBookSession({ id: spell.id, title: spell.title, duration: "Custom Cast", price: spell.price })}
                                                        className="bg-red-950/80 border border-red-500/50 text-white w-full sm:w-auto px-6 py-3 rounded-lg text-xs tracking-wider uppercase hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                                                    >
                                                        <Sparkles size={14} /> Claim Offer
                                                    </motion.button>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Divider line before all spells */}
                            <div className="w-full flex justify-center mb-16">
                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full max-w-2xl" />
                            </div>

                            {/* 100+ Spells Reveal */}
                            <div className="text-center">
                                <div className="mb-10">
                                    <h3 className="font-display text-3xl text-white mb-4">The Complete Spellbook</h3>
                                    <p className="text-white/50 text-sm max-w-xl mx-auto tracking-widest uppercase">
                                        Explore over 100+ custom-cast enchantments for abundance, protection, clarity, and life progression.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
                                    {allSpells.map((spell, i) => {
                                        const Icon = spell.icon;
                                        return (
                                            <motion.div
                                                key={spell.id}
                                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-50px" }}
                                                transition={{ delay: (i % 6) * 0.1, duration: 0.5 }}
                                                onClick={() => handleBookSession({ id: spell.id, title: spell.title, duration: "Custom Cast", price: spell.price })}
                                                className="border border-white/5 rounded-2xl p-8 hover:border-gold/40 hover:bg-gold/[0.04] transition-all duration-300 bg-black/40 backdrop-blur-md cursor-pointer group flex flex-col h-full shadow-lg hover:shadow-[0_0_30px_rgba(201,169,110,0.05)]"
                                            >
                                                <div className="flex items-center justify-between mb-6">
                                                    <div className="text-gold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 bg-gold/5 p-4 rounded-full border border-gold/10 group-hover:border-gold/30">
                                                        <Icon size={28} strokeWidth={1.5} />
                                                    </div>
                                                    <div className="text-2xl font-medium text-gold/90 tracking-wider">
                                                        ${spell.price}
                                                    </div>
                                                </div>
                                                <h4 className="font-display text-white text-2xl mb-3 group-hover:text-gold transition-colors">{spell.title}</h4>
                                                <p className="text-white/50 text-sm leading-relaxed flex-1">{spell.desc}</p>

                                                <div className="mt-6 w-full pt-6 border-t border-white/5">
                                                    <div className="w-full py-3 border border-gold/30 text-gold rounded-lg text-xs tracking-wider uppercase group-hover:bg-gold group-hover:text-noir transition-all duration-300 flex justify-center items-center gap-2 shadow-[0_0_15px_rgba(201,169,110,0.05)] group-hover:shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                                                        <Sparkles size={14} />
                                                        <span className="font-semibold">Claim Offer</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Booking Modal */}
            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                session={selectedSession}
            />
        </div>
    );
}

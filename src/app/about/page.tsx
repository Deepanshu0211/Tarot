"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function AboutPage() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
        },
    };

    return (
        <div className="bg-noir min-h-screen">
            {/* Header */}
            <div className="relative py-32 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1620052723659-158863f820bf?q=80&w=1920&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover opacity-20 portrait:opacity-30"
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
                        The Story of Elara
                    </h1>
                    <p className="text-gold text-sm tracking-[0.25em] uppercase">
                        A Guide to the Unknown
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-32">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
                >
                    <div className="space-y-8 max-w-lg">
                        <motion.div variants={item} className="space-y-6 text-grey-400 leading-relaxed text-[15px]">
                            <p className="text-lg text-white font-light italic">
                                "The cards were not mere painted cardboard, but keys—keys to unlock rooms inside the human psyche that we often keep sealed."
                            </p>
                            <p>
                                My journey into the tarot began over fifteen years ago in the quiet, rain-slicked streets of an old European city. What started as curiosity soon became a profound calling.
                            </p>
                            <p>
                                I do not believe the future is written in stone. Instead, the tarot acts as a mirror to your present energy, illuminating blockages and highlighting the most aligned pathways forward. My readings are grounded, empathetic, and designed to hand the agency back to you.
                            </p>
                            <p>
                                Here, we strip away the superstition and the neon signs. We focus on the core archetype. Whether you choose a quick insight session to start your week with clarity, or a deep dive into generational patterns, my commitment is to be a clear channel.
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="pt-8 border-t border-white/[0.05]">
                            <h3 className="text-xs uppercase tracking-[0.4em] text-gold mb-6 flex items-center gap-3">
                                <Sparkles size={14} /> Lineage & Ethics
                            </h3>
                            <ul className="space-y-4 text-grey-400 text-sm">
                                <li className="flex gap-4">
                                    <span className="text-gold">—</span>
                                    Readings are strictly confidential and trauma-informed.
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-gold">—</span>
                                    I will never predict health or legal outcomes.
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-gold">—</span>
                                    The goal is self-empowerment, not dependency.
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={item}
                        className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.05]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent z-10 opacity-80" />
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            src="https://images.unsplash.com/photo-1620052723659-158863f820bf?q=80&w=800&auto=format&fit=crop"
                            alt="Mystical Magic Artifact"
                            className="object-cover w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-[2000ms]"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* CTA Banner */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative py-24 text-center border-t border-white/[0.05]"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579705745172-132d73f4e2c0?q=80&w=1920&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/90 to-noir" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center">
                    <h2 className="font-display text-4xl md:text-5xl text-white mb-8">Ready for Clarity?</h2>
                    <Link href="/#booking">
                        <button className="bg-gold text-noir px-12 py-4 text-xs font-semibold tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-300">
                            Book a reading
                        </button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}

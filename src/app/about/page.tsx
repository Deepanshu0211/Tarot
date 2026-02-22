"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        <div className="space-y-16 pb-20">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-grey-500 hover:text-white transition-colors mt-6 text-xs uppercase tracking-[0.2em] font-medium"
            >
                <ArrowLeft size={16} /> Return Source
            </Link>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid md:grid-cols-2 gap-16 md:gap-24 items-center"
            >
                <div className="space-y-8 max-w-lg">
                    <motion.div variants={item} className="space-y-4">
                        <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tight">
                            A Guide <em className="text-grey-400 italic">to the Unknown</em>
                        </h1>
                    </motion.div>

                    <motion.div variants={item} className="space-y-6 text-grey-400 leading-relaxed text-[15px]">
                        <p>
                            My journey into the tarot began over fifteen years ago in the quiet, rain-slicked streets of an old European city. What started as curiosity soon became a profound calling. The cards were not mere painted cardboard, but keys—keys to unlock rooms inside the human psyche that we often keep sealed.
                        </p>
                        <p>
                            I do not believe the future is written in stone. Instead, the tarot acts as a mirror to your present energy, illuminating blockages and highlighting the most aligned pathways forward. My readings are grounded, empathetic, and designed to hand the agency back to you.
                        </p>
                        <p>
                            Here, we strip away the superstition and the neon signs. We focus on the core archetype. Whether you choose a quick insight session to start your week with clarity, or a deep dive into generational patterns, my commitment is to be a clear channel.
                        </p>
                    </motion.div>

                    <motion.div variants={item} className="pt-8 border-t border-white/[0.05]">
                        <h3 className="text-xs uppercase tracking-[0.4em] text-grey-600 mb-6">Lineage & Ethics</h3>
                        <ul className="space-y-4 text-grey-400 text-sm">
                            <li className="flex gap-4">
                                <span className="text-white">—</span>
                                Readings are strictly confidential and trauma-informed.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-white">—</span>
                                I will never predict health or legal outcomes.
                            </li>
                            <li className="flex gap-4">
                                <span className="text-white">—</span>
                                The goal is self-empowerment, not dependency.
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    variants={item}
                    className="relative aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-transparent to-transparent z-10 opacity-60" />
                    <motion.img
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1544027429-1ee06b99dece?q=80&w=800&auto=format&fit=crop"
                        alt="Elara in her studio"
                        className="object-cover w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-[2000ms]"
                    />
                </motion.div>
            </motion.div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="pt-20 text-center space-y-8"
            >
                <h2 className="font-display text-4xl font-light text-white">Ready for Clarity?</h2>
                <div className="flex justify-center">
                    <Link href="/#booking">
                        <button className="bg-white text-noir px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-grey-200 transition-colors">
                            Book a reading
                        </button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}

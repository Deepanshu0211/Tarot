"use client";

import { motion } from "framer-motion";
import { Moon, Star } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full">
            <div className="relative flex items-center justify-center w-32 h-32">
                {/* Outer Ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-24 h-24 rounded-full border border-gold/30 border-t-gold border-b-gold/10" />
                </motion.div>

                {/* Inner Ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="w-16 h-16 rounded-full border border-gold/20 border-r-gold border-l-gold/10" />
                </motion.div>

                {/* Center Icon */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 text-gold"
                >
                    <Moon size={28} className="fill-gold/20" />
                </motion.div>

                {/* Orbital Star 1 */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute w-28 h-28 pointer-events-none"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-gold">
                        <Star size={12} className="fill-gold" />
                    </div>
                </motion.div>

                {/* Orbital Star 2 */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-20 h-20 pointer-events-none"
                >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gold/60">
                        <Star size={8} className="fill-gold/60" />
                    </div>
                </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 flex flex-col items-center gap-2"
            >
                <p className="font-display text-gold-shimmer tracking-[0.3em] uppercase text-sm">
                    Divining
                </p>
                <div className="flex gap-1 mt-2">
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        className="w-1 h-1 rounded-full bg-gold"
                    />
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="w-1 h-1 rounded-full bg-gold"
                    />
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="w-1 h-1 rounded-full bg-gold"
                    />
                </div>
            </motion.div>
        </div>
    );
}

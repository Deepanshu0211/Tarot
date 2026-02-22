"use client";

import { motion } from "framer-motion";

export default function MysticalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-noir">
            {/* Subtle monochrome ambient glow */}
            <motion.div
                className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[120px]"
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[100px]"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
            />
        </div>
    );
}

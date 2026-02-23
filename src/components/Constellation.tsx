"use client";

import { motion } from "framer-motion";

const constellations = [
    {
        name: "Orion",
        label: "Orion (The Hunter)",
        points: [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 45, y: 50 }, { x: 50, y: 50 }, { x: 55, y: 50 }, { x: 30, y: 80 }, { x: 70, y: 80 }],
        lines: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]]
    },
    {
        name: "Ursa Major",
        label: "Ursa Major (Great Bear)",
        points: [{ x: 10, y: 50 }, { x: 30, y: 45 }, { x: 50, y: 55 }, { x: 60, y: 40 }, { x: 80, y: 45 }, { x: 90, y: 65 }, { x: 65, y: 70 }],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]]
    },
    {
        name: "Cassiopeia",
        label: "Cassiopeia (Queen)",
        points: [{ x: 10, y: 20 }, { x: 30, y: 60 }, { x: 50, y: 30 }, { x: 70, y: 70 }, { x: 90, y: 10 }],
        lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    {
        name: "Cygnus",
        label: "Cygnus (Swan)",
        points: [{ x: 50, y: 10 }, { x: 50, y: 30 }, { x: 50, y: 50 }, { x: 20, y: 50 }, { x: 80, y: 50 }, { x: 50, y: 70 }, { x: 50, y: 90 }],
        lines: [[0, 1], [1, 2], [3, 2], [4, 2], [2, 5], [5, 6]]
    }
];

export function SingleConstellation({ name, className }: { name: string, className: string }) {
    const c = constellations.find(x => x.name === name);
    if (!c) return null;
    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-50 hidden md:block">
            <motion.div className={`absolute ${className}`}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {c.lines.map((l, i) => (
                        <line key={i} x1={c.points[l[0]].x} y1={c.points[l[0]].y} x2={c.points[l[1]].x} y2={c.points[l[1]].y} stroke="rgba(201, 169, 110, 0.4)" strokeWidth="0.5" strokeDasharray="1 2" />
                    ))}
                    {c.points.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r={1.5} fill="#fff" className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                </svg>
                <div className="text-white/40 text-[9px] uppercase tracking-[0.3em] font-serif-heading text-center mt-2">{c.label}</div>
            </motion.div>
        </div>
    )
}

export function SparkleOverlay() {
    const stars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        size: Math.random() * 3 + 1,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.8, 1.3, 0.8] }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: star.delay, ease: "easeInOut" }}
                />
            ))}
        </div>
    );
}

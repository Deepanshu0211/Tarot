"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
    {
        id: "1",
        title: "The Power of Amethyst: More Than Just a Pretty Crystal",
        excerpt: "Discover why amethyst has been revered for centuries as a stone of spiritual protection and purification...",
        image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=800&auto=format&fit=crop",
        date: "Feb 18, 2026",
        readTime: "5 min read",
        author: "Elara",
        category: "Crystals",
    },
    {
        id: "2",
        title: "Beginner's Guide to Tarot: Your First Reading",
        excerpt: "Starting your tarot journey? Here's everything you need to know about pulling your first cards...",
        image: "https://images.unsplash.com/photo-1632731802951-4091ebd7edb1?q=80&w=800&auto=format&fit=crop",
        date: "Feb 12, 2026",
        readTime: "8 min read",
        author: "Elara",
        category: "Tarot",
    },
    {
        id: "3",
        title: "Full Moon Rituals for Manifestation",
        excerpt: "Harness the powerful energy of the full moon to set intentions and manifest your deepest desires...",
        image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?q=80&w=800&auto=format&fit=crop",
        date: "Feb 5, 2026",
        readTime: "6 min read",
        author: "Elara",
        category: "Rituals",
    },
    {
        id: "4",
        title: "The Art of Smoke Cleansing Your Space",
        excerpt: "Learn the ancient practice of smudging and how to properly cleanse your home of stagnant energy...",
        image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=800&auto=format&fit=crop",
        date: "Jan 28, 2026",
        readTime: "4 min read",
        author: "Elara",
        category: "Rituals",
    },
    {
        id: "5",
        title: "Understanding the Celtic Cross Spread",
        excerpt: "A deep dive into one of the most comprehensive and widely-used tarot spreads in divination...",
        image: "https://images.unsplash.com/photo-1632731803004-58e1136bfe8f?q=80&w=800&auto=format&fit=crop",
        date: "Jan 20, 2026",
        readTime: "7 min read",
        author: "Elara",
        category: "Tarot",
    },
    {
        id: "6",
        title: "Candle Magick: Colors and Their Meanings",
        excerpt: "Each candle color holds a unique vibration. Learn which colors align with your spiritual intentions...",
        image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=800&auto=format&fit=crop",
        date: "Jan 14, 2026",
        readTime: "5 min read",
        author: "Elara",
        category: "Magick",
    },
];

export default function BlogPage() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="bg-noir min-h-screen">
            {/* Header */}
            <div className="relative py-28 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?q=80&w=1920&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover opacity-30"
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
                        The Blog
                    </h1>
                    <p className="text-gold text-sm tracking-[0.25em] uppercase">
                        Mystical Insights & Spiritual Guidance
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={item}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5 border border-white/5">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="space-y-3">
                                <span className="text-gold text-[10px] uppercase tracking-[0.3em] font-semibold">
                                    {post.category}
                                </span>
                                <h3 className="font-display text-xl text-white group-hover:text-gold transition-colors leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-grey-500 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-grey-600 text-xs pt-2">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

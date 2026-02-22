"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowDownUp, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const categories = ["All", "Crystals", "Perfumes", "Tarot Tools", "Incense"];

const allProducts = [
    { id: "1", name: "Amethyst Crystal Cluster", price: 45.00, category: "Crystals", image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=800&auto=format&fit=crop" },
    { id: "2", name: "Rose Quartz Wand", price: 32.50, category: "Crystals", image: "https://images.unsplash.com/photo-1567360216447-4e6f966ce1e9?q=80&w=800&auto=format&fit=crop" },
    { id: "3", name: "Classic Rider-Waite Tarot", price: 25.00, category: "Tarot Tools", image: "https://images.unsplash.com/photo-1632731802951-4091ebd7edb1?q=80&w=800&auto=format&fit=crop" },
    { id: "4", name: "Lavender & Sage Smudge", price: 18.00, category: "Incense", image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=800&auto=format&fit=crop" },
    { id: "5", name: "Mystic Moon Perfume Oil", price: 38.00, category: "Perfumes", image: "https://images.unsplash.com/photo-1595425959632-44f2b9ff9b2a?q=80&w=800&auto=format&fit=crop" },
    { id: "6", name: "Obsidian Scrying Mirror", price: 55.00, category: "Tarot Tools", image: "https://images.unsplash.com/photo-1610488730263-d3ac346b0b57?q=80&w=800&auto=format&fit=crop" },
];

function ProductsContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "All";
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("Featured");
    const { addItem } = useCart();

    // If URL changes, update the internal state
    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat && categories.includes(cat)) {
            setActiveCategory(cat);
        }
    }, [searchParams]);

    const filteredAndSortedProducts = [...allProducts]
        .filter(p => activeCategory === "All" || p.category === activeCategory)
        .sort((a, b) => {
            if (sortBy === "Price: Low to High") return a.price - b.price;
            if (sortBy === "Price: High to Low") return b.price - a.price;
            return 0; // Featured (default order)
        });

    return (
        <div className="bg-noir min-h-screen">
            {/* Header */}
            <div className="relative py-28 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=1920&auto=format&fit=crop"
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
                        The Shop
                    </h1>
                    <p className="text-gold text-sm tracking-[0.25em] uppercase">
                        Curated Spiritual Tools for Your Journey
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-32">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all ${activeCategory === cat
                                    ? "bg-gold text-noir"
                                    : "bg-noir-light border border-white/10 text-grey-400 hover:text-white hover:border-gold/40"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative shrink-0 w-48">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <ArrowDownUp size={14} className="text-gold" />
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full bg-noir-light border border-white/10 text-white text-xs tracking-[0.15em] uppercase font-medium py-3.5 pl-10 pr-8 appearance-none focus:outline-none focus:border-gold/40 cursor-pointer transition-colors"
                        >
                            <option value="Featured" className="bg-noir text-white">Featured</option>
                            <option value="Price: Low to High" className="bg-noir text-white">Price: Low to High</option>
                            <option value="Price: High to Low" className="bg-noir text-white">Price: High to Low</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    <AnimatePresence>
                        {filteredAndSortedProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/products/${product.id}`}>
                                    <div className="h-full flex flex-col group cursor-pointer border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-300 bg-noir-light">
                                        <div className="aspect-[4/5] w-full relative overflow-hidden bg-black">
                                            <img src={product.image} alt={product.name} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                                        </div>
                                        <div className="p-5 space-y-2">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <div className="text-[10px] text-gold uppercase tracking-[0.25em] font-semibold mb-1">{product.category}</div>
                                                    <h3 className="text-sm font-display text-white line-clamp-2 leading-snug">{product.name}</h3>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                                <span className="text-gold text-sm font-medium">${product.price.toFixed(2)}</span>
                                                <motion.button
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
                                                    className="p-2 -mr-2 text-grey-500 hover:text-gold transition-colors"
                                                >
                                                    <ShoppingBag size={18} strokeWidth={1.5} />
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-noir flex items-center justify-center text-gold text-xs tracking-widest uppercase">Consulting the cards...</div>}>
            <ProductsContent />
        </Suspense>
    );
}

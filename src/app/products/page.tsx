"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowDownUp } from "lucide-react";
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
        <div className="space-y-10">
            <div className="mt-6 md:mt-12">
                <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-3">Shop</h1>
                <p className="text-grey-500 text-sm">Curated spiritual tools for your journey.</p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${activeCategory === cat
                                ? "bg-white text-noir"
                                : "bg-white/[0.04] text-grey-500 hover:text-white hover:bg-white/[0.08]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative shrink-0 w-48">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <ArrowDownUp size={14} className="text-grey-500" />
                    </div>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/[0.08] text-white text-xs tracking-wider uppercase font-medium rounded-lg py-2.5 pl-9 pr-8 appearance-none focus:outline-none focus:border-grey-500 cursor-pointer"
                    >
                        <option value="Featured" className="bg-noir text-white">Featured</option>
                        <option value="Price: Low to High" className="bg-noir text-white">Price: Low to High</option>
                        <option value="Price: High to Low" className="bg-noir text-white">Price: High to Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg className="w-4 h-4 text-grey-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            </div>

            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
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
                                <GlassCard className="h-full flex flex-col p-0 group cursor-pointer hover:bg-white/[0.04] transition-colors">
                                    <div className="aspect-[4/5] w-full relative overflow-hidden rounded-t-xl bg-grey-900">
                                        <img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4 space-y-1.5">
                                        <div className="text-[10px] text-grey-600 uppercase tracking-[0.2em]">{product.category}</div>
                                        <h3 className="text-sm text-grey-300 line-clamp-2">{product.name}</h3>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-white text-sm">${product.price.toFixed(2)}</span>
                                            <motion.button
                                                whileTap={{ scale: 0.9 }}
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
                                                className="p-2 text-grey-600 hover:text-white transition-colors"
                                            >
                                                <ShoppingBag size={16} strokeWidth={1.5} />
                                            </motion.button>
                                        </div>
                                    </div>
                                </GlassCard>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

export default function ProductsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-grey-500 text-xs tracking-widest uppercase">Consulting the cards...</div>}>
            <ProductsContent />
        </Suspense>
    );
}

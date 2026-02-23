"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowDownUp, ArrowLeft, Filter, Search, LayoutGrid, List } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { SingleConstellation, SparkleOverlay } from "@/components/Constellation";

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
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
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
        .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
                    <SparkleOverlay />
                    <SingleConstellation name="Cassiopeia" className="bottom-0 left-10 w-64 h-64 opacity-50" />
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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* ════════ SIDEBAR FILTER ════════ */}
                    <div className="w-full lg:w-64 shrink-0 lg:sticky lg:top-28 self-start flex flex-col gap-5">
                        {/* Desktop Search */}
                        <div className="bg-noir-card/50 border border-white/5 rounded-sm p-4 lg:p-5 shadow-lg backdrop-blur-md hidden lg:block">
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                    <Search size={14} className="text-gold" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search mystics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-noir border border-white/10 text-white text-xs tracking-wider placeholder:text-grey-600 font-medium py-3 pl-9 pr-3 rounded-sm appearance-none focus:outline-none focus:border-gold/40 transition-colors"
                                />
                            </div>
                        </div>

                        <div className="bg-noir-card/50 border border-white/5 rounded-sm p-5 shadow-lg backdrop-blur-md">
                            <h3 className="text-white font-display text-xl mb-4 flex items-center gap-2">
                                <Filter size={16} className="text-gold" /> Categories
                            </h3>
                            <style dangerouslySetInnerHTML={{
                                __html: `
                                .no-scroll::-webkit-scrollbar { display: none; }
                                .no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                            `}} />
                            {/* Mobile: Horizontal Scroll, Desktop: Vertical List */}
                            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 snap-x snap-mandatory no-scroll">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`whitespace-nowrap px-4 py-2.5 rounded-sm text-xs tracking-[0.2em] uppercase font-medium transition-all text-left ${activeCategory === cat
                                            ? "bg-gold text-noir shadow-[0_0_15px_rgba(201,169,110,0.3)]"
                                            : "bg-white/5 border border-white/5 text-grey-400 hover:text-white hover:border-gold/30 hover:bg-white/10"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mobile: Top Bar Controls (Search + View Toggle + Sort) */}
                        <div className="lg:hidden flex flex-col gap-3 mb-4">
                            {/* Mobile Search */}
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                    <Search size={14} className="text-gold" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search mystics..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-noir-card/50 border border-white/5 text-white text-xs tracking-wider placeholder:text-grey-600 font-medium py-3.5 pl-10 pr-4 shadow-lg backdrop-blur-md rounded-sm appearance-none focus:outline-none focus:border-gold/40 transition-colors"
                                />
                            </div>

                            <div className="flex gap-3">
                                {/* Sort Dropdown */}
                                <div className="relative flex-1">
                                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                        <ArrowDownUp size={14} className="text-gold" />
                                    </div>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full bg-noir-card/50 border border-white/5 text-white text-xs tracking-[0.15em] uppercase font-medium py-3.5 pl-10 pr-8 shadow-lg backdrop-blur-md rounded-sm appearance-none focus:outline-none focus:border-gold/40 cursor-pointer transition-colors"
                                    >
                                        <option value="Featured" className="bg-noir text-white">Sort: Featured</option>
                                        <option value="Price: Low to High" className="bg-noir text-white">Price: Low to High</option>
                                        <option value="Price: High to Low" className="bg-noir text-white">Price: High to Low</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>

                                {/* Mobile View Toggle */}
                                <div className="flex bg-noir-card/50 border border-white/5 rounded-sm overflow-hidden shrink-0 shadow-lg">
                                    <button onClick={() => setViewMode("grid")} className={`p-3.5 transition-colors ${viewMode === "grid" ? "bg-white/10 text-gold shadow-[inset_0_0_10px_rgba(201,169,110,0.1)]" : "text-grey-500 hover:text-white"}`} aria-label="Grid Layout">
                                        <LayoutGrid size={16} />
                                    </button>
                                    <button onClick={() => setViewMode("list")} className={`p-3.5 transition-colors ${viewMode === "list" ? "bg-white/10 text-gold shadow-[inset_0_0_10px_rgba(201,169,110,0.1)]" : "text-grey-500 hover:text-white"}`} aria-label="List Layout">
                                        <List size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ════════ PRODUCT GRID ════════ */}
                    <div className="flex-1 w-full relative min-h-[500px]">

                        {/* Desktop: Top Bar (Result Count + Sort) */}
                        <div className="hidden lg:flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                            <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-medium">
                                Showing {filteredAndSortedProducts.length} Results
                            </span>

                            <div className="flex items-center gap-6">
                                {/* Desktop View Toggle */}
                                <div className="flex items-center gap-1 bg-white/[0.02] p-1 rounded-sm border border-white/5">
                                    <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-sm transition-colors ${viewMode === "grid" ? "bg-white/10 text-gold shadow-sm" : "text-grey-500 hover:text-white"}`} aria-label="Grid view">
                                        <LayoutGrid size={15} />
                                    </button>
                                    <button onClick={() => setViewMode("list")} className={`p-1.5 rounded-sm transition-colors ${viewMode === "list" ? "bg-white/10 text-gold shadow-sm" : "text-grey-500 hover:text-white"}`} aria-label="List view">
                                        <List size={15} />
                                    </button>
                                </div>

                                <div className="h-5 w-px bg-white/10"></div>

                                <div className="relative shrink-0 w-48">
                                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                        <ArrowDownUp size={12} className="text-gold" />
                                    </div>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full bg-transparent border-none outline-none text-white text-[10px] tracking-[0.2em] uppercase font-medium py-2 pl-8 pr-6 appearance-none cursor-pointer transition-colors"
                                    >
                                        <option value="Featured" className="bg-noir text-white">Sort: Featured</option>
                                        <option value="Price: Low to High" className="bg-noir text-white">Price: Low to High</option>
                                        <option value="Price: High to Low" className="bg-noir text-white">Price: High to Low</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                                        <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Container (Dynamically Grid or List layout) */}
                        <motion.div
                            layout
                            className={viewMode === "list"
                                ? "flex flex-col gap-4"
                                : "grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                            }
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredAndSortedProducts.map((product, index) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.25, 1, 0.5, 1],
                                            delay: index * 0.03,
                                            layout: { duration: 0.4, ease: "anticipate" }
                                        }}
                                        className={viewMode === "list" ? "" : "h-full"}
                                    >
                                        <Link href={`/products/${product.id}`} className="h-full block">
                                            <div className={`h-full flex ${viewMode === "list" ? "flex-row h-[140px] md:h-[200px]" : "flex-col"} group cursor-pointer border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 bg-black/40 backdrop-blur-sm shadow-md`}>

                                                {/* Image Section */}
                                                <div className={`${viewMode === "list" ? "w-[110px] sm:w-[140px] md:w-[200px] border-r" : "w-full border-b"} aspect-[4/5] sm:aspect-auto shrink-0 relative overflow-hidden bg-black border-white/5`}>
                                                    <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                                                    <img src={product.image} alt={product.name} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-transform duration-700 ease-in-out group-hover:scale-110" />
                                                </div>

                                                {/* Content Section */}
                                                <div className={`p-3 sm:p-5 flex-1 flex flex-col ${viewMode === "list" ? "justify-center gap-1 sm:gap-2" : "justify-between"}`}>
                                                    <div>
                                                        <div className="text-[9px] text-gold uppercase tracking-[0.25em] font-medium mb-1.5">{product.category}</div>
                                                        <h3 className={`${viewMode === "list" ? "text-sm sm:text-lg md:text-xl" : "text-xs sm:text-sm"} font-display text-white line-clamp-2 md:line-clamp-none leading-snug group-hover:text-gold transition-colors`}>{product.name}</h3>
                                                    </div>

                                                    <div className={`mt-auto pt-3 border-t border-white/5 flex ${viewMode === "list" ? "flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mt-2 sm:pt-4" : "justify-between items-center"}`}>
                                                        <span className={`text-white font-medium tracking-widest ${viewMode === "list" ? "text-sm sm:text-lg text-grey-300" : "text-sm text-grey-300"}`}>${product.price.toFixed(2)}</span>
                                                        <motion.button
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
                                                            className={`${viewMode === "list" ? "w-full sm:w-auto bg-gold text-noir py-2 px-4 rounded-sm hover:bg-gold-light shadow-lg flex justify-center items-center gap-2" : "p-2 -mr-2 text-grey-500 hover:text-gold"} transition-colors text-xs font-bold tracking-wider uppercase`}
                                                        >
                                                            <ShoppingBag size={14} strokeWidth={1.5} className={viewMode === "grid" ? "w-[18px] h-[18px]" : ""} />
                                                            {viewMode === "list" && <span className="">Add to Cart</span>}
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredAndSortedProducts.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="absolute inset-0 flex items-center justify-center text-center mt-20"
                            >
                                <p className="text-white/40 text-sm tracking-[0.2em] font-serif-heading uppercase">No mystics found in this category.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
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

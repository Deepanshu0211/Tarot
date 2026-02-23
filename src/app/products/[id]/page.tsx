"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SingleConstellation, SparkleOverlay } from "@/components/Constellation";

const allProducts = [
    { id: "1", name: "Amethyst Crystal Cluster", price: 45.00, category: "Crystals", image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=800&auto=format&fit=crop", description: "Enhance your intuition and spiritual awareness with this premium grade Amethyst cluster. Perfect for meditation spaces and altars.", benefits: ["Enhances intuition", "Promotes calmness", "Clears negative energy"] },
    { id: "2", name: "Rose Quartz Wand", price: 32.50, category: "Crystals", image: "https://images.unsplash.com/photo-1567360216447-4e6f966ce1e9?q=80&w=800&auto=format&fit=crop", description: "A beautiful rose quartz wand designed for directing heart energy. Used for emotional healing and attracting love.", benefits: ["Attracts unconditional love", "Heals emotional wounds", "Encourages self-forgiveness"] },
    { id: "3", name: "Classic Rider-Waite Tarot", price: 25.00, category: "Tarot Tools", image: "https://images.unsplash.com/photo-1632731802951-4091ebd7edb1?q=80&w=800&auto=format&fit=crop", description: "The standard deck for beginners and experts alike. Rich in symbolism and esoteric meaning.", benefits: ["Classic imagery", "Easy to learn", "Deep esoteric symbolism"] },
    { id: "4", name: "Lavender & Sage Smudge", price: 18.00, category: "Incense", image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=800&auto=format&fit=crop", description: "Ethically sourced white sage bundled with organic lavender for a calming and purifying smoke.", benefits: ["Clears stagnant energy", "Promotes restful sleep", "Soothes the mind"] },
    { id: "5", name: "Mystic Moon Perfume Oil", price: 38.00, category: "Perfumes", image: "https://images.unsplash.com/photo-1595425959632-44f2b9ff9b2a?q=80&w=800&auto=format&fit=crop", description: "A captivating blend of jasmine, sandalwood, and dark musk. Anointed under the full moon.", benefits: ["Aligns with lunar cycles", "Long-lasting mystical scent", "Nourishing jojoba base"] },
    { id: "6", name: "Obsidian Scrying Mirror", price: 55.00, category: "Tarot Tools", image: "https://images.unsplash.com/photo-1606132791409-ae33a76fc342?q=80&w=800&auto=format&fit=crop", description: "Black obsidian polished to a high mirror finish. An ancient tool used for divination and spirit communication.", benefits: ["Powerful psychic protection", "Excellent for scrying", "Grounds the user"] },
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const router = useRouter();
    const { addItem } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const product = allProducts.find(p => p.id === resolvedParams.id);

    if (!product) {
        return <div className="text-center text-grey-500 mt-20 text-sm">Product not found.</div>;
    }

    const handleAddToCart = () => {
        setIsAdding(true);
        addItem(product);
        setTimeout(() => setIsAdding(false), 600);
    };

    const suggestedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-noir pt-32 pb-24 px-5 sm:px-8 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <SparkleOverlay />
                <SingleConstellation name="Cygnus" className="top-20 right-20 w-80 h-80 opacity-50" />
                <SingleConstellation name="Ursa Major" className="bottom-40 left-10 w-96 h-96 opacity-30" />
            </div>

            <div className="max-w-6xl mx-auto space-y-10 relative z-10">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gold hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-medium"
                >
                    <ArrowLeft size={16} /> Back
                </button>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full aspect-[4/5] md:aspect-auto md:h-[600px] rounded-xl overflow-hidden"
                    >
                        <img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <div>
                            <div className="text-[10px] text-grey-600 uppercase tracking-[0.3em] mb-3">
                                {product.category}
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl font-light text-white mb-5 leading-tight">{product.name}</h1>
                            <span className="text-2xl font-light tracking-wide text-white">${product.price.toFixed(2)}</span>
                        </div>

                        <GlassCard className="space-y-3">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-grey-500">Description</h3>
                            <p className="text-grey-400 leading-relaxed text-[15px]">{product.description}</p>
                        </GlassCard>

                        <div className="space-y-4">
                            <h3 className="text-xs uppercase tracking-[0.2em] text-grey-500">Spiritual Benefits</h3>
                            <ul className="space-y-3">
                                {product.benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-grey-400 text-[15px]">
                                        <div className="w-1 h-1 rounded-full bg-grey-600 flex-shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 pt-4">
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={handleAddToCart}
                                className={`w-full py-4 rounded-lg flex items-center justify-center gap-3 text-sm font-medium tracking-wider uppercase transition-all ${isAdding
                                    ? "bg-grey-800 text-white"
                                    : "bg-white text-noir hover:bg-grey-200"
                                    }`}
                            >
                                <ShoppingBag size={16} />
                                {isAdding ? "Added" : "Add to Cart"}
                            </motion.button>

                            <div className="flex justify-center gap-8 text-[11px] text-grey-600 mt-2 uppercase tracking-wider">
                                <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Secure</span>
                                <span className="flex items-center gap-1.5"><Truck size={14} /> Free Shipping</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ═══════════════ SUGGESTED PRODUCTS ═══════════════ */}
                <div className="max-w-6xl mx-auto mt-32 border-t border-white/10 pt-20">
                    <h2 className="font-display text-3xl text-white text-center tracking-wide mb-12">
                        You Might Also Like
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suggestedProducts.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="h-full"
                            >
                                <Link href={`/products/${item.id}`} className="block h-full">
                                    <div className="h-full flex flex-col group cursor-pointer border border-white/5 rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 bg-noir-card/40 backdrop-blur-sm">
                                        <div className="aspect-[4/5] w-full relative overflow-hidden bg-black">
                                            <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                                            <img src={item.image} alt={item.name} className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-transform duration-700 ease-in-out group-hover:scale-110" />
                                        </div>
                                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                                            <div>
                                                <div className="text-[9px] sm:text-[10px] text-gold uppercase tracking-[0.25em] font-medium mb-1.5">{item.category}</div>
                                                <h3 className="text-xs sm:text-sm font-display text-white line-clamp-2 leading-snug group-hover:text-gold transition-colors">{item.name}</h3>
                                            </div>
                                            <div className="flex justify-between items-center pt-3 border-t border-white/5">
                                                <span className="text-grey-300 text-sm tracking-widest">${item.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

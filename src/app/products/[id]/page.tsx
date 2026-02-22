"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowLeft, ShieldCheck, Truck } from "lucide-react";
import { useRouter } from "next/navigation";

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

    return (
        <div className="space-y-10 pb-10">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-grey-600 hover:text-white transition-colors mt-4 md:mt-8 text-sm"
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
                        <span className="font-display text-2xl font-light text-white">${product.price.toFixed(2)}</span>
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
        </div>
    );
}

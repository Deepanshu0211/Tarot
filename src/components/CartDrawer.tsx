"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Plus, Minus, ArrowRight, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, items, removeItem, updateQuantity, total } = useCart();

    const FREE_SHIPPING_THRESHOLD = 100;
    const progressPercentage = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
    const amountLeft = Math.max(FREE_SHIPPING_THRESHOLD - total, 0);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 cursor-pointer"
                    />
                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="fixed top-0 right-0 h-full w-[90%] md:w-[420px] bg-noir-light border-l border-white/[0.05] z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/[0.05] bg-noir">
                            <h2 className="font-display text-2xl font-light text-white flex items-center gap-3">
                                <ShoppingBag size={20} className="text-gold" /> Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-grey-400 hover:text-white"
                                aria-label="Close Cart"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Free Shipping Progress */}
                        {items.length > 0 && (
                            <div className="px-6 py-5 bg-noir-card/50 border-b border-white/[0.05]">
                                <div className="flex justify-between text-xs tracking-[0.1em] mb-3">
                                    <span className="text-white">
                                        {amountLeft > 0 ? (
                                            <>You're <span className="font-bold text-gold">${amountLeft.toFixed(2)}</span> away from Free Shipping</>
                                        ) : (
                                            <span className="text-gold flex items-center gap-1.5"><ShieldCheck size={14} /> You unlocked Free Shipping!</span>
                                        )}
                                    </span>
                                </div>
                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPercentage}%` }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="h-full bg-gold rounded-full"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Cart Items Area */}
                        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
                            {items.length === 0 ? (
                                <div className="text-center py-16 flex flex-col items-center justify-center h-full">
                                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                        <ShoppingBag size={32} strokeWidth={1} className="text-grey-600" />
                                    </div>
                                    <h3 className="font-display text-xl text-white mb-2">Your Cart is Empty</h3>
                                    <p className="text-sm text-grey-500 mb-8 max-w-[250px] leading-relaxed">Discover mystic tools, tarot decks, and curated crystals to empower your journey.</p>
                                    <Link href="/products" onClick={() => setIsCartOpen(false)}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-gold text-noir px-8 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-colors flex items-center gap-2"
                                        >
                                            Shop Now <ArrowRight size={14} />
                                        </motion.button>
                                    </Link>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex gap-4 p-4 rounded-xl border border-white/5 bg-black/40 items-center relative group"
                                        >
                                            <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md border border-white/10">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            </div>

                                            <div className="flex-1 min-w-0 pr-8">
                                                <h3 className="text-sm font-display text-white truncate mb-1">{item.name}</h3>
                                                <p className="text-gold text-sm font-medium mb-3">${item.price.toFixed(2)}</p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center gap-4 bg-white/5 w-fit rounded-sm px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-grey-400 hover:text-white transition-colors" disabled={item.quantity <= 1}>
                                                        <Minus size={12} />
                                                    </button>
                                                    <span className="text-xs text-white w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-grey-400 hover:text-white transition-colors">
                                                        <Plus size={12} />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="absolute top-4 right-4 p-1.5 text-grey-600 hover:text-red-400 hover:bg-white/5 rounded-full transition-all"
                                                aria-label="Remove Item"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>

                        {/* Footer Checkout */}
                        {items.length > 0 && (
                            <div className="bg-noir p-6 border-t border-white/[0.05] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10">
                                <div className="space-y-3 mb-6 relative">
                                    <div className="flex justify-between items-center text-sm text-grey-400">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-grey-400">
                                        <span>Shipping</span>
                                        <span>{amountLeft > 0 ? "Calculated at checkout" : <span className="text-gold">FREE</span>}</span>
                                    </div>
                                    <div className="h-px bg-white/10 my-1" />
                                    <div className="flex justify-between items-end">
                                        <span className="text-sm text-white uppercase tracking-wider font-medium">Total</span>
                                        <span className="text-3xl font-medium tracking-wider text-white">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-white text-noir text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gold transition-colors shadow-lg"
                                    onClick={() => alert("Proceeding to secure checkout")}
                                >
                                    Proceed to Checkout
                                </motion.button>
                                <div className="mt-4 flex justify-center text-[10px] text-grey-600 uppercase tracking-widest gap-2">
                                    <ShieldCheck size={12} /> Secure Encrypted Checkout
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, items, removeItem, total } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 cursor-pointer"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 250 }}
                        className="fixed top-0 right-0 h-full w-[90%] md:w-[380px] bg-noir border-l border-white/[0.06] z-50 p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/[0.06]">
                            <h2 className="font-display text-xl font-light tracking-wide text-white flex items-center gap-2">
                                <ShoppingBag size={18} strokeWidth={1.5} /> Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-grey-500"
                                aria-label="Close Cart"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                            {items.length === 0 ? (
                                <div className="text-center text-grey-600 py-16 text-sm">
                                    Your cart is empty.
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-3 rounded-lg border border-white/[0.04] bg-white/[0.02] items-center">
                                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md bg-grey-900" />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-medium truncate text-grey-200">{item.name}</h3>
                                            <p className="text-white text-sm">${item.price}</p>
                                            <p className="text-xs text-grey-600">Qty: {item.quantity}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="p-2 text-grey-600 hover:text-white transition-colors"
                                            aria-label="Remove Item"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="pt-6 border-t border-white/[0.06] mt-auto">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm text-grey-500 uppercase tracking-wider">Total</span>
                                <span className="text-xl font-display font-light text-white">${total.toFixed(2)}</span>
                            </div>
                            <button
                                className="w-full py-3.5 bg-white text-noir text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-grey-200 transition-colors disabled:opacity-30"
                                onClick={() => alert("Checkout flow — mock feature")}
                                disabled={items.length === 0}
                            >
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

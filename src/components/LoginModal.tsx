"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-noir/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#111] border border-white/[0.08] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-grey-500 hover:text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-8 md:p-10 space-y-8">
                                <div className="text-center space-y-2">
                                    <h2 className="font-display text-3xl font-light text-white">
                                        {isLogin ? "Welcome Back" : "Join the Circle"}
                                    </h2>
                                    <p className="text-grey-500 text-sm">
                                        {isLogin ? "Enter your credentials to access your account." : "Create an account to track orders and bookings."}
                                    </p>
                                </div>

                                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-500" size={18} />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-noir border border-white/[0.08] rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-grey-500 transition-colors"
                                                required
                                            />
                                        </div>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-500" size={18} />
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                className="w-full bg-noir border border-white/[0.08] rounded-xl py-3 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-grey-500 transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {isLogin && (
                                        <div className="flex justify-end">
                                            <button type="button" className="text-[11px] text-grey-400 hover:text-white uppercase tracking-wider">
                                                Forgot Password?
                                            </button>
                                        </div>
                                    )}

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full bg-white text-noir py-3.5 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-grey-200 transition-colors"
                                    >
                                        {isLogin ? "Sign In" : "Create Account"}
                                    </motion.button>
                                </form>

                                <div className="text-center">
                                    <button
                                        onClick={() => setIsLogin(!isLogin)}
                                        className="text-grey-500 hover:text-white text-sm transition-colors"
                                    >
                                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

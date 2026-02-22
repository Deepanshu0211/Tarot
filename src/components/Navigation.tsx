"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Settings, ShoppingBag, User, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import LoginModal from "./LoginModal";
import clsx from "clsx";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Sparkles },
    { name: "Shop", href: "/products", icon: Sparkles },
    { name: "Admin", href: "/admin", icon: Settings },
];

export default function Navigation() {
    const pathname = usePathname();
    const { items, setIsCartOpen } = useCart();
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <nav className="flex justify-center fixed top-4 md:top-8 w-full z-40 px-4 pointer-events-none">
                <div className="bg-noir/80 backdrop-blur-md border border-white/[0.08] rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between w-full max-w-[95vw] md:max-w-max md:gap-12 shadow-2xl pointer-events-auto relative">
                    <Link href="/" className="font-display text-xl font-light tracking-[0.1em] text-white hover:text-grey-300 transition-colors">
                        Elara
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative text-[11px] uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 ${pathname === item.href ? "text-white font-medium" : "text-grey-500 hover:text-white"
                                    }`}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.div
                                        layoutId="desktop-nav-indicator"
                                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop & Mobile Shared Actions */}
                    <div className="flex items-center gap-2 md:gap-2">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-grey-500 hover:text-white transition-all hover:-translate-y-0.5"
                            aria-label="Open Cart"
                        >
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            <AnimatePresence>
                                {cartCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute top-0 right-0 bg-white text-noir text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
                                    >
                                        {cartCount}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                        <button
                            onClick={() => setIsLoginOpen(true)}
                            className="hidden md:flex p-2 text-grey-500 hover:text-white transition-all hover:-translate-y-0.5 relative"
                            aria-label="Login"
                        >
                            <User size={18} strokeWidth={1.5} />
                        </button>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-grey-500 hover:text-white transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                        </button>
                    </div>

                    {/* Mobile Dropdown Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-[calc(100%+12px)] left-0 w-full bg-[#111] border border-white/[0.08] rounded-3xl p-6 shadow-2xl flex flex-col gap-6 md:hidden overflow-hidden"
                            >
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={clsx(
                                            "flex items-center gap-4 text-xs uppercase tracking-[0.2em] transition-colors rounded-lg p-2 -m-2",
                                            pathname === item.href ? "text-white bg-white/[0.04]" : "text-grey-400 hover:text-white"
                                        )}
                                    >
                                        <item.icon size={18} strokeWidth={1.5} />
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="h-px w-full bg-white/[0.05]" />
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsLoginOpen(true);
                                    }}
                                    className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-grey-400 hover:text-white transition-colors rounded-lg p-2 -m-2"
                                >
                                    <User size={18} strokeWidth={1.5} />
                                    Account & Login
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}

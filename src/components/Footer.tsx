"use client";

import Link from "next/link";
import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/[0.05] bg-noir pt-24 pb-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <Link href="/" className="font-display text-4xl font-light tracking-[0.05em] text-white block">
                            Elara
                        </Link>
                        <p className="text-grey-500 max-w-sm text-sm leading-relaxed">
                            Curated mystical tools and intuitive tarot readings. Guided by intuition, designed for the modern seeker.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-grey-500 hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-grey-500 hover:text-white transition-colors" aria-label="Twitter">
                                <Twitter size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="text-grey-500 hover:text-white transition-colors" aria-label="Email">
                                <Mail size={20} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Shop</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/products" className="text-grey-500 hover:text-white text-sm transition-colors">All Products</Link>
                            </li>
                            <li>
                                <Link href="/products?category=Crystals" className="text-grey-500 hover:text-white text-sm transition-colors">Crystals</Link>
                            </li>
                            <li>
                                <Link href="/products?category=Tarot" className="text-grey-500 hover:text-white text-sm transition-colors">Tarot Decks</Link>
                            </li>
                            <li>
                                <Link href="/#booking" className="text-grey-500 hover:text-white text-sm transition-colors">Book a Reading</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Support</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-grey-500 hover:text-white text-sm transition-colors">About</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-grey-500 hover:text-white text-sm transition-colors">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-grey-500 hover:text-white text-sm transition-colors">Contact</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-grey-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.05] gap-4">
                    <p className="text-grey-600 text-xs">
                        © {new Date().getFullYear()} Elara Tarot. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-grey-600">
                        <Link href="/admin" className="hover:text-white transition-colors uppercase tracking-widest">
                            Admin Gateway
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

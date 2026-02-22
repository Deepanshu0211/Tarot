"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Plus, Edit2, Trash2, Save, Tag, DollarSign, Clock, Settings, Ticket, BarChart3, Edit3, TrendingUp, Users, ShoppingBag as BagIcon } from "lucide-react";

const initialProducts = [
    { id: "1", name: "Amethyst Crystal Cluster", price: 45.00, category: "Crystals" },
    { id: "2", name: "Rose Quartz Wand", price: 32.50, category: "Crystals" },
    { id: "3", name: "Lavender & Sage Smudge", price: 18.00, category: "Incense" },
];

const initialSessions = [
    { id: "s1", title: "Quick Insight", duration: "15 min", price: 30 },
    { id: "s2", title: "Deep Dive", duration: "30 min", price: 55 },
    { id: "s3", title: "Soul Purpose", duration: "1 hour", price: 100 },
];

const initialCoupons = [
    { id: "c1", code: "MYSTIC10", discount: "10%" },
    { id: "c2", code: "NEWMOON", discount: "$5.00" },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("analytics");
    const [showAddForm, setShowAddForm] = useState(false);

    const [products, setProducts] = useState(initialProducts);
    const [sessions, setSessions] = useState(initialSessions);
    const [coupons, setCoupons] = useState(initialCoupons);

    const tabs = [
        { id: "analytics", label: "Overview", icon: BarChart3 },
        { id: "products", label: "Products", icon: Tag },
        { id: "sessions", label: "Sessions", icon: Clock },
        { id: "coupons", label: "Coupons", icon: Ticket },
        { id: "content", label: "Content", icon: Edit3 },
    ];

    return (
        <div className="space-y-10 pb-10">
            <div className="mt-6 md:mt-12">
                <h1 className="font-display text-4xl md:text-5xl font-light text-white flex items-center gap-3">
                    Dashboard
                </h1>
                <p className="text-grey-600 mt-2 text-sm">Manage products, pricing, and coupons.</p>
            </div>

            <div className="flex gap-1 p-1 bg-white/[0.03] rounded-lg w-full md:w-max border border-white/[0.04]">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs tracking-wider uppercase font-medium transition-all ${activeTab === tab.id ? "bg-white text-noir" : "text-grey-600 hover:text-white"
                            }`}
                    >
                        <tab.icon size={14} /> <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
            >
                {activeTab === "analytics" && (
                    <div className="space-y-6">
                        <h2 className="font-display text-2xl font-light text-white">Store Overview</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <GlassCard className="space-y-2 !p-4">
                                <span className="text-grey-500 text-[10px] uppercase tracking-wider block">Total Sales</span>
                                <div className="text-2xl text-white font-light flex items-center justify-between">
                                    $4,290 <TrendingUp size={16} className="text-green-500" />
                                </div>
                            </GlassCard>
                            <GlassCard className="space-y-2 !p-4">
                                <span className="text-grey-500 text-[10px] uppercase tracking-wider block">Orders</span>
                                <div className="text-2xl text-white font-light flex items-center justify-between">
                                    142 <BagIcon size={16} className="text-white/[0.4]" />
                                </div>
                            </GlassCard>
                            <GlassCard className="space-y-2 !p-4">
                                <span className="text-grey-500 text-[10px] uppercase tracking-wider block">Sessions Booked</span>
                                <div className="text-2xl text-white font-light flex items-center justify-between">
                                    28 <Clock size={16} className="text-white/[0.4]" />
                                </div>
                            </GlassCard>
                            <GlassCard className="space-y-2 !p-4">
                                <span className="text-grey-500 text-[10px] uppercase tracking-wider block">Active Users</span>
                                <div className="text-2xl text-white font-light flex items-center justify-between">
                                    850 <Users size={16} className="text-white/[0.4]" />
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                )}

                {activeTab === "products" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-display text-2xl font-light text-white">Products</h2>
                            <button
                                onClick={() => setShowAddForm(!showAddForm)}
                                className="bg-white text-noir px-4 py-2 rounded-lg flex items-center gap-2 text-xs tracking-wider uppercase font-medium hover:bg-grey-200 transition-colors"
                            >
                                <Plus size={14} /> {showAddForm ? "Cancel" : "Add"}
                            </button>
                        </div>

                        <AnimatePresence>
                            {showAddForm && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <GlassCard className="space-y-4 mb-6">
                                        <h3 className="text-sm uppercase tracking-wider text-grey-400">New Product</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <input placeholder="Name" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-4 text-sm text-white placeholder-grey-700 focus:border-white/20 outline-none transition-colors" />
                                            <input placeholder="Price" type="number" className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-4 text-sm text-white placeholder-grey-700 focus:border-white/20 outline-none transition-colors" />
                                            <select className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-4 text-sm text-grey-400 focus:border-white/20 outline-none transition-colors">
                                                <option>Crystals</option>
                                                <option>Perfumes</option>
                                                <option>Tarot Tools</option>
                                                <option>Incense</option>
                                            </select>
                                            <button
                                                onClick={() => setShowAddForm(false)}
                                                className="bg-white text-noir text-sm font-medium rounded-lg py-2.5 hover:bg-grey-200 transition-colors"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <GlassCard className="!p-0 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/[0.06]">
                                            <th className="p-4 text-[10px] text-grey-600 font-medium uppercase tracking-wider">Name</th>
                                            <th className="p-4 text-[10px] text-grey-600 font-medium uppercase tracking-wider hidden sm:table-cell">Category</th>
                                            <th className="p-4 text-[10px] text-grey-600 font-medium uppercase tracking-wider">Price</th>
                                            <th className="p-4 text-right text-[10px] text-grey-600 font-medium uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                                                <td className="p-4 text-sm text-grey-300">{product.name}</td>
                                                <td className="p-4 text-sm text-grey-600 hidden sm:table-cell">{product.category}</td>
                                                <td className="p-4 text-sm text-white">${product.price.toFixed(2)}</td>
                                                <td className="p-4 flex items-center justify-end gap-1">
                                                    <button className="p-2 text-grey-600 hover:text-white rounded-md transition-colors"><Edit2 size={14} /></button>
                                                    <button className="p-2 text-grey-600 hover:text-white rounded-md transition-colors"><Trash2 size={14} /></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </GlassCard>
                    </div>
                )}

                {activeTab === "sessions" && (
                    <div className="space-y-6">
                        <h2 className="font-display text-2xl font-light text-white">Pricing</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {sessions.map((session) => (
                                <GlassCard key={session.id} className="space-y-4">
                                    <div>
                                        <h3 className="font-display text-xl font-light text-white">{session.title}</h3>
                                        <p className="text-grey-600 text-xs uppercase tracking-wider mt-1">{session.duration}</p>
                                    </div>
                                    <div className="pt-4 border-t border-white/[0.06]">
                                        <label className="text-grey-600 text-[10px] uppercase tracking-wider mb-2 block">Price</label>
                                        <div className="relative">
                                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-grey-700" size={14} />
                                            <input
                                                defaultValue={session.price}
                                                type="number"
                                                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <button className="w-full py-2.5 border border-white/[0.1] hover:bg-white hover:text-noir transition-all rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-2 text-grey-400">
                                        <Save size={14} /> Save
                                    </button>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "coupons" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-display text-2xl font-light text-white">Coupons</h2>
                            <button className="bg-white text-noir px-4 py-2 rounded-lg flex items-center gap-2 text-xs tracking-wider uppercase font-medium hover:bg-grey-200 transition-colors">
                                <Plus size={14} /> Generate
                            </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {coupons.map(coupon => (
                                <div key={coupon.id} className="p-4 rounded-lg border border-dashed border-white/[0.1] bg-white/[0.02] flex justify-between items-center">
                                    <div>
                                        <div className="text-white font-mono text-sm tracking-[0.2em]">{coupon.code}</div>
                                        <div className="text-grey-500 text-xs mt-1">{coupon.discount} off</div>
                                    </div>
                                    <button className="text-grey-600 p-2 hover:text-white transition-colors">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === "content" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-display text-2xl font-light text-white">Site Content</h2>
                            <button className="bg-white text-noir px-4 py-2 rounded-lg flex items-center gap-2 text-xs tracking-wider uppercase font-medium hover:bg-grey-200 transition-colors">
                                <Save size={14} /> Publish Changes
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <GlassCard className="space-y-4">
                                <h3 className="text-white text-sm font-medium">Homepage Hero Banner</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-grey-600 text-[10px] uppercase tracking-wider mb-2 block">Heading</label>
                                        <input
                                            defaultValue="Discover the hidden truths of your soul."
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-grey-600 text-[10px] uppercase tracking-wider mb-2 block">Subheading</label>
                                        <textarea
                                            defaultValue="Book a consultation or find spiritual tools to guide your path."
                                            rows={2}
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard className="space-y-4">
                                <h3 className="text-white text-sm font-medium">Announcement Banner</h3>
                                <div className="space-y-3">
                                    <div>
                                        <label className="text-grey-600 text-[10px] uppercase tracking-wider mb-2 block">Banner Text</label>
                                        <input
                                            defaultValue="Free shipping on all crystal orders over $50"
                                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <input type="checkbox" id="showBanner" defaultChecked className="accent-white" />
                                        <label htmlFor="showBanner" className="text-grey-500 text-xs">Enable Announcement Banner</label>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

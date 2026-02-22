"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Calendar, ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { BookingModal, SessionType } from "@/components/BookingModal";

const mockProducts = [
  { id: "1", name: "Amethyst Crystal Cluster", price: 45.00, image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=800&auto=format&fit=crop" },
  { id: "2", name: "Rose Quartz Wand", price: 32.50, image: "https://images.unsplash.com/photo-1567360216447-4e6f966ce1e9?q=80&w=800&auto=format&fit=crop" },
  { id: "3", name: "Classic Rider-Waite Tarot", price: 25.00, image: "https://images.unsplash.com/photo-1632731802951-4091ebd7edb1?q=80&w=800&auto=format&fit=crop" },
  { id: "4", name: "Lavender & Sage Smudge", price: 18.00, image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=800&auto=format&fit=crop" },
];

const sessions = [
  { id: "s1", title: "Quick Insight", duration: "15 min", price: 30, description: "A brief 1-3 card pull for quick guidance or a yes/no question." },
  { id: "s2", title: "Deep Dive", duration: "30 min", price: 55, description: "A full Celtic cross or 5-card spread for deeper clarity." },
  { id: "s3", title: "Soul Purpose", duration: "1 hour", price: 100, description: "Comprehensive past, present, and future reading." },
];

const categories = [
  { label: "Crystals", href: "/products?category=Crystals", image: "https://images.unsplash.com/photo-1565013054174-88ff267104b9?q=80&w=800&auto=format&fit=crop" },
  { label: "Tarot Tools", href: "/products?category=Tarot%20Tools", image: "https://images.unsplash.com/photo-1632731803004-58e1136bfe8f?q=80&w=800&auto=format&fit=crop" },
  { label: "Perfumes", href: "/products?category=Perfumes", image: "https://images.unsplash.com/photo-1595425970377-c9703bc48baf?q=80&w=800&auto=format&fit=crop" },
  { label: "Incense", href: "/products?category=Incense", image: "https://images.unsplash.com/photo-1628173428014-cbfe38bcab67?q=80&w=800&auto=format&fit=crop" },
];

export default function Home() {
  const { addItem } = useCart();
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSession = (session: typeof sessions[0]) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-28 pb-10">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] text-center px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 max-w-4xl"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-grey-500"
            >
              Tarot Reader & Spiritual Guide
            </motion.p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-white leading-[1.05] tracking-tight">
              Discover Your<br />
              <em className="font-display italic text-grey-300">Spiritual Path</em>
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-grey-400 max-w-2xl mx-auto leading-relaxed text-[16px] md:text-[18px]"
          >
            Welcome, seeker. I am Elara — an intuitive tarot reader and spiritual guide. Explore curated mystical tools or book a session to unveil the truth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <Link href="#booking">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-noir px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-grey-200 transition-colors flex items-center gap-3"
              >
                <Calendar size={16} /> Book a Reading
              </motion.button>
            </Link>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/[0.15] text-grey-300 px-10 py-4 text-xs font-medium tracking-[0.2em] uppercase rounded-full hover:bg-white/[0.05] transition-colors flex items-center gap-3"
              >
                Explore Relics
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking / Consultations (Moved Up for Primary Focus) */}
      <section id="booking" className="space-y-10 pt-10 scroll-m-20 border-t border-white/[0.05]">
        <div className="text-center space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white">Consultations</h2>
          <p className="text-grey-500 max-w-lg mx-auto text-[15px] leading-relaxed">
            Choose a session. I will connect with your energy and deliver insights channeled from the cards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.4 }}
            >
              <GlassCard className="flex flex-col h-full items-center text-center p-8 hover:bg-white/[0.04] transition-colors cursor-default">
                <div className="text-[11px] text-grey-500 tracking-[0.3em] uppercase mb-3">
                  {session.duration}
                </div>
                <h3 className="font-display text-2xl font-light text-white mb-4">{session.title}</h3>
                <p className="text-grey-500 mb-8 flex-1 text-sm leading-relaxed">{session.description}</p>
                <div className="font-display text-3xl font-light text-white mb-6">${session.price}</div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleBookSession(session)}
                  className="w-full py-3 border border-white/[0.15] text-grey-300 rounded-lg text-sm tracking-wider uppercase hover:bg-white hover:text-noir transition-all flex justify-center items-center gap-2"
                >
                  <Calendar size={14} /> Book Session
                </motion.button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop by Category (Amazon Style) */}
      <section className="space-y-10 pt-10">
        <h2 className="font-display text-3xl md:text-4xl font-light text-white text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "Crystals", image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=400&fit=crop", href: "/products?category=Crystals" },
            { name: "Tarot Tools", image: "https://images.unsplash.com/photo-1632731802951-4091ebd7edb1?q=80&w=400&fit=crop", href: "/products?category=Tarot+Tools" },
            { name: "Perfumes", image: "https://images.unsplash.com/photo-1595425959632-44f2b9ff9b2a?q=80&w=400&fit=crop", href: "/products?category=Perfumes" },
            { name: "Incense", image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=400&fit=crop", href: "/products?category=Incense" },
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Link href={category.href}>
                <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/[0.05]">
                  <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-transparent z-10" />
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-6 left-0 right-0 text-center z-20">
                    <h3 className="text-white text-sm tracking-[0.2em] uppercase font-medium">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="space-y-10">
        <div className="flex justify-between items-end">
          <h2 className="font-display text-3xl md:text-4xl font-light text-white">Featured</h2>
          <Link href="/products" className="text-grey-500 flex items-center text-sm hover:text-white transition-colors tracking-wider uppercase">
            View all <ChevronRight size={16} />
          </Link>
        </div>

        <div className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing pb-4">
          <motion.div
            className="flex gap-4 md:gap-5"
            drag="x"
            dragConstraints={{ right: 0, left: typeof window !== 'undefined' ? window.innerWidth < 768 ? -800 : -400 : -500 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {mockProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="min-w-[70vw] md:min-w-[260px] flex-shrink-0"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <GlassCard className="h-full flex flex-col p-0 group pointer-events-auto">
                  <div className="aspect-[4/5] w-full relative overflow-hidden rounded-t-xl">
                    <img src={product.image} alt={product.name} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 pointer-events-none" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm text-grey-300 line-clamp-1">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">${product.price.toFixed(2)}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); addItem(product); }}
                        className="p-2 text-grey-600 hover:text-white transition-colors"
                      >
                        <ShoppingBag size={16} strokeWidth={1.5} />
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 border-t border-white/[0.05]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight">
              The Philosophy <br />
              <em className="text-grey-400">of Elara</em>
            </h2>
            <p className="text-grey-500 leading-relaxed text-[15px]">
              Tarot is not just about foretelling the future; it is a profound mirror reflecting our innermost truths. Every reading is a journey into the self, guided by intuition and ancient symbolism.
            </p>
            <p className="text-grey-500 leading-relaxed text-[15px]">
              With over a decade of dedication to the mystical arts, I provide a safe, grounding space for seekers to find clarity, purpose, and spiritual alignment.
            </p>
            <div className="pt-4">
              <Link href="/about" className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] font-medium hover:text-grey-400 transition-colors group">
                Read Full Story
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ChevronRight size={16} />
                </motion.span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-noir/20 z-10 mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1579705745172-132d73f4e2c0?q=80&w=800&auto=format&fit=crop"
              alt="Tarot Cards"
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-[2000ms]"
            />
          </motion.div>
        </div>
      </section>



      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        session={selectedSession}
      />
    </div>
  );
}

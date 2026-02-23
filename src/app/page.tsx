"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Calendar, ChevronRight, ShoppingBag, Sparkles, Star, Mail, Moon, Sun, Heart, Shield, CircleDollarSign, Eye } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { BookingModal, SessionType } from "@/components/BookingModal";
import { SingleConstellation, SparkleOverlay } from "@/components/Constellation";

/* ────────────────── DATA ────────────────── */

const newProducts = [
  { id: "1", name: "Pendulum", price: 18.00, image: "https://images.unsplash.com/photo-1602519026685-0b20fc139cde?q=80&w=600&auto=format&fit=crop" },
  { id: "2", name: "The Green Witch Book", price: 35.00, image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" },
  { id: "3", name: "Smoke Cleansing Bowl", price: 25.00, image: "https://images.unsplash.com/photo-1608681297594-e33719bda1aa?q=80&w=600&auto=format&fit=crop" },
  { id: "4", name: "Crystal Set", price: 25.00, image: "https://images.unsplash.com/photo-1567360216447-4e6f966ce1e9?q=80&w=600&auto=format&fit=crop" },
];

const collections = [
  { label: "Crystals", cta: "SHOP NOW", href: "/products?category=Crystals", image: "https://images.unsplash.com/photo-1555580168-9de9be6911c6?q=80&w=600&auto=format&fit=crop" },
  { label: "Gifts", cta: "LET'S GO", href: "/products?category=Gifts", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=600&auto=format&fit=crop" },
  { label: "Candles", cta: "YES PLEASE", href: "/products?category=Candles", image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?q=80&w=600&auto=format&fit=crop" },
];

const sessions = [
  { id: "s1", title: "Quick Insight", duration: "15 min", price: 30, description: "A brief 1-3 card pull for quick guidance or a yes/no question.", icon: Eye },
  { id: "s2", title: "Deep Dive", duration: "30 min", price: 55, description: "A full Celtic cross or 5-card spread for deeper clarity.", icon: Moon },
  { id: "s3", title: "Soul Purpose", duration: "1 hour", price: 100, description: "Comprehensive past, present, and future reading.", icon: Sun },
];

const spells = [
  { id: "sp1", title: "Love Spell", price: 45, description: "Attract love and deepen existing connections with ancient enchantments.", icon: Heart },
  { id: "sp2", title: "Protection Spell", price: 40, description: "Shield yourself from negative energy and harmful intentions.", icon: Shield },
  { id: "sp3", title: "Prosperity Spell", price: 50, description: "Open pathways to abundance, success, and financial flow.", icon: CircleDollarSign },
];

/* ────────────────── DATA ────────────────── */

/* ────────────────── HOME PAGE ────────────────── */

export default function Home() {
  const { addItem } = useCart();
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSession = (session: { id: string; title: string; duration: string; price: number }) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-0">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-noir">
          <img
            src="/mystical-bg.jpg"
            alt="Mystical Background"
            className="object-cover absolute w-full h-full md:w-[120vh] md:h-[100vw] md:rotate-90 max-w-none"
          />
          <div className="absolute inset-0 bg-black/75" />
          {/* Smooth fade into the next Noir section */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-noir via-noir/80 to-transparent pointer-events-none" />
        </div>

        <SparkleOverlay />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 text-center px-4 max-w-4xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-wide mb-6"
          >
            Welcome to<br />Mystical Magical
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-gold text-sm sm:text-base md:text-lg tracking-[0.3em] uppercase mb-10 font-light"
          >
            Your Modern Magick Shop
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-noir/80 text-white border border-white/20 px-12 py-4 text-xs font-medium tracking-[0.3em] uppercase hover:bg-white hover:text-noir transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════ CONSULTATION & SPELLS ROW ═══════════════ */}
      <section className="bg-noir py-20 relative overflow-hidden">
        <style dangerouslySetInnerHTML={{
          __html: `
          .no-scroll::-webkit-scrollbar { display: none; }
          .no-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <SingleConstellation name="Ursa Major" className="top-10 left-[5%] w-72 h-72 hidden md:block opacity-60" />
        <SingleConstellation name="Orion" className="bottom-[5%] right-[5%] w-64 h-64 hidden lg:block opacity-60" />
        <SparkleOverlay />
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-4">
              Consultations & Spells
            </h2>
            <p className="text-gold text-sm tracking-[0.25em] uppercase">
              Book a session or cast a spell — unveil the truth
            </p>
          </motion.div>

          {/* Consultations */}
          <div className="mb-16">
            <h3 className="font-display text-2xl text-white text-center mb-8 flex items-center justify-center gap-3">
              <Sparkles size={20} className="text-gold" />
              <span>Tarot Consultations</span>
              <Sparkles size={20} className="text-gold" />
            </h3>
            <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scroll">
              {sessions.map((session, index) => {
                const Icon = session.icon;
                return (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
                  >
                    <div className="border border-white/5 rounded-xl p-8 text-center hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-500 bg-black/40 backdrop-blur-md h-full flex flex-col items-center">
                      <div className="mb-6 mt-2">
                        <Icon strokeWidth={1} size={42} className="text-gold" />
                      </div>
                      <div className="text-[11px] text-gold tracking-[0.3em] uppercase mb-3">
                        {session.duration}
                      </div>
                      <h4 className="font-display text-2xl text-white mb-4">{session.title}</h4>
                      <p className="text-white/60 font-serif-heading text-lg mb-8 flex-1 leading-relaxed">{session.description}</p>
                      <div className="text-3xl font-medium tracking-wider text-gold/90 mb-6">${session.price}</div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleBookSession(session)}
                        className="w-full py-3 border border-gold/20 text-gold rounded-lg text-xs tracking-wider uppercase hover:bg-gold hover:text-noir transition-all duration-300 flex justify-center items-center gap-2"
                      >
                        <Calendar size={14} /> Book Session
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Spells */}
          <div>
            <h3 className="font-display text-2xl text-white text-center mb-10 flex items-center justify-center gap-4">
              <Star size={18} strokeWidth={1.5} className="text-gold opacity-70" />
              <span className="tracking-widest uppercase text-lg">Spell Casting</span>
              <Star size={18} strokeWidth={1.5} className="text-gold opacity-70" />
            </h3>
            <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory no-scroll">
              {spells.map((spell, index) => {
                const Icon = spell.icon;
                return (
                  <motion.div
                    key={spell.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
                  >
                    <div className="border border-white/5 rounded-xl p-8 text-center hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-500 bg-black/40 backdrop-blur-md h-full flex flex-col items-center">
                      <div className="mb-6 mt-2">
                        <Icon strokeWidth={1} size={42} className="text-gold" />
                      </div>
                      <h4 className="font-display text-2xl text-white mb-4">{spell.title}</h4>
                      <p className="text-white/60 font-serif-heading text-lg mb-8 flex-1 leading-relaxed">{spell.description}</p>
                      <div className="text-3xl font-medium tracking-wider text-gold/90 mb-6">${spell.price}</div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleBookSession({ id: spell.id, title: spell.title, duration: "Custom", price: spell.price })}
                        className="w-full py-3 border border-gold/20 text-gold rounded-lg text-xs tracking-wider uppercase hover:bg-gold hover:text-noir transition-all duration-300 flex justify-center items-center gap-2"
                      >
                        <Sparkles size={14} /> Cast Spell
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SHOP OUR NEW PRODUCTS ═══════════════ */}
      <section className="bg-white py-24 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl text-noir text-center mb-16 tracking-wide"
          >
            Shop Our New Products
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {newProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 rounded-sm relative shadow-md">
                  <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 border border-noir/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                </div>
                <div className="text-center">
                  <h3 className="text-noir font-display text-lg mb-2 tracking-wide group-hover:text-gold transition-colors">{product.name}</h3>
                  <p className="text-grey-600 text-sm tracking-widest font-semibold">${product.price.toFixed(2)} AUD</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NEW PRODUCTS BANNER ═══════════════ */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?q=80&w=1920&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <SingleConstellation name="Cygnus" className="top-[10%] left-[10%] w-64 h-64 hidden xl:block opacity-70" />
        <SparkleOverlay />

        <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Arch Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-64 md:w-80 flex-shrink-0"
          >
            <div className="arch-rounded overflow-hidden border-2 border-gold/20">
              <img
                src="https://images.unsplash.com/photo-1602519026685-0b20fc139cde?q=80&w=600&auto=format&fit=crop"
                alt="New Products"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-wide mb-4 leading-tight">
              New Products
            </h2>
            <p className="text-gold text-sm sm:text-base tracking-[0.3em] uppercase mb-8 font-light">
              Find the Perfect Gift
            </p>
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-noir/80 text-white border border-white/20 px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-noir transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ SHOP OUR COLLECTIONS ═══════════════ */}
      <section className="bg-white py-24 relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl text-noir text-center mb-16 tracking-wide"
          >
            Shop Our Collections
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {collections.map((col, index) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Link href={col.href}>
                  <div className="relative aspect-[3/4] overflow-hidden group cursor-pointer border border-white/5 rounded-sm">
                    <img
                      src={col.image}
                      alt={col.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 z-10 text-center">
                      <h3 className="font-display text-3xl sm:text-4xl text-white tracking-widest mb-6 group-hover:text-gold transition-colors duration-300">{col.label}</h3>
                      <span className="text-white text-[10px] tracking-[0.4em] uppercase border-b border-white/40 pb-1 group-hover:border-gold group-hover:text-gold transition-all duration-300">
                        {col.cta}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ JOIN THE CLUB ═══════════════ */}
      <section className="bg-noir py-24 relative overflow-hidden">
        <SingleConstellation name="Cassiopeia" className="bottom-10 right-[15%] w-56 h-56 hidden md:block opacity-80" />
        <SparkleOverlay />
        <div className="max-w-2xl mx-auto px-5 sm:px-8 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide mb-4">
              Join the Club
            </h2>
            <p className="text-grey-400 text-sm mb-10 leading-relaxed max-w-md mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and mystical insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-noir-light border border-white/10 text-white px-6 py-4 text-sm focus:outline-none focus:border-gold/40 transition-colors placeholder:text-grey-600"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-gold text-noir px-8 py-4 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={14} /> Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        session={selectedSession}
      />
    </div>
  );
}

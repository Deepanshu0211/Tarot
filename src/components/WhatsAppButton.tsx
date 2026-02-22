"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
    const handleClick = () => {
        const msg = encodeURIComponent("Hello! I have a question about the store.");
        window.open(`https://wa.me/1234567890?text=${msg}`, "_blank");
    };

    return (
        <motion.button
            onClick={handleClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-[90px] right-5 md:bottom-8 md:right-8 z-50 p-3.5 rounded-full bg-white text-noir shadow-[0_2px_15px_rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-grey-200 transition-colors"
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={22} />
        </motion.button>
    );
}

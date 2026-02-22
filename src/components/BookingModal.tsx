"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

export type SessionType = {
    id: string;
    title: string;
    duration: string;
    price: number;
};

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    session: SessionType | null;
}

export function BookingModal({ isOpen, onClose, session }: BookingModalProps) {
    const [step, setStep] = useState<"processing" | "success">("processing");

    useEffect(() => {
        if (isOpen && session) {
            setStep("processing");

            const timer1 = setTimeout(() => {
                setStep("success");

                const timer2 = setTimeout(() => {
                    const msg = encodeURIComponent(`Hi! I'd like to book the ${session.title} (${session.duration}) reading.`);
                    window.open(`https://wa.me/1234567890?text=${msg}`, "_blank");
                    onClose();
                }, 2000);

                return () => clearTimeout(timer2);
            }, 1500);

            return () => clearTimeout(timer1);
        }
    }, [isOpen, session, onClose]);

    return (
        <AnimatePresence>
            {isOpen && session && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative bg-noir-light border border-white/[0.08] rounded-2xl p-10 max-w-sm w-full flex flex-col items-center text-center"
                    >
                        <AnimatePresence mode="wait">
                            {step === "processing" ? (
                                <motion.div
                                    key="processing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center"
                                >
                                    <Loader2 size={36} className="text-grey-400 animate-spin mb-6" />
                                    <h3 className="font-display text-2xl font-light text-white mb-2">Processing...</h3>
                                    <p className="text-grey-500 text-sm">Securing your {session.title} session</p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    >
                                        <CheckCircle2 size={48} className="text-white mb-6" />
                                    </motion.div>
                                    <h3 className="font-display text-2xl font-light text-white mb-2">Confirmed</h3>
                                    <p className="text-grey-500 text-sm mb-4">Your session has been booked.</p>
                                    <p className="text-xs text-grey-600">Redirecting to WhatsApp...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

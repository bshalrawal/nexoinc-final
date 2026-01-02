'use client';

import { Phone, Mail, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export function FloatingActionBar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">

            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-neutral-900/90 backdrop-blur-md border border-white/10 rounded-full p-2 pl-3 shadow-2xl flex items-center gap-3 md:gap-4 relative"
                    >
                        {/* Collapse Button */}
                        <div
                            className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-12 h-6 bg-neutral-900/90 backdrop-blur-md rounded-t-full flex items-center justify-center cursor-pointer border-t border-x border-white/10 border-b-0 hover:bg-neutral-800/90 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                        </div>

                        <div className="flex items-center gap-3">
                            {/* WhatsApp / Phone */}
                            <Link
                                href="https://wa.me/9779763607255"
                                target="_blank"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg shadow-green-900/20 group"
                            >
                                <Phone className="w-6 h-6 text-white fill-current" />
                            </Link>

                            {/* Email */}
                            <Link
                                href="mailto:info@nexoninc.tech"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-all hover:scale-105 shadow-lg shadow-blue-900/20"
                            >
                                <Mail className="w-6 h-6 text-white" />
                            </Link>
                        </div>

                        <div className="w-px h-8 bg-white/10 mx-1" />

                        {/* Get Quote */}
                        <Link href="/contact">
                            <button className="bg-[#EA4335] hover:bg-[#D93025] text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all hover:scale-105 shadow-lg shadow-red-900/20 whitespace-nowrap">
                                Get Quote
                            </button>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div
                        key="collapsed"
                        initial={{ opacity: 0, y: 20, scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            onClick={() => setIsOpen(true)}
                            className="w-14 h-14 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center text-white hover:bg-neutral-800 transition-colors"
                        >
                            <ChevronUp className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

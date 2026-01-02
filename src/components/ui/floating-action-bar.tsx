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
                        className="bg-transparent backdrop-blur-md border border-white/10 rounded-full p-2 pl-3 shadow-2xl flex items-center gap-3 md:gap-4 relative"
                    >
                        {/* Collapse Button */}
                        <div
                            className="absolute -top-[22px] left-1/2 -translate-x-1/2 w-12 h-6 bg-transparent backdrop-blur-md rounded-t-full flex items-center justify-center cursor-pointer border-t border-x border-white/10 border-b-0 hover:bg-white/5 transition-colors"
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-6 h-6 text-white fill-current" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                </svg>
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
                            className="w-14 h-14 rounded-full bg-transparent backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center text-white hover:bg-neutral-800/50 transition-colors"
                        >
                            <ChevronUp className="w-6 h-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

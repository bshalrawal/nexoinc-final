'use client';

import { Mail } from 'lucide-react';

export function EmailCTA() {
  return (
    <a
      href="mailto:info@nexoninc.tech"
      className="fixed bottom-[11.5rem] right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#EA4335] text-white border-2 border-white/20 rounded-full shadow-[0_4px_20px_rgba(234,67,53,0.4)] hover:bg-[#B93327] hover:scale-110 hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Send an Email"
    >
      <Mail className="h-7 w-7 text-white group-hover:text-white transition-colors" />
    </a>
  );
}

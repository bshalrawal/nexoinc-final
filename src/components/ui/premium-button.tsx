"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "glass" | "white" | "outline" | "accent";
    className?: string;
    icon?: React.ReactNode;
    asChild?: boolean; // Added for compatibility if we need Slot later, but currently unused logic-wise
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
    ({ className, children, variant = "primary", icon, ...props }, ref) => {

        // Base structural styles
        const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium transition-all duration-300 rounded-full group cursor-pointer";

        // Visual variants
        const variants = {
            primary: `
        bg-primary text-primary-foreground 
        shadow-[0_4px_14px_0_rgba(9,166,194,0.39)] 
        hover:shadow-[0_6px_20px_rgba(9,166,194,0.23)] 
        hover:bg-primary/90 
        border border-primary/20
      `,
            accent: `
        bg-accent text-accent-foreground
        shadow-[0_4px_14px_0_rgba(41,216,162,0.39)]
        hover:shadow-[0_6px_20px_rgba(41,216,162,0.23)]
        hover:bg-accent/90
        border border-accent/20
      `,
            secondary: `
        bg-secondary text-secondary-foreground 
        shadow-lg hover:bg-secondary/90
      `,
            glass: `
        bg-white/10 text-white 
        border border-white/20 
        backdrop-blur-md 
        hover:bg-white/20 hover:border-white/40 
        shadow-[0_0_30px_rgba(0,200,255,0.3)]
        hover:shadow-[0_0_50px_rgba(0,200,255,0.5)]
      `,
            white: `
        bg-white text-primary 
        shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]
        hover:shadow-[0_6px_20px_rgba(255,255,255,0.23)]
        hover:bg-gray-50
      `,
            outline: `
        bg-transparent text-foreground border-2 border-primary
        hover:bg-primary hover:text-white
      `
        };

        return (
            <motion.button
                ref={ref as any}
                className={cn(baseStyles, variants[variant], className)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props as any}
            >
                {/* Shimmer/Sheen Effect */}
                {(variant === 'primary' || variant === 'glass' || variant === 'white') && (
                    <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)] pointer-events-none">
                        <span className={cn(
                            "relative h-full w-8",
                            variant === 'white' ? "bg-primary/10" : "bg-white/20"
                        )} />
                    </span>
                )}

                {/* Glow behind the button for glass variant */}
                {variant === 'glass' && (
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                <span className="relative z-10 flex items-center gap-2">
                    {children}
                    {icon && (
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            {icon}
                        </span>
                    )}
                </span>
            </motion.button>
        );
    }
);
PremiumButton.displayName = "PremiumButton";

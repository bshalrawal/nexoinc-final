'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils'; // Assuming this exists, based on previous calls

interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "2020",
        title: "Company Establishment & Vision",
        description: "Nexon Inc was founded with a mission to provide world-class digital solutions, including web development, mobile apps, AI & automation, and data analytics."
    },
    {
        year: "2021",
        title: "Service Portfolio Defined",
        description: "Our initial offerings focused on web and mobile application development, custom software solutions, and digital transformation services."
    },
    {
        year: "2022",
        title: "First Projects & Early Clients",
        description: "We began working with early clients, delivering projects that emphasized quality, efficiency, and client satisfaction."
    },
    {
        year: "2023",
        title: "Expanding Capabilities",
        description: "Added advanced services such as AI integration, intelligent automation, cloud solutions, and data analytics."
    },
    {
        year: "2024",
        title: "Portfolio Development",
        description: "Our portfolio started showcasing completed projects and case studies, reflecting the diversity and quality of our work."
    },
    {
        year: "2024",
        title: "Global Client Outreach",
        description: "Nexon Inc positioned itself as a trusted digital partner for clients worldwide."
    },
    {
        year: "2025",
        title: "Comprehensive Digital Solutions",
        description: "We now offer a full suite of services, from web & mobile apps to AI, data analytics, and digital marketing solutions."
    },
    {
        year: "2025",
        title: "Commitment to Excellence",
        description: "Emphasis on 24/7 support, agile delivery, and tailored solutions strengthened our long-term client relationships."
    }
];

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="journey" ref={containerRef} className="py-24 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Sticky Left Content */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-1/3">
                            <h2 className="text-sm font-medium tracking-widest text-primary uppercase mb-3">Our Journey</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Building the <span className="text-primary">Future</span>
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                From our founding vision to becoming a trusted global technology partner, Nexon Inc is committed to innovation, excellence, and delivering transformative solutions.
                            </p>
                            <div className="h-1.5 w-24 bg-primary rounded-full" />
                        </div>
                    </div>

                    {/* Timeline Right Content */}
                    <div className="lg:w-2/3 relative pt-12 lg:pt-0">
                        {/* Vertical Background Line */}
                        <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-border" />

                        {/* Animated Progress Line */}
                        <motion.div
                            className="absolute left-[27px] top-0 w-[2px] bg-primary origin-top"
                            style={{ scaleY, height: '100%' }}
                        />

                        <div className="space-y-16 pb-24">
                            {timelineData.map((item, index) => (
                                <TimelineCard key={index} item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex gap-8 items-start group"
        >
            {/* Number Node */}
            <div className="relative z-10 shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-muted text-muted-foreground font-bold text-sm md:text-base group-hover:border-primary group-hover:text-primary transition-colors duration-500 shadow-sm z-10 relative">
                    {item.year}
                </div>
                {/* Glow effect for active state if needed, though simple color change is often cleaner */}
            </div>

            {/* Card Content */}
            <div className="flex-grow pt-2">
                <div className="p-0 transition-all duration-300 transform group-hover:-translate-y-1">
                    <h4 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-base">
                        {item.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

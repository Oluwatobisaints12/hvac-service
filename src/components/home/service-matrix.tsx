"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Wind, Filter, Wrench, Fan, Sparkles } from "lucide-react";
import ServiceCard from "./service-card";

const SERVICES = [
  {
    id: "duct_vent_cleaning",
    title: "Duct & Vent Purification",
    tag: "System Upgrade",
    icon: Wind,
    description: "Complete HVAC duct and vent cleaning using advanced negative-pressure technology. Remove years of contaminant buildup for optimal airflow.",
    image: "https://media.base44.com/images/public/69e8b920b66f15398617d115/1fddc00b8_generated_8357e56f.png",
  },
  {
    id: "general_cleaning",
    title: "Deep System Cleaning",
    tag: "Core Service",
    icon: Sparkles,
    description: "Comprehensive interior and exterior unit cleaning. Coil decontamination, drain line purge, and component sanitization.",
    image: "https://media.base44.com/images/public/69e8b920b66f15398617d115/7d6c2d626_generated_199091d6.png",
  },
  {
    id: "filter_replacement",
    title: "Filtration Upgrade",
    tag: "Essential",
    icon: Filter,
    description: "Premium A/C filter replacement with MERV-rated filtration media. Dramatically improve indoor air quality in a single visit.",
    image: "https://media.base44.com/images/public/69e8b920b66f15398617d115/90e2a193b_generated_f959fcc9.png",
  },
  {
    id: "system_maintenance",
    title: "Preventive Diagnostics",
    tag: "Recommended",
    icon: Wrench,
    description: "Full HVAC system maintenance including refrigerant analysis, electrical testing, and performance benchmarking.",
    image: "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png",
  },
  {
    id: "vent_cleaning",
    title: "Vent Detailing",
    tag: "Precision",
    icon: Fan,
    description: "Targeted A/C system vent cleaning for individual zones. Restore balanced airflow distribution across every room.",
    image: "https://media.base44.com/images/public/69e8b920b66f15398617d115/3071f5bf5_generated_0ac841f9.png",
  },
];

export default function ServiceMatrix() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4"
            >
              Service Matrix
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground"
            >
              System Upgrades
            </motion.h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-secondary rounded-sm hover:bg-secondary/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-secondary rounded-sm hover:bg-secondary/50 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 lg:px-8 pb-4"
        style={{ paddingLeft: "max(1.5rem, calc((100vw - 80rem)/2 + 1.5rem))" }}
      >
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
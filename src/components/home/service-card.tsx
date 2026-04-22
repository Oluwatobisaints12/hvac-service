"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    tag: string;
    icon: LucideIcon;
    description: string;
    image: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex-none w-[320px] md:w-[400px] group snap-start"
    >
      <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm bg-secondary/20">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        <div className="absolute top-6 left-6">
          <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-foreground rounded-full">
            {service.tag}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground flex-1 leading-tight">
            {service.title}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 italic font-medium">
          {service.description}
        </p>
        <Link
          href={`/book?service=${service.id}`}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-accent/80 transition-colors pt-2"
        >
          Book Diagnostic
          <ArrowRight className="w-3 h-3 translate-y-[-1px]" />
        </Link>
      </div>
    </motion.div>
  );
}
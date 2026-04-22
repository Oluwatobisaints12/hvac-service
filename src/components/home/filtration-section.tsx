"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Zap, Droplets, ArrowRight } from "lucide-react";

const FILTER_IMAGE = "https://media.base44.com/images/public/69e8b920b66f15398617d115/90e2a193b_generated_f959fcc9.png";

const specs = [
  { label: "MERV Rating", value: "13–16", icon: Shield },
  { label: "Airflow (CFM)", value: "350–450", icon: Zap },
  { label: "Humidity Control", value: "40–60%", icon: Droplets },
];

export default function FiltrationSection() {
  return (
    <section id="filtration" className="py-32 lg:py-44 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={FILTER_IMAGE}
                alt="Pristine HEPA filter mesh close-up"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating spec badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-background/80 backdrop-blur-xl border border-secondary/50 rounded-sm p-5 shadow-lg">
              <p className="text-[9px] font-semibold tracking-[0.2em] uppercase text-accent mb-1">
                Air Quality Index
              </p>
              <p className="text-3xl font-extrabold text-foreground">98.7%</p>
              <p className="text-[10px] text-muted-foreground mt-1">Particle removal rate</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
              Filtration Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-6">
              Making the Invisible
              <br />
              <span className="text-accent">Visible</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Your air filter is the first line of defense against particulate matter, allergens, and airborne contaminants. A degraded filter doesn't just reduce air quality—it forces your system to work harder, increasing energy costs by up to 15%.
            </p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-secondary/30 backdrop-blur-sm border border-secondary/50 rounded-sm p-4"
                >
                  <spec.icon className="w-4 h-4 text-accent mb-3" />
                  <p className="text-xl font-bold text-foreground">{spec.value}</p>
                  <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-muted-foreground mt-1">
                    {spec.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/book?service=filter_replacement"
              className="inline-flex items-center gap-3 text-xs font-semibold tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors"
            >
              Subscribe to Clean Air
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
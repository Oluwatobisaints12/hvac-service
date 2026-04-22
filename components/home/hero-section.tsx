import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Activity, Thermometer, Wind } from "lucide-react";

const HERO_IMAGE = "https://media.base44.com/images/public/69e8b920b66f15398617d115/3e274661c_generated_63a314b9.png";

function AirQualityWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="inline-flex items-center gap-6 bg-background/60 backdrop-blur-xl border border-secondary/50 rounded-sm px-6 py-4"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          System Status
        </span>
      </div>
      <div className="h-4 w-px bg-secondary" />
      <div className="flex items-center gap-2">
        <Activity className="w-3.5 h-3.5 text-accent" />
        <span className="text-xs font-medium text-foreground">Optimized</span>
      </div>
      <div className="h-4 w-px bg-secondary hidden sm:block" />
      <div className="hidden sm:flex items-center gap-2">
        <Thermometer className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">72°F</span>
      </div>
      <div className="h-4 w-px bg-secondary hidden sm:block" />
      <div className="hidden sm:flex items-center gap-2">
        <Wind className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">AQI 12</span>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Minimalist modern living room with pristine natural light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Laminar flow lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "120%" }}
            animate={{ x: ["-20%", "0%"] }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-6"
          >
            Climate Engineering Specialists
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] text-foreground mb-8"
          >
            Engineering
            <br />
            Your
            <br />
            <span className="text-accent">Atmosphere</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-md mb-10"
          >
            Precision HVAC services that transform your space into a sanctuary of pure, optimized air.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="/book"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-foreground/90 transition-colors"
            >
              Schedule Diagnostic
            </Link>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-foreground/20 text-foreground px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-foreground/5 transition-colors"
            >
              View Services
            </a>
          </motion.div>

          <AirQualityWidget />
        </div>
      </div>
    </section>
  );
}
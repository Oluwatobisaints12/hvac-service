"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Calendar, UserCheck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Symptom Analysis",
    description: "Describe your concern—weak airflow, unusual odors, or schedule a routine diagnostic.",
  },
  {
    icon: Calendar,
    number: "02",
    title: "Precision Scheduling",
    description: "Select your preferred date and time window. We match your schedule, not the other way around.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Engineer Dispatch",
    description: "A certified climate engineer arrives with full diagnostic equipment and premium parts.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Atmosphere Optimized",
    description: "Your system is restored to peak efficiency with a comprehensive performance report.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 lg:py-44 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4"
          >
            Service Protocol
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground"
          >
            Four Steps to
            <br />
            Pure Atmosphere
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-secondary" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-sm bg-background border border-secondary/50 mb-6 relative">
                  <step.icon className="w-5 h-5 text-accent" />
                  <span className="absolute -top-2 -right-2 text-[9px] font-bold tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-bold tracking-tight text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group min-w-[320px] md:min-w-[380px] snap-start"
    >
      <div className="relative h-full bg-background/60 backdrop-blur-xl border border-secondary/50 rounded-sm overflow-hidden hover:border-accent/30 transition-all duration-500">
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase bg-accent/10 text-accent backdrop-blur-sm px-3 py-1.5 rounded-sm border border-accent/20">
              {service.tag}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <service.icon className="w-4 h-4 text-accent" />
            <h3 className="text-base font-bold tracking-tight text-foreground">
              {service.title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {service.description}
          </p>
          <Link
            to={`/book?service=${service.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-foreground group-hover:text-accent transition-colors"
          >
            Schedule Service
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
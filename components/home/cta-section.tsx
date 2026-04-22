import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TECH_IMAGE = "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

export default function CTASection() {
  return (
    <section className="py-32 lg:py-44">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm overflow-hidden"
        >
          <img
            src={TECH_IMAGE}
            alt="Technician with air quality sensor"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />

          <div className="absolute inset-0 flex items-center">
            <div className="px-8 md:px-16 max-w-xl">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-4">
                Ready to Breathe Better?
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-background mb-6">
                Your First Diagnostic
                <br />
                Is Complimentary
              </h2>
              <p className="text-base text-background/70 leading-relaxed mb-8">
                Experience the Atmos Precision difference. Our engineers will assess your entire HVAC ecosystem and deliver a detailed performance report—at no cost.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-accent/90 transition-colors"
              >
                Book Free Diagnostic
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
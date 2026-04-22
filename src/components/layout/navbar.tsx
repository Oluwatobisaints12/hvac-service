"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Air Quality", href: "#filtration" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-secondary/50 shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <Wind className="w-5 h-5 text-accent" />
              <span className="text-sm font-bold tracking-widest uppercase text-foreground">
                Atmos
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Precision
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/book"
                className="text-xs font-semibold tracking-[0.1em] uppercase bg-foreground text-background px-5 py-2.5 rounded-sm hover:bg-foreground/90 transition-colors"
              >
                Schedule Diagnostic
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background"
          >
            <div className="flex flex-col h-full px-6 py-6">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                  <Wind className="w-5 h-5 text-accent" />
                  <span className="text-sm font-bold tracking-widest uppercase">Atmos</span>
                </Link>
                <button onClick={() => setMenuOpen(false)} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-8 mt-20">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-light tracking-[0.1em] uppercase text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/book"
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold tracking-[0.1em] uppercase bg-foreground text-background px-6 py-4 rounded-sm text-center mt-4"
                >
                  Schedule Diagnostic
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
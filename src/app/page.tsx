import React from "react";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/home/hero-section";
import ServiceMatrix from "@/components/home/service-matrix";
import ProcessSection from "@/components/home/process-section";
import FiltrationSection from "@/components/home/filtration-section";
import CTASection from "@/components/home/cta-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServiceMatrix />
      <ProcessSection />
      <FiltrationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
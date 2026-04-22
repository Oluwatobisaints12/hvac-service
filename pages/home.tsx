import React from "react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/home/HeroSection";
import ServiceMatrix from "../components/home/ServiceMatrix";
import ProcessSection from "../components/home/ProcessSection";
import FiltrationSection from "../components/home/FiltrationSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";

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
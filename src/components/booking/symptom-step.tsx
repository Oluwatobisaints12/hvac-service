"use client";

import React from "react";
import { Wind, Droplets, Volume2, Thermometer, ClipboardCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SYMPTOMS = [
  {
    id: "weak_airflow",
    title: "Weak Airflow",
    description: "System is running but air isn't reaching rooms effectively.",
    icon: Wind
  },
  {
    id: "odors",
    title: "Unusual Odors",
    description: "Musty or burning smells coming from your vents.",
    icon: Droplets
  },
  {
    id: "unusual_noise",
    title: "Unusual Noise",
    description: "Banging, screeching, or persistent rattling sounds.",
    icon: Volume2
  },
  {
    id: "temperature_inconsistency",
    title: "Temperature Variances",
    description: "Some rooms are cold while others remain hot.",
    icon: Thermometer
  },
  {
    id: "routine_check",
    title: "Routine Maintenance",
    description: "Regular checkup to keep things running smoothly.",
    icon: ClipboardCheck
  }
];

interface SymptomStepProps {
  selected: string;
  onSelect: (id: string) => void;
}

export default function SymptomStep({ selected, onSelect }: SymptomStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
          Step 01
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
          What's happening?
        </h2>
        <p className="text-muted-foreground">
          Identify the primary symptom you're experiencing with your system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SYMPTOMS.map((symptom) => {
          const Icon = symptom.icon;
          const isSelected = selected === symptom.id;

          return (
            <button
              key={symptom.id}
              onClick={() => onSelect(symptom.id)}
              className={cn(
                "flex items-start gap-5 p-6 rounded-sm border transition-all text-left group relative",
                isSelected
                  ? "bg-foreground border-foreground text-background shadow-xl scale-[1.02] z-10"
                  : "bg-background border-secondary hover:border-accent/40"
              )}
            >
              <div className={cn(
                "mt-1 w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                isSelected ? "bg-accent text-accent-foreground" : "bg-secondary group-hover:bg-accent/10 group-hover:text-accent"
              )}>
                <Icon className="w-6 h-6" />
              </div>

              <div className="pr-8">
                <h3 className="text-sm font-bold tracking-tight mb-1 uppercase tracking-widest">{symptom.title}</h3>
                <p className={cn(
                  "text-xs leading-relaxed",
                  isSelected ? "text-background/70" : "text-muted-foreground"
                )}>
                  {symptom.description}
                </p>
              </div>

              {!isSelected && (
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Wind, Droplets, Volume2, Thermometer, ClipboardCheck } from "lucide-react";

const symptoms = [
  { id: "weak_airflow", label: "Weak Airflow", description: "Reduced air output from vents", icon: Wind },
  { id: "odors", label: "Unusual Odors", description: "Musty, burning, or chemical smells", icon: Droplets },
  { id: "unusual_noise", label: "Unusual Noise", description: "Rattling, humming, or clicking sounds", icon: Volume2 },
  { id: "temperature_inconsistency", label: "Temperature Issues", description: "Uneven cooling or heating across rooms", icon: Thermometer },
  { id: "routine_check", label: "Routine Diagnostic", description: "Scheduled preventive maintenance", icon: ClipboardCheck },
];

export default function SymptomStep({ selected, onSelect }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
        Step 01
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-2">
        Identify the Symptom
      </h2>
      <p className="text-sm text-muted-foreground mb-10">
        Select the primary concern with your HVAC system.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {symptoms.map((symptom, i) => (
          <motion.button
            key={symptom.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            onClick={() => onSelect(symptom.id)}
            className={`flex items-start gap-4 p-5 rounded-sm border text-left transition-all duration-300 ${
              selected === symptom.id
                ? "border-accent bg-accent/5"
                : "border-secondary hover:border-foreground/20"
            }`}
          >
            <div className={`p-2.5 rounded-sm ${selected === symptom.id ? "bg-accent/10" : "bg-secondary/50"}`}>
              <symptom.icon className={`w-4 h-4 ${selected === symptom.id ? "text-accent" : "text-muted-foreground"}`} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{symptom.label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{symptom.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
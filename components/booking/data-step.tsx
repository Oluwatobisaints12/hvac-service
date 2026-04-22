import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Sun, Cloud, Moon } from "lucide-react";

const timeSlots = [
  { id: "morning", label: "Morning", time: "8:00 – 12:00", icon: Sun },
  { id: "afternoon", label: "Afternoon", time: "12:00 – 17:00", icon: Cloud },
  { id: "evening", label: "Evening", time: "17:00 – 20:00", icon: Moon },
];

export default function DateStep({ date, onDateChange, timeSlot, onTimeChange }) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
        Step 02
      </p>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mb-2">
        Select Date & Time
      </h2>
      <p className="text-sm text-muted-foreground mb-10">
        Choose your preferred service window.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            disabled={(d) => d < new Date()}
            className="rounded-sm border border-secondary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold tracking-[0.1em] uppercase text-muted-foreground mb-4">
            Preferred Time Window
          </p>
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => onTimeChange(slot.id)}
              className={`w-full flex items-center gap-4 p-5 rounded-sm border text-left transition-all duration-300 ${
                timeSlot === slot.id
                  ? "border-accent bg-accent/5"
                  : "border-secondary hover:border-foreground/20"
              }`}
            >
              <div className={`p-2.5 rounded-sm ${timeSlot === slot.id ? "bg-accent/10" : "bg-secondary/50"}`}>
                <slot.icon className={`w-4 h-4 ${timeSlot === slot.id ? "text-accent" : "text-muted-foreground"}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{slot.label}</h3>
                <p className="text-xs text-muted-foreground">{slot.time}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
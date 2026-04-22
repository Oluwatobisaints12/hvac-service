"use client";

import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Sun, Cloud, Moon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  { id: "morning", label: "Morning", time: "8:00 AM - 12:00 PM", icon: Sun },
  { id: "afternoon", label: "Afternoon", time: "12:00 PM - 4:00 PM", icon: Cloud },
  { id: "evening", label: "Evening", time: "4:00 PM - 8:00 PM", icon: Moon },
];

interface DateStepProps {
  date: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  timeSlot: string;
  onTimeChange: (slot: string) => void;
}

export default function DateStep({ date, onDateChange, timeSlot, onTimeChange }: DateStepProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
          Step 02
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
          Select Schedule
        </h2>
        <p className="text-muted-foreground">
          Choose a preferred date and time window for your diagnostic service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Pick a Date
          </p>
          <div className="p-4 border border-secondary/50 rounded-sm bg-secondary/5">
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateChange}
              className="rounded-md border-none"
              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent" />
            Select Time Slot
          </p>
          <div className="grid gap-3">
            {TIME_SLOTS.map((slot) => {
              const Icon = slot.icon;
              const isSelected = timeSlot === slot.id;

              return (
                <button
                  key={slot.id}
                  onClick={() => onTimeChange(slot.id)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-sm border transition-all text-left group",
                    isSelected
                      ? "bg-foreground border-foreground text-background"
                      : "bg-background border-secondary hover:border-accent"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    isSelected ? "bg-accent text-accent-foreground" : "bg-secondary group-hover:bg-accent/10 group-hover:text-accent"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold tracking-tight">{slot.label}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3 h-3 opacity-60" />
                      <p className="text-[11px] opacity-70 font-medium uppercase tracking-wider">{slot.time}</p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="ml-auto w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-background" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="p-5 mt-6 border-l-2 border-accent bg-accent/5 rounded-r-sm">
            <p className="text-[11px] font-medium text-accent uppercase tracking-[0.15em] mb-1">
              Note
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Exact arrival times depend on technician availability. We will contact you to finalize the appointment window.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
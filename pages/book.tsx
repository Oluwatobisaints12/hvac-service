import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

import SymptomStep from "../components/booking/SymptomStep";
import DateStep from "../components/booking/DateStep";
import DetailsStep from "../components/booking/DetailsStep";

export default function Book() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const preselectedService = urlParams.get("service") || "";

  const [step, setStep] = useState(1);
  const [symptom, setSymptom] = useState("");
  const [date, setDate] = useState(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [serviceType, setServiceType] = useState(preselectedService);
  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    address: "",
    notes: "",
  });

  const createBooking = useMutation({
    mutationFn: (data) => base44.entities.Booking.create(data),
    onSuccess: () => {
      setStep(4);
    },
  });

  const canProceed = () => {
    if (step === 1) return !!symptom;
    if (step === 2) return !!date && !!timeSlot;
    if (step === 3) return form.customer_name && form.customer_email && serviceType;
    return false;
  };

  const handleSubmit = () => {
    createBooking.mutate({
      ...form,
      symptom,
      preferred_date: format(date, "yyyy-MM-dd"),
      preferred_time: timeSlot,
      service_type: serviceType,
      status: "pending",
    });
  };

  const stepLabels = ["Symptom", "Schedule", "Details"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-secondary/50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <Wind className="w-5 h-5 text-accent" />
            <span className="text-sm font-bold tracking-widest uppercase text-foreground">
              Atmos
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Progress */}
      {step < 4 && (
        <div className="max-w-4xl mx-auto px-6 pt-10">
          <div className="flex items-center gap-2 mb-2">
            {stepLabels.map((label, i) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      i + 1 <= step
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {i + 1 < step ? <Check className="w-3 h-3" /> : i + 1}
                  </div>
                  <span className={`text-xs font-medium ${i + 1 <= step ? "text-foreground" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div className={`flex-1 h-px ${i + 1 < step ? "bg-accent" : "bg-secondary"}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Steps */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <SymptomStep selected={symptom} onSelect={setSymptom} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <DateStep date={date} onDateChange={setDate} timeSlot={timeSlot} onTimeChange={setTimeSlot} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <DetailsStep form={form} onChange={setForm} serviceType={serviceType} onServiceChange={setServiceType} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Check className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-3">
                Booking Confirmed
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Your diagnostic has been scheduled. Our team will reach out within 24 hours to confirm your service window.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm hover:bg-foreground/90 transition-colors"
              >
                Return Home
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        {step < 4 && (
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-secondary/50">
            <Button
              variant="ghost"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="text-xs tracking-[0.1em] uppercase"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {step < 3 ? (
              <Button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="bg-foreground text-background hover:bg-foreground/90 text-xs tracking-[0.1em] uppercase rounded-sm px-8"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed() || createBooking.isPending}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs tracking-[0.1em] uppercase rounded-sm px-8"
              >
                {createBooking.isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Check className="w-4 h-4 mr-2" />
                )}
                Confirm Booking
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
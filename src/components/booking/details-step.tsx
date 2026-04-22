"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DetailsStepProps {
  form: {
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    address: string;
    notes: string;
  };
  onChange: (update: any) => void;
  serviceType: string;
  onServiceChange: (type: string) => void;
}

export default function DetailsStep({ form, onChange, serviceType, onServiceChange }: DetailsStepProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
          Step 03
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
          Your Information
        </h2>
        <p className="text-muted-foreground">
          Fill in your contact details so we can reach you to confirm the appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="service_type" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Required</Label>
            <Select value={serviceType} onValueChange={onServiceChange}>
              <SelectTrigger id="service_type" className="rounded-sm border-secondary bg-secondary/5 h-12">
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="duct_vent_cleaning">Duct & Vent Purification</SelectItem>
                <SelectItem value="general_cleaning">Deep System Cleaning</SelectItem>
                <SelectItem value="filter_replacement">Filtration Upgrade</SelectItem>
                <SelectItem value="system_maintenance">Preventive Diagnostics</SelectItem>
                <SelectItem value="vent_cleaning">Vent Detailing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer_name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</Label>
            <Input
              id="customer_name"
              name="customer_name"
              placeholder="John Doe"
              value={form.customer_name}
              onChange={handleChange}
              className="rounded-sm border-secondary bg-secondary/5 h-12 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customer_email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</Label>
            <Input
              id="customer_email"
              name="customer_email"
              type="email"
              placeholder="john@example.com"
              value={form.customer_email}
              onChange={handleChange}
              className="rounded-sm border-secondary bg-secondary/5 h-12 focus:border-accent"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="customer_phone" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Phone Number</Label>
            <Input
              id="customer_phone"
              name="customer_phone"
              placeholder="(555) 000-0000"
              value={form.customer_phone}
              onChange={handleChange}
              className="rounded-sm border-secondary bg-secondary/5 h-12 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Service Address</Label>
            <Input
              id="address"
              name="address"
              placeholder="123 Climate Way, Suite 400"
              value={form.address}
              onChange={handleChange}
              className="rounded-sm border-secondary bg-secondary/5 h-12 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Gate code, specific issues, or preferred contact method..."
              value={form.notes}
              onChange={handleChange}
              className="rounded-sm border-secondary bg-secondary/5 min-h-[96px] focus:border-accent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
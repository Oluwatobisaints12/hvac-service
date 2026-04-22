import React from "react";
import { Wind, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const departments = [
    {
      title: "Sales & Consultation",
      items: [
        { icon: Phone, text: "(555) 012-3456" },
        { icon: Mail, text: "sales@atmosprecision.com" },
        { icon: Clock, text: "Mon–Fri 8:00–18:00" },
      ],
    },
    {
      title: "Service Engineering",
      items: [
        { icon: Phone, text: "(555) 012-3457" },
        { icon: Mail, text: "engineering@atmosprecision.com" },
        { icon: Clock, text: "Mon–Sat 7:00–20:00" },
      ],
    },
    {
      title: "Emergency Dispatch",
      items: [
        { icon: Phone, text: "(555) 012-3458" },
        { icon: Mail, text: "emergency@atmosprecision.com" },
        { icon: Clock, text: "24/7 Available" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex items-center gap-2.5 mb-16">
          <Wind className="w-5 h-5 text-accent" />
          <span className="text-sm font-bold tracking-widest uppercase">Atmos</span>
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-50">
            Precision
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {departments.map((dept) => (
            <div key={dept.title}>
              <h3 className="text-[10px] font-semibold tracking-[0.25em] uppercase text-accent mb-6">
                {dept.title}
              </h3>
              <div className="space-y-4">
                {dept.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-3.5 h-3.5 opacity-40" />
                    <span className="text-sm opacity-70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 mb-6">
          <MapPin className="w-3.5 h-3.5 opacity-40" />
          <span className="text-sm opacity-70">
            1200 Climate Drive, Suite 400, Austin, TX 78701
          </span>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Atmos Precision. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="text-xs opacity-40 hover:opacity-70 transition-opacity">
              Licenses
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { Wind, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/50 mb-6">
                    <Wind className="w-10 h-10 text-accent animate-pulse" />
                </div>
                <h1 className="text-8xl font-black tracking-tighter text-foreground/5 opacity-50 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 select-none">
                    404
                </h1>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground mb-3">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    The page you are looking for doesn't exist or has been moved to a different climate.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="rounded-sm px-8 uppercase text-xs tracking-widest">
                    <Link href="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Link>
                </Button>
                <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-sm px-8 uppercase text-xs tracking-widest">
                    <Link href="/">
                        <Home className="w-4 h-4 mr-2" />
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

export default function Echoes() {
  return (
    <section id="echoes" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
             {/* Simulating the waveform visual */}
             <div className="flex items-center justify-center h-64 bg-slate-800/50 rounded-2xl border border-slate-700 mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.05 }}
                            className="w-2 bg-gradient-to-t from-primary to-secondary rounded-full"
                        />
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    Premium
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold">
              <Mic className="w-4 h-4" />
              Introducing Echoes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Find Closure with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Echoes</span></h2>
            <p className="text-lg text-slate-300">
              For those who have lost loved ones, Echoes offers a way to say goodbye.
              Using Azure Custom Neural Voice technology, we can synthesize responses in your loved one's voice from short audio clips, allowing for therapeutic, private closure conversations.
            </p>
            <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Secure Voice Banking
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Private & Opt-in Only
                </li>
                 <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    Therapeutically Guided
                </li>
            </ul>
            <Button variant="secondary" size="lg" className="text-slate-900 font-bold">
              Join Waitlist
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

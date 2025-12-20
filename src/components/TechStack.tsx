"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Powered by Azure</h2>
          <p className="text-muted-foreground text-lg">
            Leveraging Microsoft for Startups infrastructure for enterprise-grade security and AI.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholders for tech logos - in a real scenario we'd have SVG assets */}
           <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-600 font-bold">Azure</div>
                <span className="font-semibold">OpenAI Service</span>
           </div>
           <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-600 font-bold">SQL</div>
                <span className="font-semibold">Azure SQL</span>
           </div>
           <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-600 font-bold">Voice</div>
                <span className="font-semibold">Custom Neural Voice</span>
           </div>
           <div className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-600 font-bold">ML</div>
                <span className="font-semibold">Azure Machine Learning</span>
           </div>
        </div>
      </div>
    </section>
  );
}

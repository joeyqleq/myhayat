"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Mental Health in Lebanon: A Crisis in Silence</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
                Stigma, economic hardship, and ongoing conflict have made mental health care inaccessible for many.
                With therapy costing an average of $100/session, professional help is often out of reach.
                My Hayat exists to break these barriers.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-10">
                 <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                 >
                    <div className="text-5xl font-barrio text-primary mb-2">$100+</div>
                    <p className="font-medium">Avg Cost per Session</p>
                 </motion.div>
                 <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                 >
                    <div className="text-5xl font-barrio text-secondary mb-2">90%</div>
                    <p className="font-medium">Treatment Gap</p>
                 </motion.div>
                 <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
                 >
                    <div className="text-5xl font-barrio text-destructive mb-2">1st</div>
                    <p className="font-medium">Lebanese Dialect AI</p>
                 </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}

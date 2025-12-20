"use client";

import { motion } from "framer-motion";
import { Brain, HeartHandshake, ShieldCheck, MessageCircleHeart } from "lucide-react";

const features = [
  {
    icon: <MessageCircleHeart className="w-10 h-10 text-primary" />,
    title: "Lebanese Dialect Support",
    description: "Built on ALLaM-2-7B and fine-tuned for Lebanese Arabic. We understand the nuances, idioms, and cultural context.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
    title: "Private & Secure",
    description: "Your conversations are encrypted and anonymous. No PII is stored. We prioritize your privacy above all else.",
  },
  {
    icon: <Brain className="w-10 h-10 text-accent" />,
    title: "AI & Medical Expertise",
    description: "Developed in partnership with Lebanese psychiatrists to ensure safe, empathetic, and culturally relevant support.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-destructive" />,
    title: "Always Available",
    description: "Mental health doesn't follow a schedule. Access support 24/7 via our web app or WhatsApp integration.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why My Hayat?</h2>
          <p className="text-xl text-muted-foreground">
            Bridging the gap in mental health care with technology that speaks your language.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 bg-white p-3 rounded-full w-fit shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

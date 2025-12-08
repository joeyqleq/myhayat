"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Your Mental Health Companion, in <span className="text-primary glitch-text">Lebanese Arabic</span>
            </h1>
            <p className="text-xl text-muted-foreground md:pr-10">
              My Hayat is the first AI-powered chatbot designed to understand our dialect, our culture, and our struggles. Private, accessible, and always here for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="brand" size="xl">
                Chat Now
              </Button>
              <Button variant="outline" size="xl" className="border-2">
                Learn More
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
                        U
                    </div>
                 ))}
              </div>
              <p>Trusted by 1000+ users in Lebanon</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Abstract Background Shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="relative z-10 mx-auto w-full max-w-md md:max-w-full">
               <Image
                src="/assets/mockups/main_hayat.png" // Using the main mockup
                alt="My Hayat App Interface"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 bg-white p-4 rounded-xl shadow-xl hidden md:block"
            >
                <p className="font-barrio text-primary text-lg">"Keefak lyom?"</p>
            </motion.div>
             <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl hidden md:block"
            >
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold text-sm">Online 24/7</span>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

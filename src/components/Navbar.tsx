"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/brand/myhayat-logo2.png"
              alt="My Hayat Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#about"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#features"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Features
            </Link>
             <Link
              href="#echoes"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Echoes
            </Link>
            <Link
              href="#tech"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Technology
            </Link>
            <Button variant="brand" size="sm" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t"
          >
            <div className="flex flex-col p-4 gap-4">
              <Link
                href="#about"
                className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#features"
                className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
               <Link
                href="#echoes"
                className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Echoes
              </Link>
              <Link
                href="#tech"
                className="text-lg font-medium p-2 hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Technology
              </Link>
              <Button variant="brand" className="w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

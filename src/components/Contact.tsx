"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";

const cubePatternStyle = {
  backgroundColor: "#FE7E6E", // Base color from original contact section
  backgroundImage: `
    linear-gradient(30deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(150deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(30deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(150deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(60deg, #F0A18D 25%, transparent 25.5%, transparent 75%, #F0A18D 75%, #F0A18D),
    linear-gradient(60deg, #F0A18D 25%, transparent 25.5%, transparent 75%, #F0A18D 75%, #F0A18D)
  `,
  backgroundSize: "80px 140px", // Larger pattern for contact as per original CSS
  backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    try {
      await submitContactForm(formData);
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-800 tracking-tight">
            Contact the <span className="text-primary">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to listen. Reach out to us for any questions or support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Nassif Yazigi street, Beirut Digital District<br />
                  1499 building, co-working space<br />
                  Beirut, 1100
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <a href="mailto:info@myhayat.online" className="text-muted-foreground hover:text-primary transition-colors">
                  info@myhayat.online
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="https://facebook.com/joeyleq" target="_blank" className="p-3 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.91 24v-11.418h-3.872v-4.576h3.872v-3.332c0-3.79 2.29-5.91 5.67-5.91 1.62 0 3.23.11 3.23.11v3.54h-1.818c-1.87 0-2.46.16-2.46 2.45v2.88h4.08l-.54 4.58h-3.54v11.67z"/></svg>
               </a>
               <a href="https://instagram.com/joeyleq" target="_blank" className="p-3 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                   <Instagram className="w-5 h-5" />
               </a>
               <a href="https://x.com/joeyleq" target="_blank" className="p-3 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
               </a>
                <a href="https://www.linkedin.com/in/joeyleq/" target="_blank" className="p-3 bg-white rounded-full shadow-sm hover:text-primary hover:shadow-md transition-all">
                   <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 relative"
             style={{
                ...cubePatternStyle,
                borderRadius: "65px",
                borderTopLeftRadius: "356px",
                borderTopRightRadius: "53px",
                borderBottomRightRadius: "285px",
                borderBottomLeftRadius: "188px",
                border: "22px ridge #fec810",
                boxShadow: "-25px 46px 0px 0px rgb(254, 126, 110)",
             }}
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl min-h-[400px]">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
                <Button
                    className="mt-8"
                    onClick={() => setStatus("idle")}
                >
                    Send Another Message
                </Button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+961 ..."
                    className="flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help?"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full h-12 text-lg font-bold"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

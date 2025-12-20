"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// The "Japanese Cube" pattern recreated as a Tailwind/CSS utility class style or inline style
// Colors from original: #F0C0A6 and #F0A18D
const cubePatternStyle = {
  backgroundColor: "#fec810", // Fallback/Base
  backgroundImage: `
    linear-gradient(30deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(150deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(30deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(150deg, #F0C0A6 12%, transparent 12.5%, transparent 87%, #F0C0A6 87.5%, #F0C0A6),
    linear-gradient(60deg, #F0A18D 25%, transparent 25.5%, transparent 75%, #F0A18D 75%, #F0A18D),
    linear-gradient(60deg, #F0A18D 25%, transparent 25.5%, transparent 75%, #F0A18D 75%, #F0A18D)
  `,
  backgroundSize: "28px 49px",
  backgroundPosition: "0 0, 0 0, 14px 24.5px, 14px 24.5px, 0 0, 14px 24.5px",
};

const faqs = [
  {
    question: "What is My Hayat Online?",
    answer:
      "My Hayat is a rule-based conversational chatbot built on a fine-tuned LLM, specifically trained to understand the Lebanese dialect and cultural nuances. Developed in collaboration with technologists, mental health professionals, and conversational writers, My Hayat aims to provide emotional and motivational support to users when no other help is available. This innovative solution addresses a critical gap in a society where mental health support is often inaccessible, whether due to financial barriers, social taboos, or both.",
  },
  {
    question: "Is My Hayat a replacement for a therapist or doctor?",
    answer:
      "No. My Hayat offers basic, compassionate conversational support but is not a substitute for a real-life human mental health professional. Unlike generative AI models like ChatGPT, My Hayat AI is rule-based. Its conversations are crafted by conversational writers, incorporating elements from Cognitive Behavioral Therapy (CBT), Interpersonal Psychotherapy (IPT), and Dialectical Behavioral Therapy (DBT), in collaboration with our clinical experts. Rule-based guardrails are essential to ensure the chatbot provides safe, consistent, and contextually appropriate responses, especially when addressing sensitive mental health topics. If you’re experiencing severe mental distress, or if My Hayat detects signs of it during your conversation, please consult a mental health professional without delay.",
  },
  {
    question: "How is my privacy and anonymity protected?",
    answer:
      "My Hayat is designed to prioritize your privacy and anonymity. Conversations with My Hayat are not stored or linked to any personally identifiable information. Any data collected is used solely to improve the chatbot’s performance and is handled in accordance with strict privacy standards. We are committed to transparency in how your data is managed and ensuring you have control over your interactions. My Hayat does not share or sell user data to advertising companies or for advertising purposes.",
  },
  {
    question: "Is My Hayat safe to use?",
    answer:
      "At My Hayat, user safety is our top priority as we explore new technologies like large language models. We apply strict research, engineering, and clinical oversight to create responsible and effective products. My Hayat’s conversations are designed by experts to offer emotional and motivational support, and while it’s not a crisis service, it detects concerning language and offers information on external resources if needed. We protect all user data as Protected Health Information (PHI) and follow rigorous security protocols, including HIPAA compliance, with external assessments every year. Our Safety Assessment Committee, made up of clinical and medical experts, monitors data from trials and post-market use. We are committed to transparency, with all studies reviewed by an institutional review board (IRB), and we regularly share our findings and research methods.",
  },
  {
    question: "Why would I use My Hayat?",
    answer:
      "In Lebanon, where traditional values often make it difficult to talk openly about personal struggles, finding non-judgmental compassion can be a challenge. Many people face their own problems and may not be able to offer the support you need. Professional mental health services can be costly, often reaching $50 per session, making continuity a challenge for many. My Hayat was created to fill this gap, offering accessible wellness support, mindfulness practices, and motivation when you need it most. It provides a safe, non-judgmental space to help you navigate emotional challenges. The app includes a range of tools and resources for mental well-being, such as a locally stored mental notes diary, reminders, and emergency contacts. What makes My Hayat unique is that it is agnostic to diagnosis and focuses on mental wellness through the principles of Cognitive Behavioral Therapy (CBT). With a growth mindset at its core, My Hayat praises the process of growth rather than just the results. It views “failure” as an opportunity for growth and sees challenges as essential learning experiences. Struggles are not seen as signs of being beyond help, but as necessary steps in your recovery journey.",
  },
  {
    question: "Is My Hayat free to use?",
    answer:
      "Absolutely! My Hayat is free to download and use. It’s available on both iOS and Android devices, and you can easily get it from the Apple App Store or Google Play Store. The app is available in both English and Arabic. When signing up, you have the option to create an account without providing your real name, ensuring your privacy and anonymity.",
  },
  {
    question: "If everything is free to use, how does My Hayat make money?",
    answer:
      "Thanks to the generous contributions of developers, writers, and scientists who donate their time and efforts, either at no cost or at a heavily discounted rate, we’ve been able to keep My Hayat’s development costs low. This has been a tremendous gesture towards supporting the Lebanese community, especially as it recovers from the devastation of war. However, to ensure the sustainability of this free service, we are excited to introduce premium features in the next phase of our launch. For a small subscription fee, users will gain access to more customization options, personalized features, voice chat, and the ability to interact in various Lebanese Arabic accents and dialects. The premium version will also include multilingual conversations (English, Arabic, and French) with voice cloning capabilities that can be integrated into voice calls. We don’t want to spoil all the surprises about the premium features just yet, so you’ll have to wait to discover more 🙂! Rest assured, the free version will always remain available.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-800 tracking-tight">
            <span className="text-primary">Q</span>uestions &{" "}
            <span className="text-primary">A</span>nswers
          </h2>
        </div>

        {/* The Unique Organic Shape Container */}
        <div
          className="mx-auto max-w-4xl p-8 md:p-12 relative"
          style={{
            ...cubePatternStyle,
            borderRadius: "356px 53px 285px 188px",
            border: "9px ridge #fec810",
            borderTopWidth: "8px",
            borderRightWidth: "10px",
            borderBottomWidth: "9px",
            borderLeftWidth: "26px",
            boxShadow: "-11px 11px 0px 10px rgb(254, 126, 110)",
          }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg md:text-xl">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="p-6 pt-0 text-slate-700 leading-relaxed border-t border-slate-100">
                        {faq.answer.split('\n').map((line, i) => (
                           <p key={i} className="mb-4 last:mb-0">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

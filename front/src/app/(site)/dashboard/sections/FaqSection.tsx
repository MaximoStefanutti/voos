"use client";

import RevealOnScroll from "@/app/components/ui/animation/RevealOnScroll";
import { faqData } from "@/app/data/faq/faq";
import { ExpandMore } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-[#0a3635]/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* titulo*/}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="block w-16 h-[1px] bg-[#C6A45A] mx-auto mb-6" />
            <h2 className="text-3xl md:text-3xl text-center font-light text-white mb-1">
              Preguntas frecuentes
            </h2>
            <p className="text-[#f0d4a8] mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Información clara y trasparente para que vivas tu experiencia en
              VOOS Estética Integra con total confianza.
            </p>
          </div>
        </RevealOnScroll>

        {/* lista FAQ */}
        <div className="space-y-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <RevealOnScroll key={index} delay={index * 0.06}>
                <div className="group border-b border-white/10 pb-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full text-left py-4 transition-colors duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-light text-white group-hover:text-[#C6A45A] transition-colors duration-300">
                      {faq.question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#C6A45A]"
                    >
                      <ExpandMore fontSize="medium" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: -10 }}
                          animate={{ y: 0 }}
                          exit={{ y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="text-white/70 text-sm md:text-base leading-relaxed pr-8 pb-4"
                        >
                          {faq.answer}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

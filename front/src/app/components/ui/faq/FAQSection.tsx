"use client";

import { FaqItem } from "../../../../types/faq/faq";
import { useState } from "react";

interface Props {
  faqs: FaqItem[];
  title?: string;
  withSchema?: boolean;
}

export default function FAQSection({
  faqs,
  title = "Preguntas frecuentes",
  withSchema = false,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-ligth mb-4">{title}</h2>
        <div className="w-16 h-[2px] bg-[#C6A45A] mx-auto" />
      </div>

      {/* lista FAQ */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center"
              >
                <h3 className="font-medium text-base md:text-lg">
                  {faq.question}
                </h3>
                <span className="text-xl">{isOpen ? "-" : "+"}</span>
              </button>

              {isOpen && (
                <div className="px-6 pb-4 text-neutral-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

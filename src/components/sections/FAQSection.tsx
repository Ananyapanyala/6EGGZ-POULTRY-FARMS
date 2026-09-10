"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between free range and cage free eggs?",
    answer:
      "Free range and cage free describe different farming environments. Cage free hens are raised without conventional cages, while free range systems provide hens with access to outdoor areas according to the farm's management practices.",
  },
  {
    question: "How are 6EGGZ eggs handled from farm to market?",
    answer:
      "6EGGZ follows a structured farm-to-market process covering flock management, egg collection, quality checks, packing and supply through the intended distribution network.",
  },
  {
    question: "How does 6EGGZ maintain egg quality?",
    answer:
      "Egg quality is supported through controlled farm management, hygienic handling, routine monitoring and appropriate collection and packing practices.",
  },
  {
    question: "Where can I buy 6EGGZ eggs?",
    answer:
      "You will be able to find 6EGGZ eggs through the stores and distribution points listed on our Where to Buy page.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index: number) => {
    setActive((current) => (current === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <motion.h2
          className="faq-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <motion.div
                key={faq.question}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    size={24}
                    strokeWidth={1.7}
                    className={`faq-chevron ${
                      isOpen ? "faq-chevron-open" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

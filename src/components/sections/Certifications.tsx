"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const certifications = [
  {
    title: "Quality & Compliance",
    subtitle: "Documentation",
    image: "/certifications/certification-1.png",
  },
  {
    title: "Farm Standards",
    subtitle: "Documentation",
    image: "/certifications/certification-2.png",
  },
  {
    title: "Quality Testing",
    subtitle: "Reports",
    image: "/certifications/certification-3.png",
  },
  {
    title: "Regulatory Records",
    subtitle: "Documentation",
    image: "/certifications/certification-4.png",
  },
];

export default function Certifications() {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <motion.h2
          className="certifications-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          Certifications you can verify
        </motion.h2>

        <motion.div
          className="certifications-grid"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {certifications.map((item, index) => (
            <motion.article
              key={index}
              className="certification-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="certification-image-wrap">
                <img
                  src={item.image}
                  alt={`${item.title} ${item.subtitle}`}
                  className="certification-image"
                />
              </div>

              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.a
          href="/certifications"
          className="certifications-button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View Certifications
          <ArrowRight size={18} strokeWidth={2.2} />
        </motion.a>
      </div>
    </section>
  );
}

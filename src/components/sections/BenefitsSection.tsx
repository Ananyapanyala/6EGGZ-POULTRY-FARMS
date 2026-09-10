"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  Settings2,
  Droplets,
  Leaf,
  HeartPulse,
  Egg,
} from "lucide-react";

const benefits = [
  {
    side: "left",
    title: "Strong Biosecurity",
    icon: ShieldCheck,
  },
  {
    side: "left",
    title: "Scientific Flock Management",
    icon: Settings2,
  },
  {
    side: "left",
    title: "Clean Water Management",
    icon: Droplets,
  },
  {
    side: "right",
    title: "Controlled Environment",
    icon: Leaf,
  },
  {
    side: "right",
    title: "Consistent Quality Focus",
    icon: HeartPulse,
  },
  {
    side: "right",
    title: "Carefully Managed Eggs",
    icon: Egg,
  },
];

export default function BenefitsSection() {
  const leftBenefits = benefits.filter((benefit) => benefit.side === "left");

  const rightBenefits = benefits.filter((benefit) => benefit.side === "right");

  return (
    <section className="benefits-section">
      <div className="benefits-arch">
        {/* HEADING */}
        <motion.div
          className="benefits-heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="benefits-heading-bg">BENEFITS</div>

          <h2>6EGGZ</h2>
        </motion.div>

        {/* MAIN BENEFITS AREA */}
        <div className="benefits-main">
          {/* LEFT */}
          <div className="benefits-column benefits-column-left">
            {leftBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  className="benefit-item"
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <span className="benefit-title">{benefit.title}</span>

                  <div className="benefit-icon-circle">
                    <Icon size={42} strokeWidth={1.7} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CENTER */}
          <motion.div
            className="benefits-center"
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
            }}
          >
            <div className="benefits-ring">
              <div className="benefits-yellow-ring" />

              <img
                src="/hero/hero-egg.png"
                alt="6EGGZ egg"
                className="benefits-egg"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="benefits-column benefits-column-right">
            {rightBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  className="benefit-item"
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="benefit-icon-circle">
                    <Icon size={42} strokeWidth={1.7} />
                  </div>

                  <span className="benefit-title">{benefit.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

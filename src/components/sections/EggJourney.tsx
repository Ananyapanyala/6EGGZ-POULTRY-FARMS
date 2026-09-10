"use client";

import { motion } from "motion/react";

const journeySteps = [
  {
    number: "1",
    title: "Raised with Care",
    description:
      "Our flock is managed in a professionally operated poultry environment with attention to bird care and farm conditions.",
    icon: "hen",
  },
  {
    number: "2",
    title: "Quality Monitoring",
    description:
      "Farm operations and flock performance are regularly monitored to maintain consistency across the production cycle.",
    icon: "check",
  },
  {
    number: "3",
    title: "Egg Collection",
    description:
      "Automated egg collection systems help move eggs efficiently from the production area while supporting consistent farm operations.",
    icon: "egg",
  },
  {
    number: "4",
    title: "Market Supply",
    description:
      "Eggs from the professionally managed farm operation are prepared for movement through the supply chain.",
    icon: "truck",
  },
];

function JourneyIcon({ type }: { type: string }) {
  if (type === "hen") {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M20 45c0-10 6-17 12-17s12 7 12 17" />
        <path d="M32 28c-6-3-9-8-8-14 7 0 12 4 13 10" />
        <circle cx="37" cy="18" r="5" />
        <path d="M41 18h7" />
        <path d="M27 45v7" />
        <path d="M37 45v7" />
      </svg>
    );
  }

  if (type === "check") {
    return (
      <svg viewBox="0 0 64 64">
        <circle cx="31" cy="31" r="15" />
        <path d="m24 31 5 5 9-11" />
        <path d="M43 43 50 50" />
      </svg>
    );
  }

  if (type === "egg") {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M32 12c-7 10-14 18-14 28 0 8 6 13 14 13s14-5 14-13c0-10-7-18-14-28Z" />
        <path d="M27 43c2 3 5 4 8 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64">
      <rect x="9" y="24" width="34" height="21" rx="3" />
      <path d="M43 30h8l5 8v7H43" />
      <circle cx="21" cy="49" r="4" />
      <circle cx="47" cy="49" r="4" />
      <path d="M16 24v-7h18v7" />
    </svg>
  );
}

export default function EggJourney() {
  return (
    <section className="egg-journey-section">
      {/* =====================================================
          HEADING
          ===================================================== */}

      <motion.div
        className="egg-journey-heading"
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2>
          How our eggs move
          <br className="egg-journey-mobile-break" />
        </h2>
      </motion.div>

      {/* =====================================================
          JOURNEY
          ===================================================== */}

      <div className="egg-journey-flow">
        {/* CONNECTING LINE */}

        <div className="egg-journey-line">
          <div className="egg-journey-line-fill" />
        </div>

        {/* STEPS */}

        {journeySteps.map((step, index) => (
          <motion.div
            key={step.number}
            className={`egg-journey-step egg-journey-step-${index + 1}`}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* CIRCLE */}

            <div className="egg-journey-icon-wrap">
              <div className="egg-journey-icon">
                <JourneyIcon type={step.icon} />
              </div>

              <span className="egg-journey-number">{step.number}</span>
            </div>

            {/* TEXT */}

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          CTA
          ===================================================== */}

      <motion.div
        className="egg-journey-cta"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
      >
        <a href="/products">
          Explore Our Egg Ranges
          <span>→</span>
        </a>
      </motion.div>
    </section>
  );
}

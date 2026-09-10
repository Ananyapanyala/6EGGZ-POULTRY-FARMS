"use client";

import { motion } from "motion/react";

type Step = {
  number: string;
  title: string;
  color: "green" | "yellow";
  icon:
    | "feed"
    | "nutrition"
    | "water"
    | "mineral"
    | "feeding"
    | "monitor"
    | "environment";
};

const steps: Step[] = [
  {
    number: "01",
    title: "Balanced Feed",
    color: "green",
    icon: "feed",
  },
  {
    number: "02",
    title: "Layer Nutrition",
    color: "yellow",
    icon: "nutrition",
  },
  {
    number: "03",
    title: "Clean Water",
    color: "green",
    icon: "water",
  },
  {
    number: "04",
    title: "Mineral Support",
    color: "yellow",
    icon: "mineral",
  },
  {
    number: "05",
    title: "Scientific Feeding",
    color: "yellow",
    icon: "feeding",
  },
  {
    number: "06",
    title: "Flock Monitoring",
    color: "green",
    icon: "monitor",
  },
  {
    number: "07",
    title: "Controlled Environment",
    color: "yellow",
    icon: "environment",
  },
];

function StepIcon({ type }: { type: Step["icon"] }) {
  switch (type) {
    case "feed":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M32 54V11" />
          <path d="M32 20C24 20 18 16 16 9c9 0 15 4 16 11Z" />
          <path d="M32 31c8 0 14-5 16-12-9 0-15 4-16 12Z" />
          <path d="M32 42c-8 0-14-5-16-12 9 0 15 4 16 12Z" />
          <path d="M32 50c8 0 14-5 16-12-9 0-15 4-16 12Z" />
        </svg>
      );

    case "nutrition":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M13 47h38" />
          <path d="M18 47c0-9 6-15 14-15s14 6 14 15" />
          <path d="M25 32c-2-8 1-14 7-19 6 5 9 11 7 19" />
          <path d="M32 14v20" />
          <path d="M24 39h16" />
        </svg>
      );

    case "water":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M32 8C26 18 18 27 18 37c0 9 6 16 14 16s14-7 14-16C46 27 38 18 32 8Z" />
          <path d="M26 42c2 3 5 5 9 5" />
        </svg>
      );

    case "mineral":
      return (
        <svg viewBox="0 0 64 64">
          <path d="m32 8 10 6v12l-10 6-10-6V14l10-6Z" />
          <path d="m22 26 10 6 10-6" />
          <path d="M32 20v12" />
          <path d="m20 40 12-7 12 7-12 7-12-7Z" />
          <path d="M32 47v10" />
        </svg>
      );

    case "feeding":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M16 48c4-11 10-18 16-18s12 7 16 18" />
          <path d="M22 30c-5-3-8-7-9-13 7 0 12 3 14 9" />
          <path d="M42 30c5-3 8-7 9-13-7 0-12 3-14 9" />
          <path d="M32 30V15" />
          <path d="M32 15c4-2 7-5 8-9" />
        </svg>
      );

    case "monitor":
      return (
        <svg viewBox="0 0 64 64">
          <rect x="18" y="14" width="28" height="39" rx="3" />
          <path d="M25 10h14v7H25z" />
          <path d="m25 28 3 3 6-7" />
          <path d="M25 39h13" />
          <path d="M25 46h9" />
        </svg>
      );

    case "environment":
      return (
        <svg viewBox="0 0 64 64">
          <path d="M10 30 32 12l22 18" />
          <path d="M17 27v26h30V27" />
          <path d="M32 53V35" />
          <path d="M32 42c-7 0-11-4-11-9 7 0 11 3 11 9Z" />
          <path d="M32 46c7 0 11-4 11-9-7 0-11 3-11 9Z" />
        </svg>
      );
  }
}

export default function HenStory() {
  return (
    <section className="hen-story-section">
      {/* =====================================================
          SECTION INTRO
          ===================================================== */}

      <div className="hen-story-intro">
        <motion.div
          className="hen-story-heading"
          initial={{
            opacity: 0,
            x: -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hen-story-pill">Our Hen Story</div>

          <h2>
            Our Unique Diet
            <br />
            Chart
          </h2>
        </motion.div>

        <motion.div
          className="hen-story-green-shape"
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p>
            6EGGZ Poultry Farms follows scientifically managed flock nutrition
            and modern commercial layer farming practices to support consistent
            and responsible egg production.
          </p>

          <p>
            Automated feeding systems, clean drinking water, controlled farm
            conditions and regular flock monitoring form an important part of
            our approach.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          MAIN DIET CHART
          ===================================================== */}

      <motion.div
        className="diet-chart-panel"
        initial={{
          opacity: 0,
          y: 55,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.12,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* =================================================
            LEFT HEN VISUAL
            ================================================= */}

        <div className="diet-chart-bird">
          <div className="diet-chart-glow" />

          <div className="diet-chart-ring">
            <div className="diet-chart-ring-accent" />

            <img src="/hero/hero-hen.png" alt="6EGGZ poultry farm hen" />
          </div>

          {/* Decorative leaves */}
          <span className="diet-chart-leaf diet-chart-leaf-one" />
          <span className="diet-chart-leaf diet-chart-leaf-two" />
        </div>

        {/* =================================================
            RIGHT TIMELINE
            ================================================= */}

        <div className="diet-chart-timeline">
          {/* =================================================
              SINGLE CONTINUOUS CONNECTOR
              ================================================= */}

          <svg
            className="diet-chart-connector"
            viewBox="0 0 900 430"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
      M 100 80
      H 800
      C 835 80 850 105 850 145
      V 270
      C 850 310 830 335 790 335
      H 100
    "
            />
          </svg>

          {/* =================================================
              STEP GRID
              ================================================= */}

          <div className="diet-chart-grid">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className={`diet-step diet-step-${index + 1}`}
                initial={{
                  opacity: 0,
                  y: 22,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className={`diet-step-circle ${step.color}`}>
                  <div className="diet-step-number">{step.number}</div>

                  <div className="diet-step-icon">
                    <StepIcon type={step.icon} />
                  </div>
                </div>

                <div className="diet-step-title">{step.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

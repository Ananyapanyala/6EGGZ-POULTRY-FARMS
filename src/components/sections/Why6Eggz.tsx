"use client";

import Image from "next/image";
import { motion } from "motion/react";

const benefits = [
  {
    title: (
      <>
        Modern
        <br />
        Farm Systems
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M13 58c12-16 30-22 52-17" />
        <path d="M12 66c17-14 36-17 57-12" />
        <path d="M29 58V27" />
        <path d="M29 27c7 0 13 6 13 13H29" />
        <path d="M48 51V31" />
        <path d="M48 31c5 0 10 4 10 9H48" />
        <path d="M57 29l9-7 9 7v12H57z" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Automated
        <br />
        Farm Operations
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M17 52c10-10 19-15 28-15 9 0 18 5 28 15" />
        <path d="M22 60c9-7 16-10 23-10 8 0 15 3 23 10" />
        <path d="M40 19v23" />
        <path d="M29 27l11-8 11 8" />
        <path d="M32 31h16v14H32z" />
        <circle cx="40" cy="37" r="2" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Biosecurity
        <br />
        Focused
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 12l21 8v16c0 14-9 24-21 30-12-6-21-16-21-30V20z" />
        <path d="M30 39l7 7 14-16" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Quality
        <br />
        Egg Production
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 13c-10 12-16 21-16 31 0 11 7 19 16 19s16-8 16-19c0-10-6-19-16-31z" />
        <path d="M34 48c2 4 5 6 9 6" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Scientific
        <br />
        Flock Management
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M20 51c5-15 14-23 26-23 8 0 13 5 13 12 0 8-7 13-16 13H20z" />
        <path d="M47 28c2-5 7-8 12-7" />
        <path d="M59 21l5 5-6 4" />
        <path d="M28 53v10M39 53v10" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Responsible
        <br />
        Poultry Care
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 65c-3-17-14-28-29-31 5 18 15 28 29 31z" />
        <path d="M40 65c3-17 14-28 29-31-5 18-15 28-29 31z" />
        <path d="M40 65V22" />
        <path d="M40 29c-7-5-13-5-18-3" />
        <path d="M40 39c7-5 13-5 18-3" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Efficient
        <br />
        Egg Collection
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <path d="M40 13c-10 12-16 21-16 31 0 11 7 19 16 19s16-8 16-19c0-10-6-19-16-31z" />
        <path d="M18 63h44" />
        <path d="M27 58h26" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Clean &<br />
        Controlled Environment
      </>
    ),
    icon: (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="40" r="25" />
        <path d="M27 47c4-9 10-14 18-14 5 0 9 3 10 8" />
        <path d="M40 25v15" />
        <path d="M34 32l6-7 6 7" />
      </svg>
    ),
  },
];

export default function Why6Eggz() {
  return (
    <section className="why6-section">
      {/* =====================================================
          WHY 6EGGZ
         ===================================================== */}

      <div className="why6-intro">
        <div className="why6-brand-lockup">
          {/* Static background WHY */}
          <span className="why6-yellow-why">WHY</span>

          {/* 6EGGZ comes above the WHY */}
          <motion.span
            className="why6-black-brand"
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            6EGGZ
          </motion.span>
        </div>

        <motion.h2
          className="why6-main-heading"
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          What makes 6EGGZ different?
        </motion.h2>

        <motion.p
          className="why6-main-copy"
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          6EGGZ Poultry Farms is being developed as a modern
          environment-controlled commercial layer poultry farm focused on table
          egg production. The project brings together modern poultry
          infrastructure, scientific flock management and technology-driven farm
          systems to create a professionally managed egg production operation.
        </motion.p>
      </div>

      {/* =====================================================
          FRESH EGGS PANEL
         ===================================================== */}

      <motion.div
        className="why6-fresh-panel"
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
          amount: 0.16,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* LEFT SIDE */}

        <div className="why6-visual-side">
          <div className="why6-yellow-arc" />

          <motion.div
            className="why6-fresh-heading"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Fresh Eggs.
          </motion.div>

          {/* Main egg visual */}

          <motion.div
            className="why6-egg-visual"
            initial={{
              opacity: 0,
              y: 45,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.18,
            }}
            transition={{
              duration: 1,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/hero/hero-egg.png"
              alt="6EGGZ eggs"
              width={900}
              height={700}
              priority={false}
            />
          </motion.div>

          {/* Floating feathers */}

          <motion.div
            className="why6-feather why6-feather-a"
            animate={{
              x: [0, 10, -4, 0],
              y: [0, -7, 4, 0],
              rotate: [-8, 3, -3, -8],
            }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="why6-feather why6-feather-b"
            animate={{
              x: [0, -8, 6, 0],
              y: [0, 6, -6, 0],
              rotate: [8, -4, 4, 8],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
        </div>

        {/* RIGHT SIDE */}

        <div className="why6-benefits-side">
          <motion.h3
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            From Farm to Market
          </motion.h3>

          <div className="why6-benefit-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                className="why6-benefit-item"
                key={index}
                initial={{
                  opacity: 0,
                  y: 18,
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
                  duration: 0.55,
                  delay: 0.28 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="why6-benefit-icon">{benefit.icon}</div>

                <div className="why6-benefit-label">{benefit.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

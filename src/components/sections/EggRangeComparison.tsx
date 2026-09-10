"use client";

import { motion } from "motion/react";

const ranges = [
  {
    badge: "6E",
    name: "6EGGZ Table Eggs",
    fortified: ["Farm Managed", "Quality Focused"],
    bestFor: "Everyday table egg requirements",
  },
  {
    badge: "FR",
    name: "Free Range Eggs",
    fortified: ["Free Range", "Natural Farming"],
    bestFor: "Consumers looking for free-range eggs",
  },
  {
    badge: "CF",
    name: "Cage Free Eggs",
    fortified: ["Cage Free", "Responsible Care"],
    bestFor: "Consumers looking for cage-free eggs",
  },
  {
    badge: "PF",
    name: "Premium Eggs",
    fortified: ["Carefully Managed", "Quality Focused"],
    bestFor: "A premium everyday egg choice",
  },
];

export default function EggRangeComparison() {
  return (
    <section className="egg-range-section">
      {/* =====================================================
          HEADING
          ===================================================== */}

      <motion.div
        className="egg-range-heading"
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
          Compare our
          <br />
          egg ranges
        </h2>

        <p>
          Explore the different 6EGGZ egg ranges and understand the farming
          approach and positioning behind each range.
        </p>
      </motion.div>

      {/* =====================================================
          COMPARISON TABLE
          ===================================================== */}

      <motion.div
        className="egg-range-table-wrap"
        initial={{
          opacity: 0,
          y: 45,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* TABLE HEADER */}

        <div className="egg-range-table-header">
          <div>RANGE</div>

          <div>FARMING APPROACH</div>

          <div>BEST FOR</div>
        </div>

        {/* TABLE ROWS */}

        <div className="egg-range-table-body">
          {ranges.map((range, index) => (
            <motion.div
              key={range.name}
              className="egg-range-row"
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >
              {/* RANGE */}

              <div className="egg-range-name">
                <span className="egg-range-badge">{range.badge}</span>

                <span>{range.name}</span>
              </div>

              {/* APPROACH */}

              <div className="egg-range-tags">
                {range.fortified.map((tag) => (
                  <span key={tag} className="egg-range-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* BEST FOR */}

              <div className="egg-range-best">{range.bestFor}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* =====================================================
          CTA
          ===================================================== */}

      <motion.div
        className="egg-range-cta"
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

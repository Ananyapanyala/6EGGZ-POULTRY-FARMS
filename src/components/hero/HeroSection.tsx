"use client";

import Link from "next/link";
import { ArrowRight, Heart, Leaf, Sun } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quality Eggs
          </motion.span>

          <div className="hero-heading-wrapper">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.045,
                    delayChildren: 0.35,
                  },
                },
              }}
            >
              <span className="hero-heading-line">
                {"Eggs Made".split("").map((letter, index) => (
                  <motion.span
                    key={`eggs-${index}`}
                    className="hero-letter hero-letter-black"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 28,
                        filter: "blur(5px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>

              <strong className="hero-heading-line">
                {"Better.".split("").map((letter, index) => (
                  <motion.span
                    key={`better-${index}`}
                    className="hero-letter hero-letter-yellow"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 28,
                        filter: "blur(5px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: {
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </strong>
            </motion.h1>

            <motion.div
              className="hero-heading-decoration"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
            ></motion.div>
          </div>

          <motion.div
            className="hero-description-card"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
          >
            <p>
              Carefully raised hens, thoughtful farming practices, and
              quality-focused production come together to bring you fresh eggs
              from 6EGGZ Poultry Farms.
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <Link href="/where-to-buy" className="hero-primary-button">
              <span>Find a Store Near You</span>
              <ArrowRight size={18} />
            </Link>

            <Link href="/products" className="hero-secondary-button">
              Explore Our Egg Ranges
            </Link>
          </motion.div>

          {/* TRUST FEATURES */}
          <motion.div
            className="hero-trust"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
          >
            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <Leaf size={19} strokeWidth={1.7} />
              </span>

              <span>Quality Focused</span>
            </div>

            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <Sun size={19} strokeWidth={1.7} />
              </span>

              <span>Farm Fresh</span>
            </div>

            <div className="hero-trust-item">
              <span className="hero-trust-icon">
                <Heart size={18} strokeWidth={1.7} />
              </span>

              <span>Raised With Care</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
        >
          <div className="hero-yellow-shape" />

          <div className="hero-eggs">
            <img
              src="/hero/hero-egg.png"
              alt="Fresh eggs from 6EGGZ Poultry Farms"
            />
          </div>

          <div className="hero-hen">
            <img src="/hero/hero-hen.png" alt="Hen at 6EGGZ Poultry Farms" />
          </div>

          <div className="hero-visual-glow" />
        </motion.div>
      </div>
    </section>
  );
}

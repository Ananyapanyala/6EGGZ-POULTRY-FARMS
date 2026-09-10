"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <nav className="mobile-navigation" aria-label="Mobile navigation">
            <div className="mobile-dropdown">
              <button
                type="button"
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setWhyOpen((previous) => !previous)}
              >
                <span>Why 6EGGZ</span>

                <ChevronDown
                  size={18}
                  className={whyOpen ? "mobile-chevron-open" : ""}
                />
              </button>

              <AnimatePresence>
                {whyOpen && (
                  <motion.div
                    className="mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <Link href="/why-6eggz#benefits" onClick={onClose}>
                      Benefits
                    </Link>

                    <Link href="/why-6eggz#motivation" onClick={onClose}>
                      Our Motivation
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mobile-dropdown">
              <button
                type="button"
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setProductsOpen((previous) => !previous)}
              >
                <span>Products</span>

                <ChevronDown
                  size={18}
                  className={productsOpen ? "mobile-chevron-open" : ""}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    className="mobile-submenu"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <Link href="/products" onClick={onClose}>
                      All Products
                    </Link>

                    <Link href="/free-range-eggs" onClick={onClose}>
                      Free Range Eggs
                    </Link>

                    <Link href="/cage-free-eggs" onClick={onClose}>
                      Cage Free Eggs
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/free-range-eggs"
              className="mobile-nav-link"
              onClick={onClose}
            >
              Free Range Eggs
            </Link>

            <Link
              href="/cage-free-eggs"
              className="mobile-nav-link"
              onClick={onClose}
            >
              Cage Free Eggs
            </Link>

            <Link
              href="/where-to-buy"
              className="mobile-nav-link"
              onClick={onClose}
            >
              Where to Buy?
            </Link>

            <Link
              href="/certifications"
              className="mobile-nav-link"
              onClick={onClose}
            >
              Certifications
            </Link>

            <Link
              href="/contact-us"
              className="mobile-nav-link mobile-contact-link"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

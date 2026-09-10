"use client";

import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  AtSign,
  Camera,
  Play,
  MessageCircle,
} from "lucide-react";

export default function FarmTale() {
  return (
    <section className="farm-tale-section">
      <div className="farm-tale-background">
        <div className="farm-tale-content">
          {/* BRAND */}
          <motion.div
            className="farm-tale-brand"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="farm-tale-logo">6EGGZ</div>

            <div className="farm-tale-tagline">
              QUALITY FROM A MODERN POULTRY FARM
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
          >
            Our Farm&apos;s Tale
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            className="farm-tale-description"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.14,
            }}
          >
            6EGGZ Poultry Farms is being developed as a professionally managed,
            modern layer poultry operation focused on producing quality table
            eggs through scientific flock management, controlled farm conditions
            and efficient automated systems.
          </motion.p>

          {/* NAVIGATION */}
          <motion.nav
            className="farm-tale-nav"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.2,
            }}
          >
            <a href="/">Home</a>
            <span />
            <a href="/why-6eggz">Why 6EGGZ</a>
            <span />
            <a href="/products">Products</a>
            <span />
            <a href="/free-range-eggs">Free Range Eggs</a>
            <span />
            <a href="/cage-free-eggs">Cage Free Eggs</a>
            <span />
            <a href="/where-to-buy">Where to Buy?</a>
            <span />
            <a href="/certifications">Certifications</a>
            <span />
            <a href="/contact-us">Contact Us</a>
          </motion.nav>

          {/* CONTACT DETAILS */}
          <motion.div
            className="farm-tale-contact"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.26,
            }}
          >
            <div className="farm-contact-item">
              <Phone size={20} strokeWidth={2} />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="farm-contact-divider" />

            <div className="farm-contact-item">
              <Mail size={20} strokeWidth={2} />
              <span>info@6eggz.com</span>
            </div>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            className="farm-tale-address"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <MapPin size={21} strokeWidth={2} />

            <span>6EGGZ Poultry Farms, Telangana, India</span>
          </motion.div>

          {/* AVAILABILITY */}
          <motion.p
            className="farm-tale-availability"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.34,
            }}
          >
            6EGGZ products will be available through our growing distribution
            network. Visit
            <a href="/where-to-buy"> Where to Buy?</a> for current availability.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            className="farm-tale-socials"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <a href="#" aria-label="Facebook">
              <AtSign size={20} />
            </a>

            <a href="#" aria-label="Instagram">
              <Camera size={20} />
            </a>

            <a href="#" aria-label="YouTube">
              <Play size={20} />
            </a>

            <a href="#" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

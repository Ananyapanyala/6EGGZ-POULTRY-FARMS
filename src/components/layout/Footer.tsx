"use client";

import { motion } from "motion/react";
import { Camera, MessageCircle, Play, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" aria-label="Facebook">
            <Users size={19} />
          </a>

          <a href="#" aria-label="Instagram">
            <Camera size={19} />
          </a>

          <a href="#" aria-label="YouTube">
            <Play size={19} />
          </a>

          <a href="#" aria-label="WhatsApp">
            <MessageCircle size={19} />
          </a>
        </motion.div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} 6EGGZ Poultry Farms. All rights
            reserved.
          </span>

          <div className="footer-legal-links">
            <a href="/privacy-policy">Privacy Policy</a>

            <span />

            <a href="/terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

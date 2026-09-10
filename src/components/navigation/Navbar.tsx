"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="navbar-container">
        <a href="/" className="navbar-logo" aria-label="6EGGZ Poultry Farms">
          <img src="/brand/logo.png" alt="6EGGZ Poultry Farms" />
        </a>

        <DesktopMenu />

        <button type="button" className="navbar-search" aria-label="Search">
          <Search size={22} strokeWidth={2.5} />
        </button>

        <button
          type="button"
          className={`mobile-menu-button ${
            mobileOpen ? "mobile-menu-button--open" : ""
          }`}
          onClick={() => setMobileOpen((previous) => !previous)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

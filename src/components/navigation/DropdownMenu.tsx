"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenuProps = {
  label: string;
  items: DropdownItem[];
};

export default function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setTimeout(() => setOpen(false), 100);
      }}
    >
      <button
        type="button"
        className={`desktop-nav-link dropdown-trigger ${
          open ? "dropdown-trigger--active" : ""
        }`}
        onClick={() => setOpen((previous) => !previous)}
        aria-expanded={open}
      >
        <span>{label}</span>

        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`dropdown-chevron ${open ? "dropdown-chevron--open" : ""}`}
        />
      </button>

      {open && (
        <motion.div
          className="dropdown-panel"
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 8,
          }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="dropdown-item"
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>

              <span className="dropdown-item-arrow">→</span>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
}

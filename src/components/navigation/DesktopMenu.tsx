import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function DesktopMenu() {
  return (
    <nav className="desktop-navigation" aria-label="Main navigation">
      <DropdownMenu
        label="Why 6EGGZ"
        items={[
          {
            label: "Benefits",
            href: "/why-6eggz#benefits",
          },
          {
            label: "Our Motivation",
            href: "/why-6eggz#motivation",
          },
        ]}
      />

      <DropdownMenu
        label="Products"
        items={[
          {
            label: "All Products",
            href: "/products",
          },
          {
            label: "Free Range Eggs",
            href: "/free-range-eggs",
          },
          {
            label: "Cage Free Eggs",
            href: "/cage-free-eggs",
          },
        ]}
      />

      <Link href="/free-range-eggs" className="desktop-nav-link">
        Free Range Eggs
      </Link>

      <Link href="/cage-free-eggs" className="desktop-nav-link">
        Cage Free Eggs
      </Link>

      <Link href="/where-to-buy" className="desktop-nav-link">
        Where to Buy?
      </Link>

      <Link href="/certifications" className="desktop-nav-link">
        Certifications
      </Link>

      <Link href="/contact-us" className="desktop-nav-link">
        Contact
      </Link>
    </nav>
  );
}

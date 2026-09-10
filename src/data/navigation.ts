export type NavItem = {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
};

export const navigationItems: NavItem[] = [
  {
    label: "Why 6EGGZ",
    dropdown: [
      {
        label: "Benefits",
        href: "/why-6eggz#benefits",
      },
      {
        label: "Our Motivation",
        href: "/why-6eggz#motivation",
      },
    ],
  },

  {
    label: "Products",
    dropdown: [
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
    ],
  },

  {
    label: "Free Range Eggs",
    href: "/free-range-eggs",
  },

  {
    label: "Cage Free Eggs",
    href: "/cage-free-eggs",
  },

  {
    label: "Where to Buy?",
    href: "/where-to-buy",
  },

  {
    label: "Certifications",
    href: "/certifications",
  },

  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
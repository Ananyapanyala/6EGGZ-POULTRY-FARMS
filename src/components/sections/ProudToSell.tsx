"use client";

import { motion } from "motion/react";

const products = [
  {
    name: "6EGGZ Table Eggs",
    image: "/products/table-eggs.png",
    description:
      "Our everyday table egg range, produced through a professionally managed layer farming operation.",
  },
  {
    name: "Free Range Eggs",
    image: "/products/free-range-eggs.png",
    description:
      "An egg range designed around free-range farming practices and responsible flock management.",
  },
  {
    name: "Cage Free Eggs",
    image: "/products/cage-free-eggs.png",
    description:
      "Eggs from a cage-free farming approach with careful attention to flock environment and management.",
  },
  {
    name: "Premium Eggs",
    image: "/products/premium-eggs.png",
    description:
      "A premium 6EGGZ range focused on consistent quality and carefully managed production.",
  },
];

export default function ProudToSell() {
  return (
    <section className="proud-section">
      <div className="proud-heading-wrap">
        {/* STATIC BACKGROUND WORD — SAME STYLE AS WHY 6EGGZ */}
        <div className="proud-heading-bg">PROUD TO SELL</div>

        {/* FOREGROUND BRAND NAME */}
        <h2>6EGGZ</h2>
      </div>

      <div className="proud-products">
        {products.map((product, index) => (
          <motion.article
            key={product.name}
            className="proud-product-card"
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.55,
              delay: index * 0.07,
            }}
          >
            <div className="proud-product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="proud-product-content">
              <h3>{product.name}</h3>

              <p>{product.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

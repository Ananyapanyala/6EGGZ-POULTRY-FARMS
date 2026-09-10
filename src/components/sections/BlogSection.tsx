"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    image: "/blog/blog-1.jpg",
    title: "How to Choose the Right Eggs for Your Everyday Meals",
  },
  {
    image: "/blog/blog-2.jpg",
    title: "From Farm to Kitchen: Understanding Egg Freshness",
  },
  {
    image: "/blog/blog-3.jpg",
    title: "Free Range and Cage Free Eggs: What Is the Difference?",
  },
];

export default function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <motion.h2
          className="blog-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          From our blog
        </motion.h2>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="blog-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-image-wrap">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>

              <div className="blog-card-content">
                <h3>{post.title}</h3>

                <a href="#" className="blog-button">
                  Learn more
                  <ArrowRight size={17} strokeWidth={2} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

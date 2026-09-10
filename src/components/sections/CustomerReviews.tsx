"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, CircleCheck } from "lucide-react";

const reviews = [
  {
    text: "The eggs are really fresh and the quality has been consistently good. Very happy with the overall quality and freshness.",
    name: "Srinivas Reddy",
    initials: "SR",
  },
  {
    text: "Really good quality eggs. They are fresh, clean and have become a regular part of our everyday breakfast.",
    name: "Lakshmi Priya",
    initials: "LP",
  },
  {
    text: "Very good eggs and good freshness. The quality has been consistent every time we purchased them.",
    name: "Rahul Kumar",
    initials: "RK",
  },
  {
    text: "I really liked the quality of the eggs. They are fresh and work very well for everyday cooking and breakfast.",
    name: "Anusha Reddy",
    initials: "AR",
  },
  {
    text: "Good quality and nicely handled. We have been using them regularly and the freshness has been impressive.",
    name: "Vamshi Krishna",
    initials: "VK",
  },
  {
    text: "The eggs are fresh and clean with good quality. My family has been very happy with them.",
    name: "Kavya Sharma",
    initials: "KS",
  },
  {
    text: "Very satisfied with the freshness and overall quality. Definitely a good choice for regular household use.",
    name: "Mahesh Babu",
    initials: "MB",
  },
  {
    text: "Good experience overall. The eggs were fresh and the quality was exactly what we were looking for.",
    name: "Deepthi Rao",
    initials: "DR",
  },
  {
    text: "We use eggs almost every day and the quality has been very consistent. Really happy with the freshness.",
    name: "Pradeep Reddy",
    initials: "PR",
  },
  {
    text: "Good quality eggs and very fresh. They have become a regular purchase for our family.",
    name: "Sneha Reddy",
    initials: "SR",
  },
];

const getVisibleReviews = (active: number) => {
  return [
    reviews[active % reviews.length],
    reviews[(active + 1) % reviews.length],
    reviews[(active + 2) % reviews.length],
  ];
};

export default function CustomerReviews() {
  const [active, setActive] = useState(0);

  const previous = () => {
    setActive((current) => (current === 0 ? reviews.length - 1 : current - 1));
  };

  const next = () => {
    setActive((current) => (current === reviews.length - 1 ? 0 : current + 1));
  };

  const visibleReviews = getVisibleReviews(active);

  return (
    <section className="customer-reviews-section">
      <div className="customer-reviews-container">
        {/* HEADING */}
        <motion.h2
          className="customer-reviews-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What our customers say
        </motion.h2>

        {/* OVERALL RATING */}
        <motion.div
          className="customer-rating"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <strong>4.9</strong>

          <div className="customer-rating-stars">★ ★ ★ ★ ★</div>

          <div className="customer-rating-divider" />

          <span>10+ customer reviews</span>
        </motion.div>

        {/* REVIEW CAROUSEL */}
        <div className="reviews-carousel">
          {/* LEFT ARROW */}
          <button
            type="button"
            className="reviews-arrow reviews-arrow-left"
            onClick={previous}
            aria-label="Previous reviews"
          >
            <ChevronLeft size={19} strokeWidth={1.8} />
          </button>

          {/* THREE CARDS */}
          <div className="reviews-grid">
            <AnimatePresence mode="popLayout">
              {visibleReviews.map((review, index) => (
                <motion.article
                  key={`${active}-${index}`}
                  className="review-card"
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                >
                  {/* QUOTE */}
                  <div className="review-quote">“</div>

                  {/* STARS */}
                  <div className="review-stars">★ ★ ★ ★ ★</div>

                  {/* REVIEW */}
                  <p className="review-text">{review.text}</p>

                  {/* READ FULL REVIEW */}
                  <button
                    type="button"
                    className="review-full-link"
                    onClick={() => {}}
                  >
                    Read full review
                  </button>

                  {/* DIVIDER */}
                  <div className="review-divider" />

                  {/* AUTHOR */}
                  <div className="review-author">
                    <div className="review-avatar">{review.initials}</div>

                    <div className="review-author-info">
                      <strong>{review.name}</strong>

                      <span>
                        <CircleCheck size={13} strokeWidth={2} />
                        Verified Google Review
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* RIGHT ARROW */}
          <button
            type="button"
            className="reviews-arrow reviews-arrow-right"
            onClick={next}
            aria-label="Next reviews"
          >
            <ChevronRight size={19} strokeWidth={1.8} />
          </button>
        </div>

        {/* CAROUSEL DOTS */}
        <div className="reviews-dots">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to review ${index + 1}`}
              className={`review-dot ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

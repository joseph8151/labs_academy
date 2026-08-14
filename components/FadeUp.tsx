"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

export default function FadeUp({ children, delay = 0, className, as = "div" }: FadeUpProps) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.24), ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}

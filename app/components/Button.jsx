"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
}) {
  const baseStyle =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl border-[3px] border-black font-bold transition-all duration-200";

  const variants = {
    primary:
      "bg-[#C8FF1A] text-black shadow-[5px_5px_0px_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#111]",

    secondary:
      "bg-white text-black shadow-[5px_5px_0px_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#111]",

    blue:
      "bg-[#52C0FE] text-black shadow-[5px_5px_0px_#111] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#111]",

    dark:
      "bg-[#111111] text-white shadow-[5px_5px_0px_#C8FF1A] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_#C8FF1A]",
  };

  const className = `${baseStyle} ${variants[variant]}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
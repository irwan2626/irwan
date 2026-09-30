"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@gmail.com",
  },
];

const menuLinks = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] px-4 pb-6 pt-12 text-white md:px-6 md:pt-16">
      <div className="mx-auto max-w-6xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-8 md:grid-cols-12 lg:gap-10">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <a
              href="#home"
              className="inline-block text-2xl font-black tracking-tight md:text-3xl"
            >
              Irwan
              <span className="text-[#C8FF1A]">.</span>
            </a>

            <p className="mt-3 max-w-sm text-xs leading-relaxed text-gray-400 md:text-sm">
              System Analyst & Full Stack Developer yang senang membangun solusi digital, aplikasi, dan sistem yang bermanfaat.
            </p>

            {/* SOCIAL */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={
                      social.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-[2px] border-white bg-white text-[#111111] shadow-[3px_3px_0px_#C8FF1A] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="md:col-span-3"
          >
            <p className="mb-3 text-xs font-black uppercase tracking-wider text-[#C8FF1A]">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {menuLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-xs font-bold text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA BOX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-4"
          >
            <div className="rounded-[20px] border-[2.5px] border-white bg-[#C8FF1A] p-5 text-[#111111] shadow-[5px_5px_0px_#52C0FE]">
              <p className="text-[11px] font-black uppercase tracking-wider">
                Let's connect
              </p>

              <h3 className="mt-1 text-lg font-black leading-snug">
                Have a project in mind?
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-gray-800">
                Mari berdiskusi dan cari solusi digital yang sesuai dengan kebutuhan kamu.
              </p>

              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center rounded-full border-[2px] border-[#111111] bg-white px-4 py-2 text-xs font-black shadow-[3px_3px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-dashed border-gray-800" />

        {/* BOTTOM FOOTER */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="text-xs text-gray-400">
              © {currentYear} Irwansyah. All rights reserved.
            </p>

            <p className="mt-0.5 text-[10px] text-gray-500">
              Designed & built with Next.js, Tailwind CSS & Framer Motion.
            </p>
          </div>

          {/* BACK TO TOP */}
          <a
            href="#home"
            className="group flex w-fit items-center gap-2 rounded-full border-[2px] border-white bg-white px-4 py-2 text-xs font-black text-[#111111] shadow-[3px_3px_0px_#C8FF1A] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            Back to top

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#111111] bg-[#52C0FE]">
              <ArrowUp
                size={12}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>

      </div>
    </footer>
  );
}
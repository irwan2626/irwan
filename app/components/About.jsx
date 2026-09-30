"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2, Database, Lightbulb, Smartphone } from "lucide-react";

const stats = [
  {
    number: "3+",
    label: "Years Experience",
  },
  {
    number: "15+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "1",
    label: "Big Goal",
  },
];

const interests = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building modern and scalable web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Creating practical mobile experiences for users.",
  },
  {
    icon: Database,
    title: "Data & Systems",
    description: "Designing systems and managing meaningful data.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning real-world problems into digital solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3 inline-block rounded-full border-2 border-[#111111] bg-[#52C0FE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111]">
            About Me
          </div>

          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Turning ideas into{" "}
            <span className="relative inline-block">
              digital solutions.
              <span className="absolute -bottom-1 left-0 z-0 h-2.5 w-full bg-[#C8FF1A]" />
            </span>
          </h2>
        </motion.div>

        {/* Main About Grid */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">

          {/* Profile Card (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border-[3px] border-[#111111] bg-[#F5F5F5] p-5 shadow-[6px_6px_0px_#111111] lg:col-span-5 md:p-6"
          >
            {/* Decorative Shape */}
            <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full border-[3px] border-[#111111] bg-[#C8FF1A]" />

            <div className="relative z-10">
              {/* Profile Image */}
              <div className="relative mb-5 aspect-4/3 w-full overflow-hidden rounded-[18px] border-[3px] border-[#111111] bg-[#C8FF1A]">
                <Image
                  src="/images/profile.jpeg"
                  alt="Irwansyah"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    Based in
                  </p>
                  <p className="mt-0.5 text-lg font-black">Indonesia 🇮🇩</p>
                </div>

                <a
                  href="#contact"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[2.5px] border-[#111111] bg-white shadow-[3px_3px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  aria-label="Contact me"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Description & Stats (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between gap-5 lg:col-span-7"
          >
            <div className="rounded-3xl border-[3px] border-[#111111] bg-white p-6 shadow-[6px_6px_0px_#111111] md:p-7">
              <p className="mb-4 text-lg font-bold leading-relaxed md:text-xl">
                Hello! I&apos;m{" "}
                <span className="rounded bg-[#C8FF1A] px-1.5 py-0.5">
                  Irwansyah
                </span>
                , an Information Systems student and technology enthusiast who enjoys building digital products.
              </p>

              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                My interests focus on system analysis, web development, mobile applications, data, and digital business. I enjoy understanding a problem first, designing the right solution, and then turning that solution into a functional system.
              </p>

              <p className="text-sm leading-relaxed text-gray-600">
                I believe technology should not only look good, but also solve real problems, improve workflows, and create meaningful value for its users.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-[18px] border-[2.5px] border-[#111111] bg-[#C8FF1A] p-3.5 shadow-[3.5px_3.5px_0px_#111111]"
                >
                  <p className="text-2xl font-black">{stat.number}</p>
                  <p className="mt-0.5 text-[10px] font-bold uppercase leading-tight tracking-wide text-[#111111]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-[20px] border-[2.5px] border-[#111111] bg-white p-5 shadow-[4px_4px_0px_#111111] transition-shadow hover:shadow-none"
                >
                  <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#111111] bg-[#52C0FE]">
                    <Icon size={20} />
                  </div>

                  <h3 className="mb-1 text-base font-black text-[#111111]">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
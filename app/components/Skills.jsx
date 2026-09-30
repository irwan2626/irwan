"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  GitBranch,
  Palette,
  Server,
  BarChart3,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Membangun aplikasi web modern, responsif, dan mudah dikembangkan.",
    technologies: ["Laravel", "PHP", "React", "Next.js"],
    color: "bg-[#C8FF1A]",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Mengembangkan aplikasi mobile dengan pengalaman pengguna yang praktis.",
    technologies: ["Flutter", "Kotlin", "Android"],
    color: "bg-[#52C0FE]",
  },
  {
    icon: Database,
    title: "Database",
    description: "Merancang, mengelola, dan mengoptimalkan struktur database.",
    technologies: ["MySQL", "SQLite", "SQL"],
    color: "bg-[#C8FF1A]",
  },
  {
    icon: Server,
    title: "System Analysis",
    description: "Menganalisis kebutuhan dan merancang solusi sistem sesuai kebutuhan.",
    technologies: ["UML", "ERD", "Agile", "System Design"],
    color: "bg-[#52C0FE]",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Mengolah data untuk menemukan informasi dan pola yang bermanfaat.",
    technologies: ["Excel", "Python", "Data Mining"],
    color: "bg-[#C8FF1A]",
  },
  {
    icon: Globe,
    title: "IT Support",
    description: "Melakukan instalasi, konfigurasi, maintenance, dan troubleshooting.",
    technologies: ["Hardware", "Software", "Networking"],
    color: "bg-[#52C0FE]",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Mengelola source code dan kolaborasi pengembangan menggunakan Git.",
    technologies: ["Git", "GitHub"],
    color: "bg-[#C8FF1A]",
  },
  {
    icon: Palette,
    title: "UI Development",
    description: "Membuat interface yang modern, bersih, responsif, dan mudah digunakan.",
    technologies: ["Tailwind CSS", "HTML", "CSS"],
    color: "bg-[#52C0FE]",
  },
];

const tools = [
  "Laravel",
  "PHP",
  "JavaScript",
  "React",
  "Next.js",
  "Flutter",
  "Kotlin",
  "Python",
  "MySQL",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F5F5F5] px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center md:text-left"
        >
          <div className="mb-3 inline-block rounded-full border-2 border-[#111111] bg-[#C8FF1A] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111]">
            My Skills
          </div>

          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Tools I use to{" "}
            <span className="rounded-lg bg-[#52C0FE] px-2 text-[#111111]">
              build things.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Pengalaman dalam pengembangan aplikasi, analisis sistem, pengolahan data, serta IT support.
          </p>
        </motion.div>

        {/* SKILL CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -4,
                }}
                className="flex flex-col justify-between rounded-[20px] border-[2.5px] border-[#111111] bg-white p-5 shadow-[4px_4px_0px_#111111] transition-shadow hover:shadow-none"
              >
                <div>
                  {/* ICON */}
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-[#111111] ${skill.color}`}
                  >
                    <Icon size={22} strokeWidth={2.2} />
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-2 text-lg font-black text-[#111111]">
                    {skill.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mb-4 text-xs leading-relaxed text-gray-600">
                    {skill.description}
                  </p>
                </div>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#111111] bg-[#F5F5F5] px-2.5 py-0.5 text-[11px] font-bold text-[#111111]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* TECH STACK BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-[24px] border-[3px] border-[#111111] bg-[#111111] p-6 shadow-[6px_6px_0px_#C8FF1A] md:p-8"
        >
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#C8FF1A]">
                Tech Stack
              </p>

              <h3 className="mt-1 text-xl font-black text-white md:text-2xl">
                Technologies I work with
              </h3>
            </div>

            <div className="w-fit rounded-full border border-[#111111] bg-[#52C0FE] px-3 py-1 text-xs font-black">
              Always Learning
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.04, y: -2 }}
                className="cursor-default rounded-full border border-white bg-white px-3.5 py-1.5 text-xs font-bold text-[#111111] transition"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
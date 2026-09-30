"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const experiences = [
  {
    year: "2023 — 2026",
    duration: "3 Tahun",
    dateBadge: "JAN 2023",
    title: "Asisten Laboratorium Komputer",
    company: "Universitas Sains dan Teknologi Indonesia (USTI)",
    type: "Part Time / Campus",
    description:
      "Bertanggung jawab dalam memastikan kesiapan komputer dan perangkat pendukung laboratorium untuk kegiatan praktikum, melakukan maintenance dan troubleshooting.",
    responsibilities: [
      "Mempersiapkan komputer & perangkat laboratorium.",
      "Instalasi, konfigurasi, pemeliharaan, dan troubleshooting.",
      "Menggantikan dosen ketika berhalangan hadir.",
      "Mendampingi mahasiswa & membimbing siswa magang.",
    ],
    skills: ["IT Support", "Troubleshooting", "Hardware", "Networking"],
    icon: BriefcaseBusiness,
    color: "bg-[#C8FF1A]",
  },
  {
    year: "2025",
    duration: "Bangkit Academy",
    dateBadge: "FEB 2025",
    title: "Mobile Development",
    company: "Bangkit Academy — Kampus Merdeka",
    type: "Program / Training",
    description:
      "Program pengembangan kompetensi di bidang Mobile Development dengan mempelajari Android development, Kotlin, AI, serta pengembangan aplikasi kolaboratif.",
    responsibilities: [
      "Pengembangan aplikasi Android menggunakan Kotlin.",
      "Berkolaborasi dalam tim untuk capstone project.",
      "Mengikuti mentoring teknologi mobile dan AI.",
    ],
    skills: ["Android", "Kotlin", "Mobile Dev", "AI", "Teamwork"],
    icon: GraduationCap,
    color: "bg-[#52C0FE]",
  },
];

const highlights = [
  {
    icon: Wrench,
    number: "3+",
    title: "Years",
    description: "Pengalaman menangani perangkat dan sistem laboratorium.",
  },
  {
    icon: Users,
    number: "100+",
    title: "Users",
    description: "Berinteraksi dan membantu mahasiswa dalam kegiatan praktikum.",
  },
  {
    icon: BriefcaseBusiness,
    number: "2+",
    title: "Roles",
    description: "Pengalaman teknis, mentoring, dan pengembangan aplikasi.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#F5F5F5] px-4 py-20 md:px-6 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-block rounded-full border-2 border-[#111111] bg-[#C8FF1A] px-5 py-2 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0px_#111111]">
            Experience
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Where I've{" "}
            <span className="rounded-lg bg-[#52C0FE] px-2 text-[#111111]">
              learned & grown.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 md:text-lg">
            Pengalaman yang membentuk kemampuan saya dalam bidang IT Support, system analysis, dan development.
          </p>
        </motion.div>

        {/* TIMELINE ZIG ZAG */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-[#111111] md:block" />

          <div className="space-y-16 md:space-y-24">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={experience.title}
                  className="relative flex flex-col items-center md:flex-row"
                >
                  {/* CARD ITEM */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -50 : 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:pr-12" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="relative rounded-[24px] border-[3px] border-[#111111] bg-white p-6 shadow-[6px_6px_0px_#111111] md:p-7">
                      
                      {/* Header Info */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border-2 border-[#111111] bg-[#111111] px-3 py-1 text-xs font-bold text-white">
                          {experience.year}
                        </span>
                        <span className="rounded-full border-2 border-[#111111] bg-[#52C0FE] px-3 py-1 text-[11px] font-black uppercase">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-black md:text-2xl text-[#111111]">
                        {experience.title}
                      </h3>

                      <p className="mt-1 text-sm font-bold text-gray-500">
                        {experience.company}
                      </p>

                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {experience.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mt-5">
                        <h4 className="mb-2 text-xs font-black uppercase tracking-wider text-[#111111]">
                          Responsibilities
                        </h4>
                        <ul className="space-y-1.5 text-xs text-gray-600">
                          {experience.responsibilities.map((res, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-1 h-2 w-2 shrink-0 rounded-full border border-[#111111] bg-[#C8FF1A]" />
                              <span>{res}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="mt-5 flex flex-wrap gap-1.5 border-t-2 border-dashed border-gray-200 pt-4">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[#111111] bg-[#F5F5F5] px-3 py-1 text-[11px] font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CENTER NODE / CIRCLE */}
                  <div
                    className={`absolute left-1/2 top-8 hidden h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#111111] ${experience.color} z-10 shadow-[2px_2px_0px_#111111] md:flex`}
                  />

                  {/* HORIZONTAL CONNECTOR BAR WITH DATE (Mirip Gambar) */}
                  <div
                    className={`absolute top-7 hidden h-8 items-center rounded-full border-[2px] border-[#111111] bg-gray-200 px-4 text-xs font-black tracking-wider text-[#111111] md:flex ${
                      isEven
                        ? "left-1/2 ml-4"
                        : "right-1/2 mr-4"
                    }`}
                  >
                    {experience.dateBadge}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[24px] border-[3px] border-[#111111] bg-[#C8FF1A] p-6 shadow-[5px_5px_0px_#111111]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-[#111111] bg-white">
                  <Icon size={22} />
                </div>
                <p className="text-4xl font-black">{highlight.number}</p>
                <h3 className="mt-1 text-lg font-black">{highlight.title}</h3>
                <p className="mt-1 text-xs leading-5">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-start justify-between gap-6 rounded-[28px] border-[3px] border-[#111111] bg-[#111111] p-7 shadow-[6px_6px_0px_#52C0FE] md:flex-row md:items-center md:p-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#C8FF1A]">
              Let's work together
            </p>
            <h3 className="mt-1 text-xl font-black text-white md:text-2xl">
              Ready to turn ideas into something useful?
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#111111] bg-[#C8FF1A] px-6 py-3 text-sm font-black shadow-[4px_4px_0px_#52C0FE] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
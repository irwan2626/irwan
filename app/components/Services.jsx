"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Network,
  SearchCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description:
      "Membangun website dan aplikasi web yang modern, responsif, dan sesuai dengan kebutuhan bisnis maupun organisasi.",
    features: [
      "Company Profile",
      "Web Application",
      "Dashboard & Admin",
      "Information System",
    ],
    color: "bg-[#C8FF1A]",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Mengembangkan aplikasi mobile yang praktis dan fungsional untuk membantu pengguna mengakses layanan secara mudah.",
    features: [
      "Android Apps",
      "Flutter Apps",
      "Mobile UI Dev",
      "API Integration",
    ],
    color: "bg-[#52C0FE]",
  },
  {
    number: "03",
    icon: SearchCheck,
    title: "System Analysis",
    description:
      "Menganalisis kebutuhan sistem dan merancang solusi digital yang terstruktur berdasarkan permasalahan yang dihadapi.",
    features: [
      "Requirement Analysis",
      "UML & Use Case",
      "Database Design",
      "System Architecture",
    ],
    color: "bg-[#C8FF1A]",
  },
  {
    number: "04",
    icon: Network,
    title: "IT Support",
    description:
      "Memastikan perangkat komputer, software, dan jaringan berjalan dengan baik melalui maintenance dan troubleshooting.",
    features: [
      "Hardware Trouble",
      "Software Install",
      "PC Maintenance",
      "Basic Networking",
    ],
    color: "bg-[#52C0FE]",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-12 text-center md:text-left"
        >
          <div className="mb-3 inline-block rounded-full border-2 border-[#111111] bg-[#52C0FE] px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#111111]">
            Services
          </div>

          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            What I can{" "}
            <span className="rounded-lg bg-[#C8FF1A] px-2 text-[#111111]">
              help you build.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Menggabungkan kemampuan analisis sistem, pengembangan aplikasi, dan IT support untuk menghasilkan solusi digital.
          </p>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between rounded-[22px] border-[2.5px] border-[#111111] bg-[#F5F5F5] p-5 shadow-[5px_5px_0px_#111111] transition-shadow hover:shadow-none md:p-6"
              >
                <div>
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-[#111111] ${service.color} shadow-[3px_3px_0px_#111111]`}
                    >
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    <span className="text-3xl font-black text-gray-300">
                      {service.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="mt-5">
                    <h3 className="text-xl font-black text-[#111111]">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-lg border border-[#111111] bg-white px-3 py-2"
                      >
                        <span className="h-2 w-2 shrink-0 rounded-full border border-[#111111] bg-[#C8FF1A]" />
                        <span className="text-[11px] font-bold text-[#111111]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* LINK */}
                <div className="mt-5 flex justify-end pt-2">
                  <a
                    href="#contact"
                    className="flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-[#111111] bg-white shadow-[3px_3px_0px_#111111] transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none"
                    aria-label={`Contact for ${service.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 overflow-hidden rounded-[24px] border-[3px] border-[#111111] bg-[#111111] p-6 shadow-[6px_6px_0px_#C8FF1A] md:p-8"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="mb-2 inline-block rounded-full border border-[#111111] bg-[#52C0FE] px-3 py-1 text-[11px] font-black uppercase">
                Have an idea?
              </div>

              <h3 className="max-w-xl text-xl font-black leading-snug text-white md:text-2xl">
                Let's turn your idea into a digital solution.
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-relaxed text-gray-300">
                Ceritakan kebutuhan atau permasalahan yang ingin kamu selesaikan. Kita bisa membahas solusi yang paling sesuai.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-[2.5px] border-[#111111] bg-[#C8FF1A] px-5 py-3 text-xs font-black text-[#111111] shadow-[4px_4px_0px_#52C0FE] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
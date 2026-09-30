"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink, Smartphone, Globe, Database } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Sistem Pendataan Kerusakan Peralatan",
    category: "Information System",
    description:
      "Sistem multi-platform untuk melakukan pendataan, monitoring, dan pengelolaan kerusakan peralatan laboratorium secara terstruktur.",
    technologies: ["Laravel", "MySQL", "PWA", "Android"],
    icon: Database,
    color: "bg-[#C8FF1A]",
  },
  {
    number: "02",
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "Website portfolio personal yang menampilkan profil, pengalaman, keterampilan, dan berbagai project yang telah dikerjakan.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    icon: Globe,
    color: "bg-[#52C0FE]",
  },
  {
    number: "03",
    title: "Mobile Application",
    category: "Mobile Development",
    description:
      "Aplikasi mobile yang dikembangkan untuk memberikan solusi digital dengan fokus pada pengalaman pengguna dan kebutuhan fungsional.",
    technologies: ["Flutter", "Kotlin", "Android"],
    icon: Smartphone,
    color: "bg-[#C8FF1A]",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-4 py-16 md:px-6 md:py-24">
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
            My Projects
          </div>

          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Things I've{" "}
            <span className="rounded-lg bg-[#C8FF1A] px-2 text-[#111111]">
              built.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Beberapa project yang saya kerjakan dalam pengembangan sistem, aplikasi web, mobile development, dan solusi digital.
          </p>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#111111] bg-[#F5F5F5] shadow-[5px_5px_0px_#111111]"
              >

                {/* PROJECT VISUAL BANNER */}
                <div
                  className={`relative flex h-48 items-center justify-center ${project.color} overflow-hidden p-4`}
                >
                  {/* Decorative shapes */}
                  <div className="absolute left-4 top-4 h-10 w-10 rounded-full border-2 border-[#111111] bg-white opacity-80" />
                  <div className="absolute bottom-3 right-3 h-12 w-12 rotate-12 rounded-xl border-2 border-[#111111] bg-white shadow-[3px_3px_0px_#111111]" />

                  {/* Main Visual Box */}
                  <div className="relative z-10 flex h-32 w-44 -rotate-2 items-center justify-center rounded-xl border-[2.5px] border-[#111111] bg-white shadow-[5px_5px_0px_#111111] transition-transform duration-300 group-hover:rotate-0">
                    <div className="text-center">
                      <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl border-[2px] border-[#111111] bg-[#111111] text-white">
                        <Icon size={20} />
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Project
                      </p>
                      <p className="text-base font-black text-[#111111]">
                        {project.number}
                      </p>
                    </div>
                  </div>

                  {/* Large background number */}
                  <div className="absolute bottom-2 left-4 text-5xl font-black text-[#111111] opacity-10">
                    {project.number}
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {/* Category & Number */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-full border border-[#111111] bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#111111]">
                        {project.category}
                      </span>
                      <span className="text-xl font-black text-gray-300">
                        {project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black leading-snug text-[#111111]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#111111] bg-[#C8FF1A] px-2.5 py-0.5 text-[11px] font-bold text-[#111111]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-6 flex flex-wrap gap-2.5 border-t border-dashed border-gray-300 pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#111111] bg-[#111111] px-4 py-2 text-xs font-bold text-white shadow-[2.5px_2.5px_0px_#52C0FE] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#111111] bg-white px-4 py-2 text-xs font-bold text-[#111111] shadow-[2.5px_2.5px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[24px] border-[3px] border-[#111111] bg-[#C8FF1A] p-6 shadow-[6px_6px_0px_#111111] sm:flex-row sm:items-center md:p-8"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-wider text-[#111111]">
              More projects
            </p>
            <h3 className="mt-1 text-xl font-black text-[#111111] md:text-2xl">
              Want to see more of my work?
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-[#111111] bg-white px-5 py-2.5 text-xs font-black shadow-[3.5px_3.5px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          >
            Let's Talk
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
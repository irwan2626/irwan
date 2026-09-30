"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    title: "Email",
    value: "your.email@gmail.com",
    href: "mailto:your.email@gmail.com",
    color: "bg-[#C8FF1A]",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 8xx xxxx xxxx",
    href: "https://wa.me/628xxxxxxxxxx",
    color: "bg-[#52C0FE]",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/irwansyah",
    href: "#",
    color: "bg-[#C8FF1A]",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/irwansyah",
    href: "#",
    color: "bg-[#52C0FE]",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F5F5F5] px-4 py-16 md:px-6 md:py-24">
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
            Contact
          </div>

          <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Let's build something{" "}
            <span className="rounded-lg bg-[#52C0FE] px-2 text-[#111111]">
              together.
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Punya ide, project, atau ingin berdiskusi mengenai teknologi? Jangan ragu untuk menghubungi saya.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border-[3px] border-[#111111] bg-[#111111] p-6 shadow-[6px_6px_0px_#C8FF1A] md:p-7">

              <div className="mb-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-[2px] border-[#111111] bg-[#C8FF1A] shadow-[3px_3px_0px_#52C0FE]">
                  <Mail size={22} className="text-[#111111]" />
                </div>

                <h3 className="text-2xl font-black text-white">
                  Get in touch
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-gray-300">
                  Saya terbuka untuk diskusi mengenai project, pekerjaan, kolaborasi, maupun peluang di bidang teknologi.
                </p>
              </div>

              {/* CONTACT LINKS */}
              <div className="space-y-3">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={contact.title}
                      href={contact.href}
                      target={
                        contact.href.startsWith("http")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 rounded-xl border-[2px] border-white bg-white p-3 transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                    >
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2px] border-[#111111] ${contact.color}`}
                      >
                        <Icon size={16} className="text-[#111111]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">
                          {contact.title}
                        </p>

                        <p className="truncate text-xs font-bold text-[#111111]">
                          {contact.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        className="shrink-0 text-[#111111] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  );
                })}
              </div>

              {/* LOCATION */}
              <div className="mt-6 flex items-center gap-2 border-t border-dashed border-gray-700 pt-4">
                <MapPin size={16} className="text-[#C8FF1A]" />

                <p className="text-xs font-bold text-gray-300">
                  Indonesia 🇮🇩
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border-[3px] border-[#111111] bg-white p-6 shadow-[6px_6px_0px_#111111] md:p-7"
            >
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-wider text-gray-500">
                  Send a message
                </p>

                <h3 className="mt-1 text-2xl font-black text-[#111111]">
                  Tell me about your project.
                </h3>
              </div>

              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-black text-[#111111]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border-[2px] border-[#111111] bg-[#F5F5F5] px-3.5 py-2.5 text-xs text-[#111111] outline-none transition focus:ring-2 focus:ring-[#52C0FE]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-black text-[#111111]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border-[2px] border-[#111111] bg-[#F5F5F5] px-3.5 py-2.5 text-xs text-[#111111] outline-none transition focus:ring-2 focus:ring-[#52C0FE]"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="mt-4">
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs font-black text-[#111111]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-xl border-[2px] border-[#111111] bg-[#F5F5F5] px-3.5 py-2.5 text-xs text-[#111111] outline-none transition focus:ring-2 focus:ring-[#52C0FE]"
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-black text-[#111111]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your idea or project..."
                  className="w-full resize-none rounded-xl border-[2px] border-[#111111] bg-[#F5F5F5] px-3.5 py-2.5 text-xs text-[#111111] outline-none transition focus:ring-2 focus:ring-[#52C0FE]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border-[2.5px] border-[#111111] bg-[#C8FF1A] px-6 py-3 text-xs font-black text-[#111111] shadow-[4px_4px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
              >
                Send Message
                <ArrowUpRight size={16} />
              </button>

              <p className="mt-3 text-center text-[10px] text-gray-500">
                Form ini saat ini hanya tampilan frontend.
              </p>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl border-[3px] border-[#111111] bg-[#C8FF1A] p-6 shadow-[6px_6px_0px_#111111] md:p-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#111111]">
                Available for opportunities
              </p>

              <h3 className="mt-1 text-xl font-black text-[#111111] md:text-2xl">
                Let's create something meaningful.
              </h3>
            </div>

            <a
              href="mailto:your.email@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border-[2.5px] border-[#111111] bg-white px-5 py-2.5 text-xs font-black text-[#111111] shadow-[3.5px_3.5px_0px_#111111] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
            >
              Email Me
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
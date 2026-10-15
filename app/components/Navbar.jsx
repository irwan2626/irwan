"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed left-1/2 top-3 z-50 w-[min(94vw,72rem)] -translate-x-1/2 rounded-[1.5rem] border-2 border-black bg-white/90 shadow-[6px_6px_0px_#111111] backdrop-blur-md md:top-6">
            <div className="relative px-4 py-3 sm:px-5 md:px-8 md:py-4">
                <div className="flex items-center justify-between gap-3">
                    <a href="#home" className="text-xl font-black tracking-tight transition hover:text-[#C8FF1A] md:text-2xl">
                        Portfolio
                    </a>

                    <div className="hidden items-center gap-2 md:flex">
                        <ul className="flex items-center gap-6 font-medium">
                            {menuLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="transition hover:text-[#C8FF1A]">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="https://drive.google.com/file/d/16nRE69-aD1HAzfGMZ5yze3F-vHWhC6l9/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border-2 border-black bg-lime-300 px-5 py-2 text-sm font-semibold shadow-[4px_4px_0px_#111111] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            Resume
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((current) => !current)}
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-lime-300 shadow-[4px_4px_0px_#111111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none md:hidden"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <div
                    className={`md:hidden ${menuOpen ? "mt-4 max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"} overflow-hidden rounded-2xl border-2 border-black bg-white transition-all duration-300`}
                >
                    <div className="flex flex-col gap-1 p-3">
                        {menuLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[#C8FF1A]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="https://drive.google.com/file/d/16nRE69-aD1HAzfGMZ5yze3F-vHWhC6l9/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 rounded-xl border-2 border-black bg-lime-300 px-4 py-3 text-center text-sm font-semibold shadow-[3px_3px_0px_#111111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                            onClick={() => setMenuOpen(false)}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
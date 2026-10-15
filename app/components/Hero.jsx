import Image from "next/image";


export default function Hero() {
    return (
         <section id="home" className="min-h-screen w-full overflow-hidden bg-white px-4 pt-28 sm:px-6 md:pt-32">

            {/* HERO CONTENT */}
            <div className="mx-auto max-w-7xl">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="text-lime-600">
                            Irwansyah.
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
                        System Analyst & Full Stack Developer building robust digital
                        <br className="hidden md:block" />
                        infrastructures and high-performance applications with precision.
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-[#C8FF1A] px-5 py-2.5 text-sm font-bold shadow-[4px_4px_0px_#111111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white px-5 py-2.5 text-sm font-bold shadow-[4px_4px_0px_#111111] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>


                {/* CARDS AREA */}
                <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:relative lg:block lg:h-130">


                    {/* ABOUT ME */}
                    <div className="rounded-2xl border-2 border-black bg-lime-400 p-5 shadow-[6px_7px_0px_#111] lg:absolute lg:left-[5%] lg:top-[7%] lg:w-44 lg:-rotate-4">

                        <div className="text-center">

                            <div className="mb-2 text-xl">
                                ♙
                            </div>

                            <h2 className="text-xl font-black">
                                About Me
                            </h2>

                            <p className="mt-2 text-[9px] font-medium leading-3">
                                System Specialist with 5+ years of
                                architectural experience.
                            </p>

                        </div>

                    </div>


                    {/* PROJECTS */}
                    <div className="rounded-2xl border-2 border-black bg-sky-400 p-5 shadow-[6px_7px_0px_#111] lg:absolute lg:right-[5%] lg:top-[12%] lg:w-44 lg:rotate-4">

                        <div className="text-center">

                            <div className="mb-2 text-xl">
                                ◆
                            </div>

                            <h2 className="text-xl font-black">
                                Projects
                            </h2>

                            <p className="mt-2 text-[9px] font-medium leading-3">
                                Turning complex logic into elegant
                                web solutions.
                            </p>

                        </div>

                    </div>


                    {/* EXPERIENCE */}
                    <div className="rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_7px_0px_#111] lg:absolute lg:bottom-[10%] lg:left-[8%] lg:w-44 lg:rotate-6">

                        <div className="text-center">

                            <div className="mb-2 text-xl">
                                ▣
                            </div>

                            <h2 className="text-xl font-black">
                                Experience
                            </h2>

                            <p className="mt-2 text-[9px] font-medium leading-3">
                                Laravel, React, and Flutter
                                expertise across industries.
                            </p>

                        </div>

                    </div>


                    {/* AWARDS */}
                    <div className="rounded-2xl border-2 border-black bg-lime-100 p-5 shadow-[6px_7px_0px_#111] lg:absolute lg:bottom-[5%] lg:right-[7%] lg:w-44 lg:-rotate-6">

                        <div className="text-center">

                            <div className="mb-2 text-xl">
                                ♙
                            </div>

                            <h2 className="text-xl font-black">
                                Awards
                            </h2>

                            <p className="mt-2 text-[9px] font-medium leading-3">
                                Recognized for excellence in
                                full-stack implementation.
                            </p>

                        </div>

                    </div>


                    {/* FOTO PROFIL */}
                    <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-[3px] border-black bg-lime-400 shadow-[5px_5px_0px_#111] sm:col-span-2 sm:h-48 sm:w-48 lg:absolute lg:left-1/2 lg:top-1/2 lg:h-44 lg:w-44 lg:-translate-x-1/2 lg:-translate-y-1/2">

                        <Image src="/images/profile.jpeg" alt="Irwansyah" fill priority className="object-cover"/>

                    </div>

                </div>

            </div>

        </section>
    )
}
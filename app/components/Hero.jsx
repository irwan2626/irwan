import Image from "next/image";


export default function Hero() {
    return (
         <section id="home" className="min-h-screen w-full overflow-hidden bg-white px-6 pt-32">

            {/* HERO CONTENT */}
            <div className="mx-auto max-w-7xl">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                        Hi, I'm{" "}
                        <span className="text-lime-600">
                            Irwansyah.
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
                        System Analyst & Full Stack Developer building robust digital
                        <br className="hidden md:block" />
                        infrastructures and high-performance applications with precision.
                    </p>
                </div>


                {/* CARDS AREA */}
                <div className="relative mx-auto mt-8 h-[520px] max-w-4xl">


                    {/* ABOUT ME */}
                    <div className="absolute left-[5%] top-[7%] w-40 rotate-[-4deg] rounded-2xl border-2 border-black bg-lime-400 p-5 shadow-[6px_7px_0px_#111] md:w-44">

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
                    <div className="absolute right-[5%] top-[12%] w-40 rotate-[4deg] rounded-2xl border-2 border-black bg-sky-400 p-5 shadow-[6px_7px_0px_#111] md:w-44">

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
                    <div className="absolute bottom-[10%] left-[8%] w-40 rotate-[6deg] rounded-2xl border-2 border-black bg-white p-5 shadow-[6px_7px_0px_#111] md:w-44">

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
                    <div className="absolute bottom-[5%] right-[7%] w-40 rotate-[-6deg] rounded-2xl border-2 border-black bg-lime-100 p-5 shadow-[6px_7px_0px_#111] md:w-44">

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
                    <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[3px] border-black bg-lime-400 shadow-[5px_5px_0px_#111] md:h-44 md:w-44">

                        <Image src="/images/profile.jpeg" alt="Irwansyah" fill priority className="object-cover"/>

                    </div>

                </div>

            </div>

        </section>
    )
}
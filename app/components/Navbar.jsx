export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 z-50 w-[90%] max-w-7x1 -translate-x-1/2 rounded-full border-2 border-black bg-white/80 backdrop-blur-md shadow-[6px_6px_0px_#111">
            
            <div className="flex h-16 items-center justify-between px-8">
                <h1 className="text-2xl font-bold">
                    <a href="#home" className="transition hover:text-[#C8FF1A]">Portfolio</a>
                </h1>
                <ul className="hidden gap-8 font-medium md:flex">
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#about" className="transition hover:text-[#C8FF1A]">About</a>
                    </li>
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#skills" className="transition hover:text-[#C8FF1A]">Skills</a>
                    </li>
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#projects" className="transition hover:text-[#C8FF1A]">Projects</a>
                    </li>
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#experience" className="transition hover:text-[#C8FF1A]">Experience</a>
                    </li>
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#services" className="transition hover:text-[#C8FF1A]">Services</a>
                    </li>
                    <li className="cursor-pointer hover:text-lime-500">
                        <a href="#contact" className="transition hover:text-[#C8FF1A]">Contact</a>
                    </li>
                </ul>
                <button className="rounded-full border-2 border-black bg-lime-300 px-6 py-2 font-semibold shadow-[4px_4px_0px_#111] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                    <a href="https://drive.google.com/file/d/16nRE69-aD1HAzfGMZ5yze3F-vHWhC6l9/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </button>
            </div>
        </nav>
    )
}
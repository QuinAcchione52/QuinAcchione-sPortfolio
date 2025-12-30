"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { RiNextjsFill } from "react-icons/ri";
import { ThemeToggle } from "@/app/theme-toggle";
import { BsLinkedin, BsYoutube } from "react-icons/bs";
import { BiMenu, BiX } from "react-icons/bi";

const navItems: { id: string; label: string }[] = [
    { id: "resume", label: "Resume" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Achievements" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false);
    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClick = (e: React.MouseEvent, id: string) => {
        // Allow modifier keys to open in new tab or similar
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();

        if (pathname === "/") {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", `#${id}`);
            }
            return;
        }

        router.push(`/#${id}`);
    };

        
    return (
        <nav className="fixed top-0 w-full flex items-center justify-between py-5 px-8 lg:px-24 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-black z-50">
            
            <a href="/" className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent text-2xl opacity-80 hover:opacity-100 font-semibold transition-all duration-300 hover:scale-110">Quin</a>

            <ul className="hidden md:flex gap-10 text-lg">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`/#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                            className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="hidden md:flex gap-5">
                
                <li>
                  <a href="https://www.linkedin.com/in/quinten-acchione/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <BsLinkedin />
                  </a>
                </li>

            </ul>

            <div className="flex items-center">
                <ThemeToggle />
            </div>

            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            {isOpen && (
                <div className="fixed right-0 top-[84px] z-50 flex h-screen w-1/2 flex-col items-start justify-start gap-8 border-l border-gray-700 bg-black/90 p-8 md:hidden">
                    <ul className="flex flex-col gap-6 w-full">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`/#${item.id}`}
                                    onClick={(e) => {
                                        menuOpen();
                                        handleClick(e, item.id);
                                    }}
                                    className="text-white text-2xl"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto flex w-full items-center justify-between">
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/quinten-acchione/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-white text-xl"
                            >
                                <BsLinkedin />
                            </a>
                            <a href="#" className="text-white text-xl" aria-label="YouTube">
                                <BsYoutube />
                            </a>
                        </div>

                        <div>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}

               
        </nav>
    );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { GithubIcon, WhatsAppIcon, InstagramIcon } from "./icons";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Articles", path: "/articles" },
  { name: "Now", path: "/now" },
  { name: "Uses", path: "/uses" },
  { name: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="font-bold text-lg font-[family-name:var(--font-orbitron)] tracking-wider"
            onClick={() => setOpen(false)}
          >
            ByRaymond
          </Link>

          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-gray-300 dark:border-gray-700">
            <a href="https://github.com/GozyuPolar-ui" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <GithubIcon width={15} height={15} />
            </a>
            <a href="https://wa.me/6285362662874" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <WhatsAppIcon width={15} height={15} />
            </a>
            <a href="https://instagram.com/r3mon34" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <InstagramIcon width={15} height={15} />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeSwitch />

          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden w-9 h-9 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-[1.5px] bg-current transition-transform ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`h-[1.5px] bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-[1.5px] bg-current transition-transform ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <ul className="sm:hidden flex flex-col border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-primary">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-gray-100 dark:border-gray-800/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="flex items-center gap-5 px-6 py-4">
            <a href="https://github.com/GozyuPolar-ui" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <GithubIcon width={18} height={18} />
            </a>
            <a href="https://wa.me/6285362662874" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <WhatsAppIcon width={18} height={18} />
            </a>
            <a href="https://instagram.com/r3mon34" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
              <InstagramIcon width={18} height={18} />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
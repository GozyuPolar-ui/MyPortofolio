"use client";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Articles", path: "/articles" },
  { name: "About", path: "/#about" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-primary/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<Link href="/" className="font-bold text-lg font-[family-name:var(--font-orbitron)] tracking-wider">
  ByRaymond
</Link>

        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
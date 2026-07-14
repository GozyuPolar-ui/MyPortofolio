import { Mail } from "lucide-react";
import { GithubIcon, WhatsAppIcon, InstagramIcon } from "./icons";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          built from scratch, like everything else here.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/GozyuPolar-ui" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            <GithubIcon width={18} height={18} />
          </a>
          <a href="https://wa.me/6285362662874" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            <WhatsAppIcon width={18} height={18} />
          </a>
          <a href="https://instagram.com/r3mon34" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            <InstagramIcon width={18} height={18} />
          </a>
          <a href="mailto:your@email.com" aria-label="Email" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
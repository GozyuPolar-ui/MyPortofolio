import {
  Laptop, MonitorCog, Code2, Smartphone, Globe,
  Terminal, Layers, GitBranch, Cloud, Package,
} from "lucide-react";
import { usesData } from "@/data/uses";

const iconMap = {
  Laptop, MonitorCog, Code2, Smartphone, Globe,
  Terminal, Layers, GitBranch, Cloud, Package,
};

export const metadata = {
  title: "Uses",
  description: "Hardware, software, and tools I use day to day.",
};

export default function UsesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
      <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-2 font-[family-name:var(--font-orbitron)]">
        // loadout
      </div>
      <h1 className="text-4xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">
        USES
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-16 max-w-xl">
        Hardware, software, and tools I actually use to build everything on this site.
      </p>

      <div className="space-y-14">
        {usesData.map((section) => (
          <div key={section.category}>
            <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5 font-[family-name:var(--font-orbitron)]">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.items.map((item) => {
                const Icon = iconMap[item.icon] || Code2;
                return (
                  <div
                    key={item.name}
                    className="group flex items-start gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-cyan-400/40 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyan-400/10 transition-colors">
                      <Icon size={18} className="text-gray-600 dark:text-gray-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <div className="font-medium mb-0.5">{item.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.detail}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
import { nowData } from "@/data/now";

export const metadata = {
  title: "Now",
  description: "What I'm currently building, learning, and up to.",
};

export default function NowPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 pt-32 pb-20">
      <div className="text-xs text-cyan-500 dark:text-cyan-400 tracking-widest uppercase mb-2 font-[family-name:var(--font-orbitron)]">
        // status
      </div>
      <h1 className="text-4xl font-bold mb-3 font-[family-name:var(--font-orbitron)]">
        NOW
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-14">
        Last updated: {nowData.updatedAt} — a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">/now page</a>, if you&apos;re unfamiliar.
      </p>

      <div className="space-y-10">
        {nowData.items.map((item, i) => (
          <div key={i} className="flex gap-6">
            <div className="w-1 shrink-0 bg-cyan-400/40 rounded-full" />
            <div>
              <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 font-[family-name:var(--font-orbitron)]">
                {item.label}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
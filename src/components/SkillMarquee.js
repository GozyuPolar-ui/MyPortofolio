const skills = [
  "Python", "JavaScript", "Next.js", "SQLite", "WebSocket",
  "Kotlin", "Git", "REST APIs", "System Design", "Language Design",
];

const SkillMarquee = () => {
  const track = [...skills, ...skills];

  return (
    <div className="overflow-hidden border-y border-gray-200 dark:border-gray-800 py-5">
      <div className="flex gap-12 w-max animate-marquee">
        {track.map((skill, i) => (
          <span
            key={i}
            className="text-sm tracking-widest uppercase text-gray-400 dark:text-gray-500 font-[family-name:var(--font-orbitron)] whitespace-nowrap flex items-center gap-12"
          >
            {skill}
            <span className="text-cyan-400/60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillMarquee;
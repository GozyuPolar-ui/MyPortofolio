export const projects = [
  {
    id: 1,
    slug: "edith",
    title: "E.D.I.T.H.",
    period: "2025–now · active",
    description:
      "JARVIS-inspired personal AI assistant. Voice-activated with wake-word detection, persistent memory, hand-tracking gestures, and a protocol system for chaining multi-step commands. Runs a cloud LLM with a fully local, CPU-only fallback for offline use.",
    longDescription:
      "E.D.I.T.H. started as a Python + CustomTkinter desktop app and was later migrated to a web-based frontend with a Python WebSocket backend. It uses Gemini 2.5 Flash as its primary LLM, with a local Ollama model running fully offline as a CPU-only fallback for machines without a dedicated GPU.",
    features: [
      "Wake-word activated voice input via Vosk",
      "Persistent conversation memory using SQLite",
      "British-accented voice responses via edge-tts",
      "Hand-tracking gesture control using MediaPipe",
      "Protocol System for chaining multi-step voice commands",
      "Fully offline fallback using a local CPU-only LLM (Ollama)",
    ],
    stack: ["Python", "WebSocket", "SQLite", "Vosk", "Gemini API", "Ollama", "MediaPipe"],
    image: "/images/edith-2.jpeg",
    gallery: [
      "/images/edith-lock.gif",
      "/images/edith-2.jpeg",
    ],
  },
  {
    id: 2,
    slug: "jarvis-lang",
    title: "Jarvis-Lang",
    period: "2026 · active",
    description:
      "A programming language built from scratch — lexer, parser, and tree-walking interpreter — with Indonesian-language syntax. Supports variables, conditionals, loops, and functions with return values. Compiles to a standalone .exe.",
    longDescription:
      "Jarvis-Lang is an educational project built to understand how programming languages actually work under the hood. It's built in three stages: a lexer that tokenizes raw source text, a parser that builds an Abstract Syntax Tree from those tokens, and a tree-walking interpreter that executes it.",
    features: [
      "Custom lexer, parser, and tree-walking interpreter built from scratch",
      "Indonesian-language keywords and syntax",
      "Variables, conditionals, loops, and functions with return values",
      "Local variable scope per function call",
      "Compiles to a standalone .exe via PyInstaller",
      "Registered as its own double-clickable file type on Windows",
    ],
    stack: ["Python", "PyInstaller", "Language Design"],
    image: "/images/jarvis-lang-code.jpeg",
    gallery: [
      "/images/jarvis-lang-run.jpeg",
    ],
  },
  {
    id: 3,
    slug: "quiz-app",
    title: "Quiz App",
    period: "2026 · in progress",
    description:
      "An interactive trivia quiz app with real-time leaderboards, social login, and a friend system. Questions are pulled live from a public trivia API.",
    longDescription:
      "An interactive quiz application built for Android, currently under active development. Questions are sourced dynamically from a public trivia API, so the question pool stays fresh without manual updates.",
    features: [
      "Live trivia questions pulled from a public API",
      "Real-time leaderboard",
      "Social login via Google and Facebook",
      "Friend system — search and add friends",
      "Clean, responsive UI",
    ],
    stack: ["Android Studio", "Kotlin", "Trivia API", "Firebase", "OAuth"],
    image: "/images/quiz-app-1.jpeg",
    gallery: [],
  },
];
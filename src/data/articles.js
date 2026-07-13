export const articles = [
  {
    id: 1,
    slug: "building-edith",
    title: "Building E.D.I.T.H.: My Attempt at a Personal JARVIS",
    date: "2025",
    excerpt: "Why I started building a personal AI assistant from scratch, and what I learned migrating it from a desktop GUI to a web-based frontend.",
    content: `Every JARVIS-inspired project starts the same way: you want something that listens, remembers, and actually helps. E.D.I.T.H. started as a Python + CustomTkinter desktop app before I moved it to a web frontend with a Python WebSocket backend.

The biggest lesson wasn't the AI part — it was everything around it. Wake-word detection, persistent memory, voice synthesis, and making sure the whole thing still works when there's no internet connection. That last part pushed me to add a fully local, CPU-only fallback model using Ollama, since not every machine has a GPU to spare.

It's still a work in progress. Some commands still break, some features are half-built. But it listens, it remembers, and it's mine.`,
  },
  {
    id: 2,
    slug: "writing-a-language",
    title: "I Wrote My Own Programming Language",
    date: "2026",
    excerpt: "Lexer, parser, interpreter — building Jarvis-Lang taught me more about how code actually works than any tutorial did.",
    content: `I wanted to understand programming languages at a level most developers never touch: how does Python actually turn "x = 5" into something a computer understands?

So I built Jarvis-Lang — a language with Indonesian-language syntax, built in three stages. First a lexer that breaks source code into tokens. Then a parser that turns those tokens into a tree structure (an AST). Then an interpreter that walks that tree and actually executes it.

It supports variables, conditionals, loops, and functions with return values. It compiles to a standalone .exe, and I even registered its own file extension on Windows so .jarvis files can be double-clicked and run directly.

It's not fast, and it's not meant for real production use. But building it from a blank file taught me more about how computers "think" than years of just using other languages ever did.`,
  },
];
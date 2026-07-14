import "./globals.css";
import { Orbitron } from "next/font/google";
import { ThemeContextProvider } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import HireBadge from "@/components/HireBadge";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: {
    default: "Raymond — Builder of Systems",
    template: "%s | Raymond",
  },
  description:
    "Self-taught developer building AI assistants, programming languages, and full-stack systems from scratch. Creator of E.D.I.T.H. and Jarvis-Lang.",
  keywords: [
    "Raymond",
    "ByRaymond",
    "software developer",
    "AI assistant developer",
    "E.D.I.T.H.",
    "Jarvis-Lang",
    "Next.js portfolio",
    "Python developer",
    "self-taught programmer",
    "Indonesia developer",
  ],
  authors: [{ name: "Tony" }],
  creator: "Tony",
 metadataBase: new URL("https://my-portofolio-rho-lovat.vercel.app"),
  openGraph: {
    title: "Raymond — Builder of Systems",
    description:
      "Self-taught developer building AI assistants, programming languages, and full-stack systems from scratch.",
    url: "https://my-portofolio-rho-lovat.vercel.app",
    siteName: "Raymond's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond — Builder of Systems",
    description:
      "Self-taught developer building AI assistants, programming languages, and full-stack systems from scratch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={orbitron.variable}>
      <body
        suppressHydrationWarning
        className="bg-white text-gray-900 dark:bg-primary dark:text-white transition-colors duration-300 cursor-none sm:cursor-none"
      >
        <ThemeContextProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {children}
          <HireBadge />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
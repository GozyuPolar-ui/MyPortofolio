import "./globals.css";
import { Orbitron } from "next/font/google";
import { ThemeContextProvider } from "@/context/theme-context";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Tony — Portfolio",
  description: "Personal portfolio of Tony, builder of systems.",
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
        </ThemeContextProvider>
      </body>
    </html>
  );
}
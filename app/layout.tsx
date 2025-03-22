import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StarsWrapper from "@/components/stars-background";
import { Navbar } from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { LoadingScreen } from "@/components/loading-screen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Chan | Portfolio",
  description: "Software Engineer | Data Scientist | Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingScreen />
          <StarsWrapper />
          <ActiveSectionContextProvider>
            <Navbar />
            <div className="relative z-20">
              {children}
            </div>
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

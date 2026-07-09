import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MuForge | Forging the Future with Technology",
  description: "Enterprise-grade software, AI applications, and premium web platforms tailored to scale your business into the future.",
};

import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <CustomCursor />
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}

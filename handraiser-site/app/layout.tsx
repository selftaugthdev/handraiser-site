import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thierry De Belder – The Handraiser Method",
  description:
    "I help coaches and consultants get clients without outreach or sales calls using the Handraiser Method and the Daily Builder OS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="font-semibold text-sm sm:text-base text-slate-900">
                Thierry De Belder
              </div>
              <nav className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
                <a href="/" className="hover:text-slate-900">
                  Home
                </a>
                <a
                  href="/handraiser-starter-pack"
                  className="hover:text-slate-900"
                >
                  Starter Pack
                </a>
                <a
                  href="/offers/handraiser-post-swipe-file"
                  className="hover:text-slate-900"
                >
                  $9 Swipe File
                </a>
              </nav>
            </div>
          </header>

          {/* MAIN */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="container mx-auto px-4 py-6 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <span>© {new Date().getFullYear()} Thierry De Belder</span>
              <span className="text-center sm:text-right">
                The Magnetic Funnel System
              </span>
            </div>
          </footer>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Your Swipe File",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function DownloadPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              🎉 Thank You!
            </h1>
            <p className="text-lg sm:text-xl text-slate-700">
              Your Handraiser Post Swipe File is ready to download.
            </p>
          </div>

          <div className="bg-slate-50 border-2 border-amber-400 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Download Your Swipe File
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Click the button below to download your 20 plug-and-play Signal Content & Handraiser posts.
            </p>
            <a
              href="/The Handraiser Post Swipe File.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-base sm:text-lg font-medium text-slate-950 hover:bg-amber-300 transition shadow-md"
            >
              Download Swipe File (PDF)
            </a>
            <p className="text-xs sm:text-sm text-slate-500">
              The download will start automatically. If it doesn&apos;t, right-click the button and select &quot;Save link as...&quot;
            </p>
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-semibold text-slate-900">
              What&apos;s Next?
            </h3>
            <div className="text-left space-y-3 text-sm sm:text-base text-slate-700">
              <p>
                <strong>1. Review the templates</strong> - Go through all 20 posts and identify which ones resonate with your ideal clients.
              </p>
              <p>
                <strong>2. Customize them</strong> - Fill in the blanks with your specific expertise, stories, and results.
              </p>
              <p>
                <strong>3. Start posting</strong> - Use the Daily Builder OS: 1 Post, 1 Email, 1 Offer per day.
              </p>
              <p>
                <strong>4. Track handraisers</strong> - Watch for comments and DMs from people asking for help.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Need help?{" "}
              <Link
                href="/handraiser-starter-pack"
                className="text-amber-600 hover:text-amber-700 underline"
              >
                Check out the free Starter Pack
              </Link>{" "}
              for the complete system.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


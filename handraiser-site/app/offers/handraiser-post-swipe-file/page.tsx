"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HandraiserSwipeFilePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_9USD,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };
  return (
    <main className="bg-white">
      {/* Top intro section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              The Handraiser Post Swipe File
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-slate-700">
              20 plug-and-play Signal Content &amp; Handraiser posts you can use
              to start generating inbound leads this week.
            </p>
          </div>
        </div>
      </section>

      {/* Main content + CTA */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-7">
            <div className="flex justify-center">
              <Image
                src="/The handraiser Post Swipe File COVER transp.png"
                alt="The Handraiser Post Swipe File"
                width={600}
                height={800}
                className="w-full max-w-sm sm:max-w-md rounded-lg shadow-md"
                priority
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm text-sm sm:text-base text-slate-700 space-y-3">
              <p className="font-semibold text-slate-900">
                You&apos;ll get:
              </p>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-1">
                <li>5 identity posts that make your ideal clients feel seen</li>
                <li>
                  5 pain posts that articulate what they&apos;re stuck with
                </li>
                <li>
                  5 outcome posts that paint a clear picture of the after
                </li>
                <li>5 handraiser posts that make them raise their hand</li>
                <li>
                  1 follow-up DM script to start low-pressure conversations
                </li>
              </ul>
            </div>

            <p className="text-sm sm:text-base text-slate-700">
              This is perfect if you&apos;re ready to stop staring at the cursor
              and start publishing Signal Content that actually attracts buyers
              — without resorting to spammy outreach.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm sm:text-base font-medium text-slate-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {isLoading ? "Loading..." : "Get the Swipe File for $9"}
              </button>
              <p className="text-xs italic sm:text-sm text-slate-500">
                Instant access. Use these posts across LinkedIn, X, Instagram
                and Skool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended next step */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 py-8 sm:py-10">
          <div className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 space-y-2">
            <p className="font-semibold text-slate-800">
              Recommended first/next step:
            </p>
            <p>
              If you haven&apos;t grabbed it yet, start with the free{" "}
              <Link
                href="/handraiser-starter-pack"
                className="underline underline-offset-2 text-slate-900 hover:text-slate-700"
              >
                Handraiser Starter Pack
              </Link>{" "}
              so you fully understand the system behind these posts.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
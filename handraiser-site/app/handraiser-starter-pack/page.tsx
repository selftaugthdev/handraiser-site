"use client";

import { FormEvent, useState } from "react";

export default function HandraiserStarterPackPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string)?.trim();
    const firstName = (formData.get("name") as string)?.trim();

    try {
      const response = await fetch("/api/convertkit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && (result as { success?: boolean })?.success) {
        setStatus("success");
      } else {
        const serverMessage =
          (result as { error?: string; details?: string })?.error ||
          (result as { error?: string; details?: string })?.details ||
          `Submission failed (status ${response.status})`;
        throw new Error(serverMessage);
      }
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong submitting the form.";
      console.error("Form submission error:", error);
      setErrorMessage(
        `${message} Please try again in a moment or email me directly.`
      );
      setStatus("idle");
    }
  }

  return (
    <main className="bg-white">
      {/* Top text section */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-10 sm:py-16">
          <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6 text-center">
            <p className="inline-flex items-center justify-center rounded-full bg-amber-50 px-4 py-1.5 text-[0.7rem] sm:text-lg font-medium text-amber-700 uppercase tracking-[0.18em]">
              TIRED OF POSTING AND GETTING NOTHING BUT CRICKETS?
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              {" "}
              <span className="underline decoration-amber-400 decoration-2">
                The Daily Buyer Funnel Starter Pack (Free)
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 font-bold">
              Get your first handraisers this week{" "}
              <span className="underline decoration-amber-400 decoration-2">
                without cold DMs, sales calls, or posting 24/7
              </span>
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-700 font-semi-bold">
              This Starter Pack gives you the exact system to turn strangers into inbound “can you help me?” messages using Signal Content and a simple Daily Buyer Loop.

<br/><br/><span className="underline decoration-amber-400 decoration-2">If you’ve been posting consistently but still not getting clients…
this is the missing piece.</span>
            </p>

            <h2 className="text-xl sm:text-lg md:text-2xl font-semibold leading-tight text-slate-900">
              You'll get:
            </h2>

            <ul className="text-sm sm:text-base text-slate-700 space-y-1.5 sm:space-y-1 text-left mx-auto max-w-xl">
              <li>
                ✅ 7 Signal Content Prompts{" "}
                <span className="underline decoration-amber-400 decoration-1">
                  (posts engineered to attract buyers, not spectators)
                </span>{" "}
              </li>
              <li>
                ✅ 3 Handraiser Scripts{" "}
                <span className="underline decoration-amber-400 decoration-1">
                  (DM + post versions that trigger replies fast)
                </span>
              </li>
              <li>
                ✅ 5 templates that{" "}
                <span className="underline decoration-amber-400 decoration-1">
                  spark inbound “I need this” messages
                </span>
              </li>
              <li>
                ✅ The 48-Hour Handraiser Plan {" "}
                <span className="underline decoration-amber-400 decoration-1">
                  publish your first buyer-triggering post this weekend
                </span>
              </li>
              <li>
                ✅ The Daily Buyer Loop {" "}
                <span className="underline decoration-amber-400 decoration-1">
                  the 1-1-1 system that produces predictable weekly leads
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form card */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5">
            <h2 className="text-xl sm:text-lg md:text-2xl font-semibold leading-tight text-center text-slate-900">
              Enter your details below and I’ll send it instantly
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-slate-700">
                  First name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
                />
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-300"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm sm:text-base font-medium text-slate-950 hover:bg-amber-300 disabled:opacity-60 disabled:cursor-default transition"
              >
                {status === "idle" && "Send me the Starter Pack"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Check your inbox 🎉"}
              </button>

              {errorMessage && (
                <p className="text-sm text-red-600 text-center">{errorMessage}</p>
              )}
            </form>

            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm text-slate-500">
                No spam. No fluff. Just clear, practical steps to get handraisers every week.
              </p>
              <p className="text-xs sm:text-sm italic font-semibold text-slate-600">
                Built from helping 30+ coaches fix their inbound system.
              </p>
            </div>
          </div>
          <br /><br />
          <section >
          <div>
              <h2 className="text-xl sm:text-lg md:text-2xl font-semibold leading-tight text-center text-slate-900">
              Most coaches don’t need more content.
<br/><br/>
They need content that produces BUYERS.
            </h2>
            <br />
            <h3 className="text-xl sm:text-lg md:text-xl font-semibold leading-tight text-center text-slate-900">
            This Starter Pack shows you:
            </h3>
            <br />
            <ul className="text-sm sm:text-xl text-slate-700 space-y-1.5 sm:space-y-1 text-left mx-auto max-w-xl">
              <li>
                📩 what to post 
              </li>
              <li>
                👍🏼 why it works
              </li>
              <li>
                🚨 how to convert the attention
              </li>
              <li>
                ⌚️ and how to do it in under 1 hour/day
              </li>
            </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

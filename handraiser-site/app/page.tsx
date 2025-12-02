// app/page.tsx
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const heroBackground = "/hero-background.jpg";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* background image */}
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* white / blue gradient overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/90 via-white/96 to-slate-100" />

        <div className="relative z-10 container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="text-sm sm:text-4xl font-semibold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-full">
                Welcome, I&apos;m Thierry
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I help coaches and consultants {" "}
              <span className="text-indigo-500">generate buyers daily</span>{" "} <br/>with a
              <span className="text-indigo-600"> simple Daily Buyer Funnel</span> <br/>{" "}
            </h1>

            <p className="font-bold text-lg sm:text-xl md:text-xl text-slate-600 max-w-2xl mx-auto">
              A dead-simple daily system that turns strangers into buyers using {" "}
              <span className="text-indigo-600">one piece of content, one email, and one offer per day.</span> <br/>{" "}
              <span className="text-blue-400">No overwhelm. No complex funnels. Just consistent revenue.</span> 
              <br/>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/handraiser-starter-pack"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-2.5 text-sm sm:text-base font-medium text-white shadow-md hover:bg-indigo-500 transition w-full sm:w-auto"
              >
                Get the Daily Buyer Funnel Starter Pack (Free)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/offers/handraiser-post-swipe-file"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-2.5 text-sm sm:text-lg font-medium text-slate-950 hover:bg-amber-300 transition w-full sm:w-auto"
              >
                Or jump straight into the Daily Buyer OS →
              </Link>
            </div>

            {/* hero trust row */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No cold calling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No DM spam</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Simple, daily system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PILLARS SECTION (original section, adapted to light theme) */}
      <section className="bg-slate-300 border-y border-slate-200">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                Signal Content
              </h2>
              <p className="text-2xl text-slate-600">
                Stop posting generic content nobody cares about.
Learn how to post buyer-triggering content that attracts the exact people who want to pay you - not the freeloaders.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                Handraisers
              </h2>
              <p className="text-2xl text-slate-600">
                Turn views into real buyers.
  Handraisers are pre-sold leads who raise their hand for what you offer - making sales calls shorter, easier, and predictable.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2 text-slate-900">
                Daily Builder OS
              </h2>
              <p className="text-2xl text-slate-600">
                A simple operating system:
<br/>1 Post. 1 Email. 1 Offer. Daily.
This creates a rhythm that compounds into consistent revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
  <div className="max-w-3xl mx-auto space-y-4 text-center">
    <h2 className="text-base sm:text-4xl font-semibold text-slate-900">
      Who this is for
    </h2>

    <p className="font-bold text-sm sm:text-2xl text-slate-700">
      You&apos;re a coach or consultant who&apos;s tired of:
    </p>

    <ul className=" text-sm sm:text-xl text-slate-700 space-y-1.5 sm:space-y-1 text-left mx-auto max-w-[320px] sm:max-w-[500px]">
      <li>✅ Posting content that gets crickets</li>
      <li>✅ Dead Facebook groups and zero engagement</li>
      <li>✅ Cold DMs that make you feel desperate</li>
      <li>✅ Low-quality leads who don’t buy</li>
      <li>✅ Up-and-down months with no predictability</li>
    </ul>
          <br />
    <p className="font-bold text-sm sm:text-2xl text-slate-700">
      What you want instead is:
          </p>
          <ul className=" text-sm sm:text-xl text-slate-700 space-y-1.5 sm:space-y-1 text-left mx-auto max-w-[320px] sm:max-w-[500px]">
      <li>➡️ A predictable flow of handraisers</li>
      <li>➡️ A simple system you can run in under 1 hour/day</li>
      <li>➡️ A business that grows whether you “feel motivated” or not</li>
    </ul>
  </div>
</section>

      {/* PROBLEM SECTION (Lovable style) */}
      <section className="bg-slate-300 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              Tired of the endless hustle?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-700">
              Most coaches don’t have a marketing problem.
              <br/>They have a consistency and predictability problem.
            </p>
            <p className="font-bold text-sm sm:text-2xl text-slate-700">
        Here&apos;s what&apos;s actually killing your business:
          </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10 sm:mt-14">
            <div className="rounded-2xl border border-rose-100 bg-white p-6 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-rose-50 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Time Wasted
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Posting random content hoping it magically “works.”
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-white p-6 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-rose-50 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Low-Quality Leads
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Attracting people who want free advice, not transformation.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-white p-6 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-rose-50 rounded-full flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Inconsistent Income
              </h3>
              <p className="text-sm sm:text-base text-slate-600">
                Some weeks you’re up. Most weeks you’re down.
<br/>That’s not a business - that’s emotional gambling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (Blue block style - light theme) */}
      <section className="py-16 sm:py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to start getting handraisers every week?
            </h2>
            <p className="text-sm sm:text-base md:text-xl">
              Start with the Daily Buyer Funnel Starter Pack -
your first steps to building Signal Content, generating Handraisers, and installing the Daily Buyer OS.

It’s free.
And it’ll show you exactly how to get your first handraisers this week.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/handraiser-starter-pack"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-sm sm:text-base font-medium text-amber-300 hover:bg-slate-900 transition w-full sm:w-auto"
              >
                Get the FREE Starter Pack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/offers/handraiser-post-swipe-file"
                className="inline-flex items-center justify-center rounded-full border border-slate-500/50 bg-amber-600 px-6 py-2.5 text-sm sm:text-base font-medium hover:bg-slate-950/10 transition w-full sm:w-auto"
              >
                Upgrade to the Daily Buyer OS →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center text-xs sm:text-sm text-slate-500 space-y-1">
          <p className="text-xl font-bold text-slate-700">
            The Magnetic Funnel System
          </p>
          <p>A simple daily system that attracts buyers, builds trust, and generates sales - predictably.</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
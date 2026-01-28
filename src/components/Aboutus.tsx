"use client";

import Image from "next/image";

export function Aboutus() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 106, 0, 1) 0%, rgba(0, 0, 0, 1) 22%, rgba(34, 34, 34, 1) 51%, rgba(55, 55, 55, 1) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10)_0%,transparent_40%),radial-gradient(circle_at_90%_30%,rgba(255,106,0,0.10)_0%,transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <h2 className="text-4xl font-semibold leading-tight text-[#ff6900] sm:text-5xl lg:text-6xl text-center mb-8">
          About Us
        </h2>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image card */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* softer glow */}
              <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-xl">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/Aboutus.png"
                    alt="ThaiMe - husband and wife team"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/5" />
              </div>
            </div>
          </div>

          {/* Text card */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-white/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/30 p-6 md:p-8 lg:p-10 shadow-2xl">
              <p className="text-xs tracking-[0.25em] text-white/70">
                OUR STORY
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-white leading-tight">
                Thai street food,
                <br />
                now in Romania
              </h2>

              <div className="mt-6 space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
                <p className="font-medium text-white">
                  We are a husband and wife brought together by love, culture,
                  and a shared passion for great food. I am Thai, my husband is
                  Romanian, and together we bring authentic Thai street food
                  from Bangkok to Romania.
                </p>

                <p>
                  I grew up in a family that has been selling Thai food for over
                  30 years, learning traditional recipes and cooking techniques
                  from a young age. Every dish we serve is full of flavor, care,
                  and stories from our family kitchen.
                </p>

                <p>
                  Today, we proudly serve authentic Thai recipes through our
                  food truck in Romania. Our food is not just a meal, it&apos;s
                  a connection between Thai and Romanian cultures, sharing
                  warmth and traditions from our family to yours.
                </p>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-white/95">
                      Thank you for being part of our journey ❤️
                    </span>
                  </div>
                </div>
              </div>

              {/* little accent line */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="mt-4 text-base text-white/70">
                Authentic recipes, family-made, served with love.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

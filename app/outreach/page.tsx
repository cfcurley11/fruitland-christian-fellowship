import Link from "next/link";

export default function OutreachPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAF8F4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/fruitland-logo.png"
              alt="Fruitland Christian Fellowship"
              className="h-12 w-12 rounded-full object-contain"
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C84C4C]">
                Fruitland
              </p>
              <p className="text-lg font-black leading-tight">
                Christian Fellowship
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#2B2B2B]/75 md:flex">
            <Link href="/#welcome" className="hover:text-[#C84C4C]">Welcome</Link>
            <Link href="/#gospel" className="hover:text-[#C84C4C]">Gospel</Link>
            <Link href="/#calendar" className="hover:text-[#C84C4C]">Calendar</Link>
            <Link href="/watch" className="hover:text-[#C84C4C]">Watch</Link>
            <Link href="/outreach" className="text-[#C84C4C]">Outreach</Link>
            <Link href="/giving" className="hover:text-[#C84C4C]">Giving</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/fruitland-field.jpg"
            alt="Fruitland field"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
            Outreach
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Serving our communities with the love of Christ.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5f574d]">
            Fruitland Christian Fellowship has a heart for discipleship,
            restoration, and outreach throughout our local communities and the
            Navajo Nation.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            Making disciples beyond the church walls.
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#5f574d]">
            Outreach is more than an event on a calendar. It is the church
            living out the Gospel — encouraging families, strengthening
            believers, serving those in need, and pointing people to Jesus
            Christ.
          </p>
        </div>
      </section>

      {/* Featured Monthly Gathering */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C84C4C]">
                Featured Outreach
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Navajo Nation Outreach Monthly Gathering
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f574d]">
                A monthly gathering focused on fellowship, training, youth
                activity, encouragement, and ministry across the Navajo Nation.
              </p>
              <p className="mt-4 text-lg font-bold text-[#556B45]">
                1st Saturday every month
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-[#eadfce] bg-[#FAF8F4]">
              <img
                src="/images/outreach-navajo-monthly.jpg"
                alt="Navajo Nation Outreach Monthly Gathering flyer"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Celebrate Recovery */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
              Healing & Restoration
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Celebrate Recovery
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f574d]">
              Christ-centered recovery gatherings helping people find freedom
              from hurts, hang-ups, and habits through biblical truth,
              fellowship, and prayer.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white p-4 shadow-sm">
              <img
                src="/images/outreach-celebrate-recovery.jpg"
                alt="Celebrate Recovery ministry flyer"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white p-4 shadow-sm">
              <img
                src="/images/outreach-celebrate-recovery2.jpg"
                alt="Celebrate Recovery second location flyer"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Seminar */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#F5EFE4] p-5 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="overflow-hidden rounded-[1.5rem] border border-[#eadfce] bg-white">
              <img
                src="/images/outreach-testimony-seminar.jpg"
                alt="Writing Your Testimony Seminar flyer"
                className="h-auto w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C84C4C]">
                Testimony & Encouragement
              </p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Sharing what Christ has done.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f574d]">
                Testimony is powerful. This ministry helps believers prepare and
                share their story of God’s grace, healing, and transformation in
                Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAIM Schedule */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
              Regional Ministry
            </p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Revitalization American Indian Ministries
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f574d]">
              A regional ministry schedule connecting churches and communities
              throughout New Mexico, Arizona, and the Four Corners area.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white p-4 shadow-sm">
            <img
              src="/images/outreach-raim-schedule.jpg"
              alt="RAIM 2026 ministry schedule"
              className="mx-auto h-auto w-full max-w-5xl rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D4A64A]">
            Serve With Us
          </p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Be part of what God is doing.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
            Whether through prayer, encouragement, service, recovery ministry,
            youth outreach, or community gatherings, there is a place to serve
            and help others encounter the hope of Jesus Christ.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#calendar"
              className="rounded-full bg-[#C84C4C] px-7 py-4 font-bold text-white transition hover:bg-[#b63e3e]"
            >
              View Calendar
            </Link>
            <Link
              href="/giving"
              className="rounded-full border border-[#556B45]/30 bg-[#FAF8F4] px-7 py-4 font-bold text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
            >
              Support Outreach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
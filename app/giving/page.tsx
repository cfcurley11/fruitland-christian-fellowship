import Link from "next/link";

export default function GivingPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAF8F4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/fruitland-logo.png" alt="Fruitland Christian Fellowship" className="h-12 w-12 rounded-full object-contain" />
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#C84C4C]">Fruitland</p>
              <p className="text-lg font-black leading-tight">Christian Fellowship</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#2B2B2B]/75 md:flex">
            <Link href="/#welcome" className="hover:text-[#C84C4C]">Welcome</Link>
            <Link href="/#gospel" className="hover:text-[#C84C4C]">Gospel</Link>
            <Link href="/#calendar" className="hover:text-[#C84C4C]">Calendar</Link>
            <Link href="/watch" className="hover:text-[#C84C4C]">Watch</Link>
            <Link href="/outreach" className="hover:text-[#C84C4C]">Outreach</Link>
            <Link href="/giving" className="text-[#C84C4C]">Giving</Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/fruitland-field.jpg" alt="Fruitland field" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">Giving</p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Give from the abundance of your heart.
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5f574d]">
              Giving is an act of worship, gratitude, and trust in the Lord. At Fruitland Christian Fellowship, we encourage giving with a cheerful heart — never out of pressure.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white/85 p-7 shadow-xl backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#D4A64A]">Online Giving</p>
            <h2 className="mt-3 text-3xl font-black">Support Fruitland Christian Fellowship</h2>
            <p className="mt-4 leading-8 text-[#5f574d]">
              Your giving helps support worship, discipleship, outreach, ministry, and community care.
            </p>
            <a
              href="https://pushpay.com/g/fruitlandchristian"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full justify-center rounded-full bg-[#C84C4C] px-7 py-4 text-center font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#b63e3e]"
            >
              Give Securely Through Pushpay
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C84C4C]">Our Heart on Giving</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">Support your local church.</h2>
          <p className="mt-6 text-lg leading-9 text-[#5f574d]">
            For those who watch online, we encourage you first to give faithfully to your home church and support the local church where God has planted you. We believe the church is a place where believers are strengthened, revitalized, filled, and prepared to live for Christ.
          </p>
          <p className="mt-5 text-lg leading-9 text-[#5f574d]">
            Our mission field begins when we leave the doors of the church. As we gather, worship, and grow in God’s Word, we are equipped to carry the Gospel into our homes, workplaces, communities, and across the Navajo Nation.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["Worship", "Giving reflects gratitude to God and trust in His provision."],
            ["Discipleship", "Your support helps the church teach, encourage, and strengthen believers."],
            ["Outreach", "Generosity helps serve families, communities, and ministry beyond the church walls."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[2rem] border border-[#eadfce] bg-[#F5EFE4] p-7">
              <h3 className="text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-8 text-[#5f574d]">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
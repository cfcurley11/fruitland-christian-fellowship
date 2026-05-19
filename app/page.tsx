import SiteHeader from "./components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Welcome",
};

type Pastor = {
  name: string;
  initials: string;
  role: string;
  image?: string;
};

const pastors: Pastor[] = [
  {
    name: "Pastor Charles Reich",
    initials: "CR",
    role: "Pastor",
  },
  {
    name: "Pastor Jarryd Collyer",
    initials: "JC",
    role: "Pastor",
  },
  {
    name: "Pastor Christopher Curley",
    initials: "CC",
    role: "Pastor",
    image: "/images/chris-curley.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">
      <SiteHeader active="welcome" />

      <section id="welcome" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/fruitland-field.jpg"
            alt="Fruitland Christian Fellowship field"
            className="h-full w-full object-cover brightness-[1.12] saturate-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4]/88 via-[#FAF8F4]/68 to-[#FAF8F4]/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-[#FAF8F4]/20 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-24 md:grid-cols-[1fr_1fr] md:py-32">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.32em] text-[#6E8B55]">
              Welcome Home
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-[#2B2B2B] md:text-7xl">
              Abide in Christ. <br />
              <span className="text-[#C84C4C]">Bear Much Fruit.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#3f3a34]">
              Welcome to Fruitland Christian Fellowship — a Christ-centered,
              Bible-believing congregation with a heart to make disciples in our
              communities and across the Navajo Nation.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
              Whether you are visiting for the first time, returning to church,
              looking for a church family, or seeking hope in Jesus Christ, you
              are welcome here.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#gospel"
                className="rounded-full bg-[#C84C4C] px-7 py-4 text-center font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#b63e3e]"
              >
                Hear the Gospel
              </a>

              <a
                href="#visit"
                className="rounded-full border border-[#556B45]/30 bg-white/70 px-7 py-4 text-center font-bold text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
              >
                Plan Your Visit
              </a>

              <a
                href="#pastors"
                className="rounded-full border border-[#C84C4C]/30 bg-white/70 px-7 py-4 text-center font-bold text-[#C84C4C] transition hover:border-[#556B45] hover:text-[#556B45]"
              >
                Meet Our Pastors
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[#F5EFE4] shadow-xl">
            <img
              src="/images/the-vine.png"
              alt="I am the vine, you are the branches"
              className="h-auto w-full object-contain md:h-full md:min-h-[420px] md:object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 pt-4">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-black md:text-5xl">
            A church family rooted in the Word of God.
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#5f574d]">
            We gather to worship Jesus, grow in Scripture, pray for one another,
            and encourage believers to live faithfully at home, in the church,
            and throughout the community.
          </p>
        </div>
      </section>

      <section id="gospel" className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-6 shadow-sm md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src="/images/jesus-way-sign.jpg"
              alt="Jesus is the Way sign in the church garden"
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C84C4C]">
              The Gospel of Jesus Christ
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              The good news begins with Jesus.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f574d]">
              God created us to know Him, but sin separated us from Him. In
              love, God sent His Son, Jesus Christ, who died on the cross for
              our sins and rose again. Through repentance and faith in Jesus, we
              receive forgiveness, salvation, and eternal life.
            </p>

            <div className="mt-7 rounded-3xl bg-[#F5EFE4] p-6">
              <h3 className="text-2xl font-black">How do I respond?</h3>

              <p className="mt-3 leading-8 text-[#5f574d]">
                Turn to Jesus. Believe that He is Lord, that He died for your
                sins, and that He rose again. Ask Him to forgive you, make you
                new, and lead your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="overflow-hidden px-4 py-14 sm:px-6">
  <div className="mx-auto grid max-w-7xl min-w-0 gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
              Worship With Us
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              There is a place for you here.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#5f574d]">
              Come as you are and join us as we worship, open the Bible, and
              seek the Lord together. Fruitland Christian Fellowship is a place
              for families, neighbors, visitors, and anyone who wants to know
              Jesus Christ.
            </p>

           <div className="mt-7 w-full max-w-full overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-xl shadow-black/5">
              <div className="border-b border-[#eadfce] bg-[#F5EFE4]/70 px-7 py-6">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#D4A64A]">
                  Join Us
                </p>

                <h3 className="mt-2 text-2xl font-black text-[#2B2B2B]">
                  Service Information
                </h3>

                <p className="mt-2 leading-7 text-[#5f574d]">
                  We would love to worship with you and your family.
                </p>
              </div>

              <div className="min-w-0 space-y-4 p-4 sm:p-7">
                <div className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6E8B55]">
                    Sunday Worship
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#2B2B2B]">
                    10:30 AM - 12:00 PM
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6E8B55]">
                    Wednesday Bible Study
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#2B2B2B]">
                    6:00 PM - 7:00 PM
                  </p>
                </div>

                <div className="rounded-2xl border border-[#eadfce] bg-white p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C84C4C]">
                    Location
                  </p>
                  <p className="mt-2 leading-7 text-[#5f574d]">
                    701 CR - 6100, Fruitland, NM 87416
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C84C4C]">
                      Contact
                    </p>
                    <p className="mt-2 font-bold text-[#2B2B2B]">
                      (505) 374 - 8900
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#eadfce] bg-white p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C84C4C]">
                      Email
                    </p>
                    <p className="mt-2 break-all text-sm font-bold leading-6 text-[#2B2B2B] sm:text-base">
  FruitlandChristianFellowship@gmail.com
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <img
              src="/images/fruitland-church.jpg"
              alt="Fruitland Christian Fellowship church building"
              className="h-full min-h-[440px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="pastors" className="px-6 pb-16 pt-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#eadfce] bg-white p-6 shadow-sm md:p-10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
              Who Are Our Pastors?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Meet the pastoral leadership of Fruitland Christian Fellowship.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
              Our pastors serve with a heart for Jesus Christ, the Word of God,
              and the families of our church and surrounding community. They are
              committed to teaching Scripture, encouraging believers, and helping
              people grow as disciples of Jesus.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pastors.map((pastor) => (
              <div
                key={pastor.name}
                className="group rounded-[2rem] border border-[#eadfce] bg-[#FAF8F4] p-6 text-center transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-[#F5EFE4] shadow-sm transition group-hover:border-[#D4A64A]/40 sm:h-40 sm:w-40">
                  {pastor.image ? (
                    <img
                      src={pastor.image}
                      alt={pastor.name}
                      className="h-full w-full object-cover object-[center_28%]"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-3xl font-black text-[#6E8B55]">
                      {pastor.initials}
                    </div>
                  )}
                </div>

                <h3 className="mt-6 text-2xl font-black text-[#2B2B2B]">
                  {pastor.name}
                </h3>

                <p className="mt-2 text-sm font-black uppercase tracking-[0.25em] text-[#C84C4C]">
                  {pastor.role}
                </p>

                <p className="mt-5 leading-7 text-[#5f574d]">
                  Serving the church through prayer, biblical teaching,
                  discipleship, and pastoral care.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#F5EFE4] p-6 text-center md:p-8">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-[#5f574d]">
              Whether you are new to church, returning after time away, looking
              for prayer, or searching for a church family, our pastors would be
              honored to meet you and walk alongside you.
            </p>
          </div>
        </div>
      </section>

      <section id="calendar" className="px-6 py-14">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-6 shadow-sm md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
            Church Life
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Gather, grow, and serve together.
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f574d]">
            Stay connected with worship services, Bible studies, outreach
            opportunities, fellowship gatherings, and special church events.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              [
                "Sunday Services",
                "Navajo Bible Study at 10:00 AM<br />Main Service at 11:00 AM",
              ],
              ["Mid-Week Service", "Wednesday evenings at 5:30 PM"],
              ["Outreach", "Community ministry and service opportunities"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-[#eadfce] bg-[#FAF8F4] p-6"
              >
                <h3 className="text-xl font-black">{title}</h3>
                <p
                  className="mt-3 leading-7 text-[#5f574d]"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#F5EFE4] p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D4A64A]">
            John 15:5
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            We would love to worship with you.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
            Fruitland Christian Fellowship welcomes you and your family to come
            hear the Gospel, grow in God’s Word, and walk with us as disciples
            of Jesus Christ.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/outreach"
              className="rounded-full bg-[#C84C4C] px-7 py-4 font-bold text-white transition hover:bg-[#b63e3e]"
            >
              Learn About Outreach
            </Link>

            <Link
              href="/giving"
              className="rounded-full border border-[#556B45]/30 bg-white px-7 py-4 font-bold text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
            >
              Giving
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
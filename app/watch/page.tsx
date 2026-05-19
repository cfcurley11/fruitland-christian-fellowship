import SiteHeader from "../components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Watch",
};

const youtubeLinks = [
  {
    name: "YouTube Channel",
    href: "https://www.youtube.com/@fruitlandchristianfellowsh5504",
  },
  {
    name: "YouTube Shorts",
    href: "https://www.youtube.com/@fruitlandchristianfellowsh5504/shorts",
  },
];

const shortFeatureLinks = [
  {
    title: "Sermon Clips",
    text: "Short moments from recent teachings and messages.",
    href: "https://www.youtube.com/@fruitlandchristianfellowsh5504/shorts",
  },
  {
    title: "Encouragement",
    text: "Brief reminders to stay rooted in Christ throughout the week.",
    href: "https://www.youtube.com/@fruitlandchristianfellowsh5504/shorts",
  },
  {
    title: "Church Updates",
    text: "Quick updates, ministry moments, and church life highlights.",
    href: "https://www.youtube.com/@fruitlandchristianfellowsh5504/shorts",
  },
];

const streamingLinks = [
  {
    name: "Roku",
    href: "https://channelstore.roku.com/details/ec3945cba040f6428d4f01925d68f879/overcomerstv",
  },
  {
    name: "Lindell TV",
    href: "https://lindelltv.com/overcomers-tv/",
  },
  {
    name: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.horizonmedia.overcomerstv&hl=en_US&gl=US",
  },
  {
    name: "Amazon Appstore",
    href: "https://www.amazon.com/dp/B0C5LLV3JS/ref=mp_s_a_1_1_nodl?keywords=overcomers+tv&qid=1684447608&s=mobile-apps&sr=1-1&dplnkId=c9956e1b-8dd1-4d34-93ba-a88fb143d0d0",
  },
  {
    name: "Apple App Store",
    href: "https://apps.apple.com/us/app/overcomers-tv/id1494823591",
  },
];

const podcastLinks = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/fruitland-christian-fellowship/id1639183739?uo=4",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/5NLP8FHt3kJD4dQcZGdahU",
  },
  {
    name: "iHeart",
    href: "https://iheart.com/podcast/100763027",
  },
  {
    name: "Amazon Music",
    href: "https://music.amazon.com/podcasts/315f69a6-0e8e-49b2-8664-f662b588b493",
  },
  {
    name: "Podchaser",
    href: "https://www.podchaser.com/podcasts/fruitland-christian-fellowship-4834060",
  },
  {
    name: "Spreaker",
    href: "https://www.spreaker.com/show/fruitland-christian-fellowship",
  },
  {
    name: "Castbox",
    href: "https://castbox.fm/channel/id5184853",
  },
  {
    name: "Podcast Addict",
    href: "https://podcastaddict.com/podcast/4061397",
  },
  {
    name: "Deezer",
    href: "https://www.deezer.com/show/4501257",
  },
  {
    name: "JioSaavn",
    href: "https://www.jiosaavn.com/shows/Fruitland-Christian-Fellowship/1/j69sR,5Ogww_",
  },
];

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">
      <SiteHeader active="watch" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/fruitland-field.jpg"
            alt="Fruitland field"
            className="h-full w-full object-cover brightness-[1.1] saturate-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4]/92 via-[#FAF8F4]/80 to-[#FAF8F4]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
            Watch & Listen
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Be encouraged by the Word of God.
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5f574d]">
            Watch sermons, worship services, short teachings, and messages from
            Fruitland Christian Fellowship.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#messages"
              className="rounded-full bg-[#C84C4C] px-7 py-4 text-center font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-[#b63e3e]"
            >
              Watch Messages
            </a>

            <a
              href="#shorts"
              className="rounded-full border border-[#C84C4C]/30 bg-white/70 px-7 py-4 text-center font-bold text-[#C84C4C] transition hover:border-[#556B45] hover:text-[#556B45]"
            >
              YouTube Shorts
            </a>

            <a
              href="#podcast"
              className="rounded-full border border-[#556B45]/30 bg-white/70 px-7 py-4 text-center font-bold text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
            >
              Listen to Podcast
            </a>
          </div>
        </div>
      </section>

      <section id="messages" className="overflow-hidden px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
              Latest Messages
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Watch sermons and teachings.
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#5f574d]">
              Follow along with recent messages from Fruitland Christian
              Fellowship through our YouTube message playlist.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-black shadow-xl">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/videoseries?list=PLgtFmhapah6de5dfQCy7zu3xiZb35afUn"
              title="Fruitland Christian Fellowship Messages"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <section
            id="shorts"
            className="mt-8 overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-xl shadow-black/5"
          >
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#F5EFE4]/75 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C84C4C]">
                  YouTube Shorts
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Short encouragements for your week.
                </h2>

                <p className="mt-4 leading-8 text-[#5f574d]">
                  Watch sermon clips, quick teachings, church updates, and
                  encouraging moments from Fruitland Christian Fellowship.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {youtubeLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-[#eadfce] bg-white px-6 py-5 text-center font-black text-[#C84C4C] transition hover:border-[#556B45] hover:text-[#556B45]"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                  {shortFeatureLinks.map((short) => (
                    <a
                      key={short.title}
                      href={short.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-[1.5rem] border border-[#eadfce] bg-[#FAF8F4] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C84C4C] text-lg font-black text-white shadow-md shadow-red-900/20">
                          ▶
                        </div>

                        <div>
                          <h3 className="text-lg font-black text-[#2B2B2B]">
                            {short.title}
                          </h3>
                          <p className="mt-1 leading-6 text-[#5f574d]">
                            {short.text}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <p className="mt-5 text-center text-sm leading-6 text-[#5f574d]">
                  Opens the official Fruitland Christian Fellowship Shorts page
                  on YouTube.
                </p>
              </div>
            </div>
          </section>

          <section
            id="podcast"
            className="mt-8 overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-sm"
          >
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-[#F5EFE4]/70 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
                  Podcast
                </p>

                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Listen to Fruitland Christian Fellowship.
                </h2>

                <p className="mt-4 leading-8 text-[#5f574d]">
                  Listen to messages and teachings through Spotify, Apple
                  Podcasts, and other podcast platforms.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 p-5 sm:p-7">
                <a
                  href="https://open.spotify.com/show/5NLP8FHt3kJD4dQcZGdahU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] px-6 py-5 text-center font-black text-[#556B45] transition hover:border-[#C84C4C] hover:bg-white hover:text-[#C84C4C]"
                >
                  Listen on Spotify
                </a>

                <a
                  href="https://podcasts.apple.com/us/podcast/fruitland-christian-fellowship/id1639183739?uo=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] px-6 py-5 text-center font-black text-[#556B45] transition hover:border-[#C84C4C] hover:bg-white hover:text-[#C84C4C]"
                >
                  Listen on Apple Podcasts
                </a>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black">
              Watch and listen on your favorite platform.
            </h2>

            <p className="mt-3 max-w-3xl leading-8 text-[#5f574d]">
              Connect with Fruitland Christian Fellowship through video,
              streaming apps, and podcast platforms.
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-black">YouTube</h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {youtubeLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] p-5 text-center font-black text-[#C84C4C] transition hover:border-[#556B45] hover:text-[#556B45]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black">Streaming Channels</h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {streamingLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] p-5 text-center font-black text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black">Podcast Platforms</h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {podcastLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-[#eadfce] bg-[#FAF8F4] p-5 text-center font-black text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#F5EFE4] p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D4A64A]">
            John 15:5
          </p>

          <h2 className="mt-4 text-4xl font-black">
            Stay rooted in Christ throughout the week.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
            We pray these messages help you grow in faith, understand Scripture,
            and follow Jesus more closely.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#C84C4C] px-7 py-4 font-bold text-white transition hover:bg-[#b63e3e]"
            >
              Back to Welcome
            </Link>

            <Link
              href="/outreach"
              className="rounded-full border border-[#556B45]/30 bg-white px-7 py-4 font-bold text-[#556B45] transition hover:border-[#C84C4C] hover:text-[#C84C4C]"
            >
              Outreach
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
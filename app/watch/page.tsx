import SiteHeader from "../components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Watch",
};
export default function WatchPage() {
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

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">

	<SiteHeader active="watch" />
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

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#6E8B55]">
            Watch & Listen
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Be encouraged by the Word of God.
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[#5f574d]">
            Watch sermons, worship services, and teachings from Fruitland Christian Fellowship.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
<div className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-black shadow-xl">
  <iframe
    className="aspect-video w-full"
    src="https://www.youtube.com/embed/videoseries?list=PLgtFmhapah6de5dfQCy7zu3xiZb35afUn"
    title="Fruitland Christian Fellowship Messages"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
</div> 
<div className="mt-8 overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white shadow-sm">
  <iframe
    style={{ borderRadius: "24px" }}
    src="https://open.spotify.com/embed/show/5NLP8FHt3kJD4dQcZGdahU"
    width="100%"
    height="352"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
</div>         
	<div className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black">Watch and listen on your favorite platform.</h2>
            <p className="mt-3 max-w-3xl leading-8 text-[#5f574d]">
              Connect with Fruitland Christian Fellowship through video, streaming apps, and podcast platforms.
            </p>

           <div className="mt-10">
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
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#F5EFE4] p-8 text-center md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[#D4A64A]">
            John 15:5
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Stay rooted in Christ throughout the week.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#5f574d]">
            We pray these messages help you grow in faith, understand Scripture, and follow Jesus more closely.
          </p>
        </div>
      </section>
    </main>
  );
}
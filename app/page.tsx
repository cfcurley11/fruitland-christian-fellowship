import SiteHeader from "./components/SiteHeader";
import Link from "next/link";

export const metadata = {
  title: "Welcome",
};
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2B2B2B]">
	<SiteHeader active="welcome" />
     
      <section id="welcome" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/fruitland-field.jpg"
            alt="Fruitland Christian Fellowship field"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F4]/95 via-[#FAF8F4]/80 to-[#FAF8F4]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F4] via-transparent to-transparent" />
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
            </div>
          </div>
        <div
  	className="min-h-[420px] rounded-[2rem] border border-white/70 bg-cover bg-center shadow-xl"
 	 style={{
   	 backgroundImage: "url('/images/the-vine.png')",
 	 }}
	/>  
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

      <section id="visit" className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
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

            <div className="mt-7 rounded-[2rem] border border-[#eadfce] bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-black">Service Information</h3>
		<div className="mt-5 space-y-5 text-[#5f574d]">

  		<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
   		 <span className="font-black text-[#2B2B2B]">Sunday Worship:</span>
   		 <span>Starts at 10:30 AM - 12:00 PM</span>
  		</div>

  		<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
   		 <span className="font-black text-[#2B2B2B]">Wednesday Bible Study:</span>
   		 <span>Starts at 6:00 PM - 7:00 PM</span>
 		 </div>

  		<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
  		  <span className="font-black text-[#2B2B2B]">Location:</span>
  		  <span>701 CR - 6100, Fruitland, NM 87416</span>
  		</div>

 		 <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
  	  	<span className="font-black text-[#2B2B2B]">Contact:</span>
  		  <span>(505) 374 - 8900</span>
  		</div>

  		<div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
  		  <span className="font-black text-[#2B2B2B]">Email:</span>
  	 	 <span>FruitlandChristianFellowship@gmail.com</span>
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
              <div key={title} className="rounded-3xl border border-[#eadfce] bg-[#FAF8F4] p-6">
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
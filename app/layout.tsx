import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://fruitlandchristianfellowship.org"),

  title: {
    default: "Fruitland Christian Fellowship",
    template: "%s | Fruitland Christian Fellowship",
  },

  description:
    "Fruitland Christian Fellowship is a Christ-centered, Bible-believing church serving Fruitland, New Mexico and the Navajo Nation through worship, discipleship, outreach, and the Gospel of Jesus Christ.",

  keywords: [
    "Fruitland Christian Fellowship",
    "Fruitland church",
    "Navajo Nation church",
    "Christian church Fruitland NM",
    "Bible-believing church",
    "Jesus Christ",
    "Christian outreach Navajo Nation",
  ],

  openGraph: {
    title: "Fruitland Christian Fellowship",
    description:
      "A Christ-centered, Bible-believing church serving Fruitland and the Navajo Nation.",
    url: "https://fruitlandchristianfellowship.org",
    siteName: "Fruitland Christian Fellowship",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

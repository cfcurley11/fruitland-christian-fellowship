"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Welcome", href: "/#welcome", key: "welcome" },
    { name: "Gospel", href: "/#gospel", key: "gospel" },
    { name: "Calendar", href: "/#calendar", key: "calendar" },
    { name: "Watch", href: "/watch", key: "watch" },
    { name: "Outreach", href: "/outreach", key: "outreach" },
    { name: "Giving", href: "/giving", key: "giving" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FAF8F4]/95 backdrop-blur">
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
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={active === link.key ? "text-[#C84C4C]" : "hover:text-[#C84C4C]"}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-[#eadfce] bg-white px-4 py-2 text-sm font-black text-[#2B2B2B] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-[#FAF8F4] px-6 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base font-bold ${
                  active === link.key
                    ? "bg-[#F5EFE4] text-[#C84C4C]"
                    : "bg-white text-[#2B2B2B]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
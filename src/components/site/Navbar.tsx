import { useState } from "react";
import logo from "@/assets/logo-wnw.png.asset.json";
import { navLinks } from "@/data/site";
import { ToonLink } from "./ToonButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 px-3 pt-0">
      {/* ropes */}
      <div className="pointer-events-none mx-auto flex max-w-5xl justify-between px-16" aria-hidden>
        <span className="block h-4 w-1.5 bg-wood-dark border-x-2 border-ink" />
        <span className="block h-4 w-1.5 bg-wood-dark border-x-2 border-ink" />
      </div>
      <nav className="paper toon mx-auto flex max-w-5xl -rotate-[0.6deg] items-center justify-between rounded-2xl px-3 py-2 md:px-5" aria-label="Principal">
        <a href="#topo" className="flex items-center gap-2">
          <img src={logo.url} alt="Wood N' Wire" className="h-11 w-11 object-contain md:h-12 md:w-12" />
          <span className="font-display hidden text-lg uppercase sm:inline">Wood N' Wire</span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-display uppercase text-lg underline-offset-4 decoration-[3px] decoration-chili hover:underline">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ToonLink href="#contato" size="sm" className="shadow-hard-sm">Bora contratar</ToonLink>
          <button
            className="toon-sm flex h-10 w-10 items-center justify-center rounded-lg bg-sun md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="font-display text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>
      {/* saloon doors */}
      <div className={`absolute inset-x-3 top-full mx-auto mt-2 flex max-w-5xl justify-center gap-1 md:hidden ${open ? "" : "pointer-events-none"}`} style={{ perspective: 600 }}>
        {[0, 1].map((side) => (
          <div
            key={side}
            className="wood-grain toon w-1/2 rounded-lg p-4 transition-transform duration-500"
            style={{
              transformOrigin: side === 0 ? "left center" : "right center",
              transform: open ? "rotateY(0deg)" : `rotateY(${side === 0 ? -95 : 95}deg)`,
              transitionTimingFunction: "cubic-bezier(.3,1.6,.5,1)",
            }}
          >
            <ul className={`flex flex-col gap-2 ${side === 0 ? "items-end" : "items-start"}`}>
              {navLinks.filter((_, i) => (side === 0 ? i % 2 === 0 : i % 2 === 1)).map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="font-display text-xl uppercase text-cream" style={{ WebkitTextStroke: "1px var(--ink)" }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </header>
  );
}

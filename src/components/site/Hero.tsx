import { useEffect, useState } from "react";
import logo from "@/assets/logo-wnw.png.asset.json";
import { band } from "@/data/site";
import { Cactus, Cloud, Rocks, Sun, Tumbleweed, Wavy } from "./Art";
import { ToonLink } from "./ToonButton";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section id="topo" className="relative -mt-24 flex min-h-[100svh] flex-col items-center overflow-hidden bg-ember pt-28">
      <div className="halftone absolute inset-0 opacity-40" />
      {/* "That's all folks" rings */}
      <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2" aria-hidden>
        {[1600, 1300, 1000].map((s, i) => (
          <div key={s} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-ink ${["bg-chili", "bg-ember", "bg-chili"][i]}`} style={{ width: s, height: s }} />
        ))}
      </div>
      <Sun className="absolute left-1/2 top-[40%] w-[150vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2" />

      {/* clouds */}
      <Cloud className="animate-drift absolute top-24 w-40 md:w-56" />
      <Cloud className="animate-drift absolute top-44 w-28 md:w-40 [animation-delay:-18s]" />
      <Cloud className="animate-drift absolute top-16 w-32 md:w-44 [animation-delay:-34s]" />
      <style>{`.animate-drift{animation-duration:48s}`}</style>

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <img src={logo.url} alt="Logo Wood N' Wire: cânion, cactos e sol" className="animate-bounce-in w-64 drop-shadow-[8px_8px_0_var(--ink)] sm:w-80 md:w-[26rem]" style={{ transform: `translateY(${y * -0.15}px)` }} />
        <h1 className="toon-title-light animate-bounce-in -mt-6 text-5xl [animation-delay:.2s] sm:text-6xl md:text-7xl">Wood N' Wire</h1>
        <p className="toon-sm mt-5 rotate-1 rounded-xl bg-cream px-5 py-2 font-display text-lg uppercase md:text-2xl">{band.tagline}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-4">
          <ToonLink href="#videos" variant="sun" size="lg" className="-rotate-2">▶ Ver vídeos</ToonLink>
          <ToonLink href="#contato" variant="red" size="lg" className="rotate-2">Contratar a banda</ToonLink>
        </div>
      </div>

      {/* parallax ground */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64" aria-hidden>
        <Rocks tone="chili" className="absolute bottom-16 h-40 w-full opacity-90" />
        <div style={{ transform: `translateY(${y * 0.12}px)` }} className="absolute inset-x-0 bottom-0">
          <Rocks tone="canyon" className="h-36 w-full" />
        </div>
        <Cactus className="absolute bottom-6 left-[6%] h-28" />
        <Cactus className="absolute bottom-4 right-[8%] h-36" />
        <Cactus className="absolute bottom-8 right-[18%] h-20" />
        <div className="animate-roll absolute bottom-6 left-0">
          <Tumbleweed className="animate-hop h-14 w-14" />
        </div>
      </div>
      <Wavy fill="var(--sun)" className="absolute -bottom-1 left-0 h-10 w-full" />
    </section>
  );
}

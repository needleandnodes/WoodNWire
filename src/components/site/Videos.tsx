import { useEffect, useRef, useState } from "react";
import { videos } from "@/data/site";
import { Scallop } from "./Art";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1"];

function Tv({ v, i }: { v: (typeof videos)[number]; i: number }) {
  const [play, setPlay] = useState(false);
  return (
    <figure className={`${tilts[i % 3]} ${i === 1 ? "md:translate-y-10" : ""} transition-transform hover:rotate-0`}>
      <div className="wood-grain toon rounded-[2rem] p-4 pb-3">
        <div className="relative aspect-video overflow-hidden rounded-[1.4rem] border-4 border-ink bg-ink">
          {play ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1`}
              title={v.title}
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button onClick={() => setPlay(true)} className="group absolute inset-0 flex flex-col items-center justify-center bg-cream" aria-label={`Tocar vídeo: ${v.title}`}>
              <div className="sunburst absolute inset-0 opacity-80" />
              <span className="relative font-display text-2xl uppercase md:text-3xl" style={{ WebkitTextStroke: "1px var(--ink)" }}>{v.title}</span>
              <span className="relative mt-1 text-sm font-semibold">{v.subtitle}</span>
              {/* film-reel sticker */}
              <span className="toon-sm relative mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-chili transition-transform group-hover:rotate-90 group-hover:scale-110">
                <svg viewBox="0 0 60 60" className="h-full w-full" aria-hidden>
                  {[0, 60, 120, 180, 240, 300].map((a) => (
                    <circle key={a} cx={30 + 18 * Math.cos((a * Math.PI) / 180)} cy={30 + 18 * Math.sin((a * Math.PI) / 180)} r="5" fill="var(--ink)" />
                  ))}
                  <path d="M25 21 L40 30 L25 39 Z" fill="var(--cream)" stroke="var(--ink)" strokeWidth="2" />
                </svg>
              </span>
            </button>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between px-2" aria-hidden>
          <div className="flex gap-2">
            <span className="h-5 w-5 rounded-full border-[3px] border-ink bg-sun" />
            <span className="h-5 w-5 rounded-full border-[3px] border-ink bg-chili" />
          </div>
          <span className="font-display text-sm uppercase text-cream">Canal {i + 1}</span>
        </div>
      </div>
      <div className="mx-auto flex w-2/3 justify-between px-6" aria-hidden>
        <span className="h-5 w-3 -skew-x-12 bg-ink" />
        <span className="h-5 w-3 skew-x-12 bg-ink" />
      </div>
    </figure>
  );
}

export function Videos() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && setVis(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="videos" className="relative bg-chili pb-28 pt-6">
      <Scallop fill="var(--chili)" className="absolute -top-8 left-0 h-9 w-full" />
      <div ref={ref} className={`iris-reveal ${vis ? "is-visible" : ""} relative mx-auto max-w-6xl px-4 pt-10`}>
        <div className="halftone-light absolute inset-0 opacity-40" />
        <div className="relative flex flex-col items-center text-center">
          <span className="font-display rounded-full border-[3px] border-ink bg-sun px-4 py-1 text-sm uppercase">Sessão drive-in</span>
          <h2 className="toon-title-light mt-3 rotate-1 text-5xl md:text-7xl">Vídeos</h2>
        </div>
        <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {videos.map((v, i) => <Tv key={i} v={v} i={i} />)}
        </div>
      </div>
    </section>
  );
}

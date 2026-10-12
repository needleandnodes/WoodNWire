import { about, members, setlist, type Member } from "@/data/site";
import { Bass, Boot, Drum, Guitar, Harmonica, Torn } from "./Art";

const icons = { guitar: Guitar, bass: Bass, harmonica: Harmonica, drum: Drum };
const bg = { chili: "bg-chili", ember: "bg-ember", canyon: "bg-canyon", sun: "bg-sun" };
const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

function MemberCard({ m, i }: { m: Member; i: number }) {
  const Icon = icons[m.instrument];
  return (
    <article className={`paper toon relative rounded-2xl p-3 transition-transform hover:-translate-y-2 hover:rotate-0 ${tilts[i % 4]} ${i % 2 ? "md:mt-10" : ""}`}>
      {m.guest && (
        <span className="toon-sm absolute -right-3 -top-4 z-10 rotate-12 rounded-full bg-sun px-3 py-1 font-display text-xs uppercase">★ Guest star</span>
      )}
      <div className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border-[3px] border-ink ${bg[m.color]}`}>
        <div className="halftone absolute inset-0 opacity-50" />
        {m.photo ? (
          <img src={m.photo} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <>
            <Icon className="relative h-3/4 w-3/4 animate-wobble" />
            <span className="absolute bottom-2 left-2 rounded bg-ink px-2 py-0.5 text-[10px] font-semibold uppercase text-sun">Placeholder · troque pela foto</span>
          </>
        )}
      </div>
      <h3 className="mt-3 text-xl leading-tight">{m.name}</h3>
      <p className="font-semibold text-muted-foreground">{m.role}</p>
    </article>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-sun pb-24 pt-16">
      <div className="halftone absolute inset-0 opacity-25" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* WANTED poster on wood */}
        <div className="wood-grain toon relative rounded-xl p-6 md:p-10">
          <span className="absolute left-1/2 top-3 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-ink bg-cloud" aria-hidden />
          <div className="paper toon -rotate-2 rounded-sm px-6 py-8 text-center">
            <h2 className="text-6xl tracking-wider md:text-7xl">{about.wantedTitle}</h2>
            <p className="font-display mt-1 text-xl uppercase text-chili">{about.wantedSub}</p>
            <div className="mx-auto my-5 h-1 w-3/4 bg-ink" />
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 12)} className="mb-3 text-left text-lg leading-snug">{p}</p>
            ))}
            <div className="mx-auto my-5 h-1 w-3/4 bg-ink" />
            <p className="font-display text-lg uppercase">{about.reward}</p>
          </div>
          <Boot className="absolute -bottom-8 -left-6 h-24 w-24 -rotate-12" />
        </div>

        <div>
          <h2 className="toon-title -rotate-2 text-5xl md:text-6xl">A trupe</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:gap-7">
            {members.map((m, i) => <MemberCard key={m.role} m={m} i={i} />)}
          </div>
        </div>
      </div>

      {/* setlist strip */}
      <div className="relative mx-auto mt-16 max-w-4xl rotate-1 px-4">
        <Torn fill="var(--cream)" className="block h-6 w-full" />
        <div className="bg-cream px-6 py-6 md:px-10" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0 31px, color-mix(in oklab, var(--chili) 35%, transparent) 31px 33px)" }}>
          <p className="font-display text-2xl uppercase text-chili">Setlist ✎</p>
          <ol className="mt-2 grid gap-x-8 sm:grid-cols-2">
            {setlist.map((s, i) => (
              <li key={s} className="text-lg leading-8"><span className="font-display mr-2">{String(i + 1).padStart(2, "0")}.</span>{s}</li>
            ))}
          </ol>
        </div>
        <Torn fill="var(--cream)" className="block h-6 w-full rotate-180" />
      </div>
    </section>
  );
}

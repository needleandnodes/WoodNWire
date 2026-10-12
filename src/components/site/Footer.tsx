import logo from "@/assets/logo-wnw.png.asset.json";
import { socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-8 text-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
        <img src={logo.url} alt="Wood N' Wire" className="h-20 w-20 object-contain" loading="lazy" />
        <ul className="flex flex-wrap justify-center gap-3">
          {socials.map((s, i) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" className={`hover-squash inline-block rounded-full border-[3px] border-sun px-4 py-1.5 font-display text-sm uppercase text-sun ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-center md:text-right">
          <p className="font-display uppercase">© Wood N' Wire</p>
          <p className="text-sm text-cloud">Feito com madeira e fio.</p>
        </div>
      </div>
    </footer>
  );
}

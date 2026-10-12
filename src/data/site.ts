// Edite aqui textos, vídeos e redes sociais do site.

export const band = {
  name: "Wood N' Wire",
  tagline: "Um som gigante em dois.",
};

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#videos", label: "Vídeos" },
  { href: "#contato", label: "Contato" },
];

export const about = {
  wantedTitle: "Procura-se",
  wantedSub: "Vivos ou tocando",
  reward: "Recompensa: palco, som e uma cerveja gelada",
  paragraphs: [
    "Dois forasteiros, um violão surrado e um contrabaixo 3/4 maior que a porta do saloon. A Wood N' Wire cavalga pelos clássicos dos anos 60 e 70 — Beatles, Creedence, Bob Dylan e companhia — com poeira de country-rock e um tempero blues-rock.",
    "Tem gaita chorando, percussão quando dá na telha e duas vozes que se entendem melhor que xerife e cavalo. Pouca gente no palco, muito som no salão: um som gigante em dois.",
  ],
};

export type Member = {
  name: string;
  role: string;
  instrument: "guitar" | "bass" | "harmonica" | "drum";
  color: "chili" | "ember" | "canyon" | "sun";
  guest?: boolean;
  photo?: string; // TODO: coloque a URL da foto aqui para substituir a ilustração
};

export const members: Member[] = [
  { name: "[Nome do integrante 1]", role: "Violão + voz", instrument: "guitar", color: "chili" },
  { name: "[Nome do integrante 2]", role: "Contrabaixo 3/4 + voz", instrument: "bass", color: "ember" },
  { name: "A Gaita", role: "Sopro do deserto", instrument: "harmonica", color: "canyon" },
  { name: "Percussão", role: "Estrela convidada", instrument: "drum", color: "sun", guest: true },
];

// TODO: troque pelas músicas reais do repertório
export const setlist = [
  "Come Together — Beatles",
  "Proud Mary — Creedence",
  "Like a Rolling Stone — Dylan",
  "Bad Moon Rising — Creedence",
  "Don't Think Twice — Dylan",
  "[Sua música aqui]",
];

// TODO: troque pelos IDs reais do YouTube (a parte depois de "watch?v=")
export const videos = [
  { youtubeId: "dQw4w9WgXcQ", title: "Ao vivo no saloon", subtitle: "[Placeholder] Episódio 1" },
  { youtubeId: "dQw4w9WgXcQ", title: "Sessão acústica", subtitle: "[Placeholder] Episódio 2" },
  { youtubeId: "dQw4w9WgXcQ", title: "Pôr do sol blues", subtitle: "[Placeholder] Episódio 3" },
];

// TODO: troque pelos links reais
export const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Spotify", href: "https://open.spotify.com/" },
];

export const eventTypes = [
  { value: "bar", label: "Bar" },
  { value: "casamento", label: "Casamento" },
  { value: "festival", label: "Festival" },
  { value: "corporativo", label: "Corporativo" },
  { value: "outro", label: "Outro" },
] as const;

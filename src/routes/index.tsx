import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Videos } from "@/components/site/Videos";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wood N' Wire — Duo acústico | Um som gigante em dois" },
      { name: "description", content: "Violão, contrabaixo 3/4, gaita e duas vozes: Beatles, Creedence e Dylan com tempero country e blues-rock. Contrate a Wood N' Wire." },
      { property: "og:title", content: "Wood N' Wire — Um som gigante em dois" },
      { property: "og:description", content: "Duo acústico de clássicos dos anos 60 e 70 com sabor country-rock e blues-rock." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

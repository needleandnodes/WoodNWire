<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site content (texts, members, setlist, videos, socials) lives in src/data/site.ts; sections in src/components/site/ — keeps placeholders easy to swap.
- Cartoon design tokens/utilities (toon, toon-title, halftone, wood-grain) live in src/styles.css; Tailwind v4 has no tailwind.config.

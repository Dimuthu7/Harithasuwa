import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { useScrollTo } from "../hooks/useScrollTo";

/** Split "Sinhala · English" brand strings for a clearer mobile lockup. */
function splitBilingualTitle(title: string): { sinhala: string | null; english: string } {
  const dot = " · ";
  const idx = title.indexOf(dot);
  if (idx === -1) return { sinhala: null, english: title };
  return {
    sinhala: title.slice(0, idx).trim(),
    english: title.slice(idx + dot.length).trim(),
  };
}

export function SiteHeader() {
  const { content } = useSiteContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo(() => setMenuOpen(false));

  const fullTitle = splitBilingualTitle(content.brand.title);
  const shortTitle = splitBilingualTitle(content.brand.titleShort);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/80 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top, 0px))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 md:py-0 md:h-16 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="min-w-0 flex-1 text-left md:flex-none md:max-w-none group"
          aria-label="Harithasuwa home"
        >
          {/* Mobile & tablet: compact two-line lockup */}
          <span className="md:hidden flex flex-col gap-0.5 min-w-0 pr-1">
            {/* {shortTitle.sinhala ? (
              <span className="text-[1.05rem] sm:text-lg font-semibold text-primary/75 leading-snug tracking-wide truncate">
                {shortTitle.sinhala}
              </span>
            ) : null} */}
            <span
              className="text-[1.05rem] sm:text-lg font-black text-primary leading-tight truncate"
              style={{ fontFamily: fonts.serif, letterSpacing: "-0.02em" }}
            >
              {shortTitle.english}
            </span>
          </span>

          {/* Desktop: full bilingual title */}
          <span className="hidden md:flex flex-col leading-tight">
            {/* {fullTitle.sinhala ? (
              <span className="text-2xl font-semibold text-primary/70 tracking-wide">{fullTitle.sinhala}</span>
            ) : null} */}
            <span
              className="text-2xl lg:text-[1.65rem] font-black text-primary"
              style={{ fontFamily: fonts.serif, letterSpacing: "-0.02em" }}
            >
              {fullTitle.english}
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 shrink-0">
          {content.navigation.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 hover:bg-primary/90 transition-colors"
            style={sharpRadius}
          >
            {content.orderCtaLabel}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden shrink-0 p-2 -mr-1 rounded-sm text-primary hover:bg-primary/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 sm:px-6 py-5 flex flex-col gap-4">
          {content.navigation.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors py-0.5"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground text-sm font-medium px-5 py-3 text-center hover:bg-primary/90 transition-colors mt-1"
            style={sharpRadius}
          >
            {content.orderCtaLabel}
          </button>
        </div>
      )}
    </nav>
  );
}

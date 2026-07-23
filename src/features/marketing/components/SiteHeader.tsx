import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getVisibleNavigation, useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { splitBilingual } from "@/shared/utils/splitBilingual";
import { useScrollTo } from "../hooks/useScrollTo";

function BrandWordmark({
  english,
  sinhala,
  size,
}: {
  english: string;
  sinhala: string | null;
  size: "mobile" | "desktop";
}) {
  const isMobile = size === "mobile";

  return (
    <span className={`flex min-w-0 flex-col ${isMobile ? "gap-0.5" : "gap-1"}`}>
      {sinhala ? (
        <span
          className={`truncate font-medium leading-none ${
            isMobile ? "text-[0.7rem] text-primary/65 sm:text-xs" : "text-sm text-primary/60"
          }`}
          style={{ fontFamily: fonts.serif, letterSpacing: "0.04em" }}
        >
          {sinhala}
        </span>
      ) : null}
      <span
        className={`truncate font-black leading-none text-primary transition-colors group-hover:text-primary/90 ${
          isMobile ? "text-[1.2rem] sm:text-[1.35rem]" : "text-[1.75rem] lg:text-[1.9rem]"
        }`}
        style={{ fontFamily: fonts.serif, letterSpacing: "-0.03em" }}
      >
        {english}
      </span>
      <span
        className={`h-0.5 rounded-full bg-gradient-to-r from-primary via-secondary to-transparent transition-all duration-300 group-hover:via-primary/80 ${
          isMobile ? "w-10" : "w-14"
        }`}
        aria-hidden
      />
    </span>
  );
}

export function SiteHeader() {
  const { content } = useSiteContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo(() => setMenuOpen(false));
  const navLinks = getVisibleNavigation(content);
  const contactVisible = content.sectionVisibility.contact;
  const fullTitle = splitBilingual(content.brand.title);
  const shortTitle = splitBilingual(content.brand.titleShort);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 border-b border-border/80 bg-background/95 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
      style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top, 0px))" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:h-[4.25rem] md:py-0">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="group min-w-0 flex-1 text-left md:max-w-none md:flex-none"
          aria-label="Harithasuwa home"
        >
          <span className="block min-w-0 pr-1 md:hidden">
            <BrandWordmark english={shortTitle.secondary ?? shortTitle.primary} sinhala={shortTitle.secondary ? shortTitle.primary : null} size="mobile" />
          </span>
          <span className="hidden md:block">
            <BrandWordmark english={fullTitle.secondary ?? fullTitle.primary} sinhala={fullTitle.secondary ? fullTitle.primary : null} size="desktop" />
          </span>
        </button>

        <div className="hidden shrink-0 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          {contactVisible ? (
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              style={sharpRadius}
            >
              {content.orderCtaLabel}
            </button>
          ) : null}
        </div>

        <button
          type="button"
          className="-mr-1 shrink-0 rounded-sm p-2 text-primary transition-colors hover:bg-primary/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="flex flex-col gap-4 border-t border-border bg-background px-4 py-5 sm:px-6 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollTo(link.id)}
              className="py-0.5 text-left text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          {contactVisible ? (
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="mt-1 bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              style={sharpRadius}
            >
              {content.orderCtaLabel}
            </button>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
}

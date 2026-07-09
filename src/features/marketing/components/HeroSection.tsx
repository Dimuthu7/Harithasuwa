import { ArrowRight } from "lucide-react";
import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { useScrollTo } from "../hooks/useScrollTo";

export function HeroSection() {
  const { content } = useSiteContent();
  const { hero } = content;
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="min-h-screen grid lg:grid-cols-[3fr_2fr] items-stretch scroll-mt-[5.5rem]"
      style={{ scrollMarginTop: "calc(5.5rem + env(safe-area-inset-top, 0px))" }}
    >
      <div
        className="flex flex-col justify-center px-5 sm:px-8 md:px-16 lg:px-20 pt-[calc(5.25rem+env(safe-area-inset-top,0px))] pb-16 md:pt-20 md:pb-20 lg:py-32"
      >
        <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 max-w-full">
          <span className="w-8 h-px bg-primary/40" />
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">{hero.eyebrow}</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.08] mb-4"
          style={{ fontFamily: fonts.serif }}
        >
          {hero.headlineLines.map((line, i) => (
            <span key={line}>
              {i === hero.headlineAccentIndex ? (
                <em className="not-italic text-primary">{line}</em>
              ) : (
                line
              )}
              {i < hero.headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
{/* 
        <p className="text-sm tracking-wider text-muted-foreground mb-2" style={{ fontFamily: fonts.mono }}>
          {hero.subtitle}
        </p> */}

        {/* <p className="text-base text-muted-foreground max-w-md leading-relaxed mt-4 mb-10">{hero.description}</p> */}

        {hero.description.map((desc) => (
            <p key={desc.slice(0, 40)} className="text-base text-muted-foreground leading-relaxed mb-5">
              {desc}
            </p>
        ))}


        <blockquote
            className="border-l-2 border-primary pl-5 text-primary font-semibold text-base italic mb-5"
            style={{ fontFamily: fonts.serif }}
          >
            &ldquo;{hero.quote}&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo("products")}
            className="group flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:bg-primary/90 transition-all"
            style={sharpRadius}
          >
            {hero.primaryCta}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("vision-mission")}
            className="flex items-center gap-2 border border-foreground/25 text-foreground font-medium px-7 py-3.5 hover:border-primary hover:text-primary transition-all"
            style={sharpRadius}
          >
            {hero.secondaryCta}
          </button>
        </div>

      </div>

      <div className="relative hidden lg:block bg-[#DDD8CC] overflow-hidden">
        <img src={hero.imageUrl} alt={hero.imageAlt} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90" />
        <div className="absolute bottom-12 left-10 bg-secondary text-secondary-foreground px-5 py-4 shadow-lg" style={sharpRadius}>
          <div className="text-3xl font-black" style={{ fontFamily: fonts.serif }}>
            {hero.imageBadgeTitle}
          </div>
          <div className="text-xs tracking-widest uppercase font-semibold">{hero.imageBadgeSubtitle}</div>
        </div>
      </div>
    </section>
  );
}

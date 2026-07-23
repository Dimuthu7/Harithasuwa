import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { useScrollTo } from "../hooks/useScrollTo";

export function HeroSection() {
  const { content } = useSiteContent();
  const { hero, sectionVisibility: v } = content;
  const scrollTo = useScrollTo();
  const reduceMotion = useReducedMotion();
  const showProductsCta = v.products;
  const showVisionCta = v.visionMission;

  const enter = reduceMotion
    ? undefined
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return (
    <section
      id="hero"
      className="grid min-h-screen items-stretch scroll-mt-[5.5rem] lg:grid-cols-[3fr_2fr]"
      style={{ scrollMarginTop: "calc(5.5rem + env(safe-area-inset-top, 0px))" }}
    >
      <div className="flex flex-col justify-center px-5 pt-[calc(5.25rem+env(safe-area-inset-top,0px))] pb-16 sm:px-8 md:px-16 md:pt-20 md:pb-20 lg:px-20 lg:py-32">
        <motion.div
          className="mb-6 inline-flex max-w-full items-center gap-3 sm:mb-8"
          {...(enter
            ? { initial: enter.initial, animate: enter.animate, transition: { duration: 0.5, delay: 0.05 } }
            : {})}
        >
          <span className="h-px w-8 shrink-0 bg-primary/40" aria-hidden />
          <span className="text-sm font-semibold tracking-[0.22em] text-primary/80 uppercase sm:text-base">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          className="mb-4 text-4xl leading-[1.08] font-black text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: fonts.serif }}
          {...(enter
            ? { initial: enter.initial, animate: enter.animate, transition: { duration: 0.55, delay: 0.12 } }
            : {})}
        >
          {hero.headlineLines.map((line, i) => (
            <span key={line}>
              {i === hero.headlineAccentIndex ? <em className="text-primary not-italic">{line}</em> : line}
              {i < hero.headlineLines.length - 1 ? <> </> : null}
            </span>
          ))}
        </motion.h1>

        {hero.description.map((desc, i) => (
          <motion.p
            key={desc.slice(0, 40)}
            className="mb-5 text-base leading-relaxed text-muted-foreground"
            {...(enter
              ? {
                  initial: enter.initial,
                  animate: enter.animate,
                  transition: { duration: 0.5, delay: 0.2 + i * 0.06 },
                }
              : {})}
          >
            {desc}
          </motion.p>
        ))}

        <motion.blockquote
          className="mb-5 border-l-2 border-primary pl-5 text-base font-semibold text-primary italic"
          style={{ fontFamily: fonts.serif }}
          {...(enter
            ? { initial: enter.initial, animate: enter.animate, transition: { duration: 0.5, delay: 0.32 } }
            : {})}
        >
          &ldquo;{hero.quote}&rdquo;
        </motion.blockquote>

        <motion.div
          className="flex flex-wrap gap-4"
          {...(enter
            ? { initial: enter.initial, animate: enter.animate, transition: { duration: 0.5, delay: 0.4 } }
            : {})}
        >
          {showProductsCta ? (
            <button
              type="button"
              onClick={() => scrollTo("products")}
              className="group flex items-center gap-2 bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              style={sharpRadius}
            >
              {hero.primaryCta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          ) : null}
          {showVisionCta ? (
            <button
              type="button"
              onClick={() => scrollTo("vision-mission")}
              className="flex items-center gap-2 border border-foreground/25 px-7 py-3.5 font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              style={sharpRadius}
            >
              {hero.secondaryCta}
            </button>
          ) : null}
        </motion.div>
      </div>

      <motion.div
        className="relative hidden overflow-hidden bg-[#DDD8CC] lg:block"
        {...(reduceMotion
          ? {}
          : { initial: { opacity: 0, scale: 1.04 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } })}
      >
        <img
          src={hero.imageUrl}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-90 mix-blend-multiply"
        />
        <div
          className="absolute bottom-12 left-10 bg-secondary px-5 py-4 text-secondary-foreground shadow-lg"
          style={sharpRadius}
        >
          <div className="text-xs font-semibold tracking-widest uppercase">{hero.imageBadgeSubtitle}</div>
        </div>
      </motion.div>
    </section>
  );
}

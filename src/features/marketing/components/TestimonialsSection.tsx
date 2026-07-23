import { useSiteContent } from "@/content";
import { sharpRadius } from "@/shared/constants/typography";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { StarRow } from "./StarRow";

export function TestimonialsSection() {
  const { content } = useSiteContent();
  const { testimonials } = content;

  return (
    <section id="testimonials" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <Reveal>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            headlineLines={testimonials.headlineLines}
            accentLineIndex={testimonials.headlineAccentLineIndex}
            align="center"
            className="mb-16"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.id} delay={0.08 * i}>
              <div
                className="flex flex-col gap-5 border border-border bg-card p-8 transition-colors hover:border-primary/40"
                style={sharpRadius}
              >
                <StarRow count={t.stars} />
                <p className="flex-1 text-sm leading-relaxed text-foreground/80 italic">&ldquo;{t.body}&rdquo;</p>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

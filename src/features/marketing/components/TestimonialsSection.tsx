import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { StarRow } from "./StarRow";

export function TestimonialsSection() {
  const { content } = useSiteContent();
  const { testimonials } = content;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">{testimonials.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-3" style={{ fontFamily: fonts.serif }}>
            {testimonials.headlineLines.map((line, i) => (
              <span key={line}>
                {i === testimonials.headlineAccentLineIndex ? (
                  <em className="not-italic text-primary">{line}</em>
                ) : (
                  line
                )}
                {i < testimonials.headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.items.map((t) => (
            <div
              key={t.id}
              className="bg-card p-8 flex flex-col gap-5 border border-border hover:border-primary/40 transition-colors"
              style={sharpRadius}
            >
              <StarRow count={t.stars} />
              <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">&ldquo;{t.body}&rdquo;</p>
              <div>
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

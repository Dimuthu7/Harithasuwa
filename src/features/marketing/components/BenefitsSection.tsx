import { Shield } from "lucide-react";
import { useSiteContent } from "@/content";
import { fonts } from "@/shared/constants/typography";
import { benefitIconMap } from "./benefitIcons";

export function BenefitsSection() {
  const { content } = useSiteContent();
  const { benefits } = content;

  return (
    <section id="benefits" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground/60">{benefits.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3" style={{ fontFamily: fonts.serif }}>
            {benefits.headlineLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < benefits.headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.items.map((b) => {
            const Icon = benefitIconMap[b.icon];
            return (
              <div key={b.title} className="flex flex-col gap-4">
                <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center">
                  <Icon size={22} className="text-secondary" />
                </div>
                <h3 className="text-xl font-black" style={{ fontFamily: fonts.serif }}>
                  {b.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{b.body}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-primary-foreground/20 pt-10 flex flex-col md:flex-row gap-4 md:items-center">
          <Shield size={18} className="text-secondary shrink-0" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            <strong className="text-primary-foreground">Storage tip:</strong> {benefits.storageTip}
          </p>
        </div>
      </div>
    </section>
  );
}

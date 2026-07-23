import { Shield } from "lucide-react";
import { useSiteContent } from "@/content";
import { fonts } from "@/shared/constants/typography";
import { benefitIconMap } from "./benefitIcons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function BenefitsSection() {
  const { content } = useSiteContent();
  const { benefits } = content;

  return (
    <section id="benefits" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <Reveal>
          <SectionHeading
            eyebrow={benefits.eyebrow}
            headlineLines={benefits.headlineLines}
            align="center"
            tone="onPrimary"
            className="mb-16"
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.items.map((b, i) => {
            const Icon = benefitIconMap[b.icon];
            return (
              <Reveal key={b.title} delay={0.06 * i}>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-primary-foreground/30">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <h3 className="text-xl font-black" style={{ fontFamily: fonts.serif }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-primary-foreground/70">{b.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/20 pt-10 md:flex-row md:items-center">
            <Shield size={18} className="shrink-0 text-secondary" />
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              <strong className="text-primary-foreground">Storage tip:</strong> {benefits.storageTip}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

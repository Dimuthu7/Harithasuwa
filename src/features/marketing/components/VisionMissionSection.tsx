import { useSiteContent } from "@/content";
import type { VisionMissionBlock } from "@/content/types";
import { sharpRadius } from "@/shared/constants/typography";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function VisionMissionBlockContent({ block }: { block: VisionMissionBlock }) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold tracking-[0.2em] text-primary uppercase">{block.title}</h3>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-5 text-base leading-relaxed text-muted-foreground last:mb-0">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export function VisionMissionSection() {
  const { content } = useSiteContent();
  const { visionMission } = content;

  return (
    <section id="vision-mission" className="bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 md:px-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="aspect-[4/5] overflow-hidden bg-[#C8D5B8]" style={sharpRadius}>
            <img src={visionMission.imageUrl} alt={visionMission.imageAlt} className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow={visionMission.eyebrow}
            headlineLines={visionMission.headlineLines}
            accentLineIndex={visionMission.headlineAccentLineIndex}
            className="mb-8"
          />
          <div className="flex flex-col gap-8">
            <VisionMissionBlockContent block={visionMission.vision} />
            <VisionMissionBlockContent block={visionMission.mission} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

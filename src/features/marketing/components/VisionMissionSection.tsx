import { useSiteContent } from "@/content";
import type { VisionMissionBlock } from "@/content/types";
import { fonts, sharpRadius } from "@/shared/constants/typography";

function VisionMissionBlockContent({ block }: { block: VisionMissionBlock }) {
  return (
    <div>
      <h3 className="text-xs tracking-[0.2em] uppercase font-semibold text-primary mb-3">{block.title}</h3>
      {block.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="text-base text-muted-foreground leading-relaxed mb-5 last:mb-0">
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
    <section id="vision-mission" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <div className="relative">
          <div className="bg-[#C8D5B8] aspect-[4/5] overflow-hidden" style={sharpRadius}>
            <img src={visionMission.imageUrl} alt={visionMission.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">{visionMission.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-8 leading-tight" style={{ fontFamily: fonts.serif }}>
            {visionMission.headlineLines.map((line, i) => (
              <span key={line}>
                {i === visionMission.headlineAccentLineIndex ? (
                  <em className="not-italic text-primary">{line}</em>
                ) : (
                  line
                )}
                {i < visionMission.headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="flex flex-col gap-8">
            <VisionMissionBlockContent block={visionMission.vision} />
            <VisionMissionBlockContent block={visionMission.mission} />
          </div>
        </div>
      </div>
    </section>
  );
}

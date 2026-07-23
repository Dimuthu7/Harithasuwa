import { useState } from "react";
import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProductsSection() {
  const { content } = useSiteContent();
  const { products, productsSection } = content;
  const [activeProduct, setActiveProduct] = useState(0);
  const [selectedWeights, setSelectedWeights] = useState<Record<string, string>>(() =>
    Object.fromEntries(products.map((p) => [p.id, productsSection.defaultWeight])),
  );

  return (
    <section id="products" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        <Reveal className="mb-14">
          <SectionHeading
            eyebrow={productsSection.eyebrow}
            headlineLines={productsSection.headlineLines}
            accentLineIndex={productsSection.headlineAccentLineIndex}
            lineBreak="space"
            description={productsSection.description}
            afterEyebrow={
              <>
                <figure className="mt-6 mb-5 max-w-3xl">
                  <blockquote
                    className="border-l-4 border-primary pl-6 text-lg leading-snug font-black text-foreground md:text-xl"
                    style={{ fontFamily: fonts.serif }}
                  >
                    &ldquo;{productsSection.topProdQuote}&rdquo;
                  </blockquote>
                </figure>
                <p className="mb-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {productsSection.topProdDescription}
                </p>
              </>
            }
          />
        </Reveal>

        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.08 * i}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveProduct(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProduct(i);
                  }
                }}
                className={`group flex cursor-pointer flex-col overflow-hidden transition-all ${
                  i === activeProduct ? "ring-2 ring-primary" : "hover:ring-1 ring-border"
                }`}
                style={{ borderRadius: "2px" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#DDD8CC]">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.tag ? (
                    <div className="absolute top-3 left-3 bg-secondary px-2.5 py-1 text-[10px] font-bold tracking-widest text-secondary-foreground uppercase">
                      {p.tag}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col bg-card p-6">
                  <div className="mb-1">
                    <div className="text-xl font-black text-foreground" style={{ fontFamily: fonts.serif }}>
                      {p.name}
                    </div>
                    <div className="text-sm font-medium text-primary/70" style={{ fontFamily: fonts.mono }}>
                      {p.sinhala}
                    </div>
                  </div>
                  <p className="mt-3 mb-5 flex-1 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
                  <div>
                    <div className="mb-2 text-[10px] font-medium tracking-widest text-muted-foreground uppercase">
                      Choose Weight
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {productsSection.weights.map((w) => (
                        <button
                          key={w}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedWeights((prev) => ({ ...prev, [p.id]: w }));
                          }}
                          className={`border px-3 py-1 text-xs font-medium transition-all ${
                            selectedWeights[p.id] === w
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                          }`}
                          style={sharpRadius}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid gap-6 border border-border bg-card p-8 md:grid-cols-3" style={sharpRadius}>
            <div className="col-span-full mb-2">
              <div className="text-xl font-black text-foreground" style={{ fontFamily: fonts.serif }}>
                {productsSection.enjoyTitle}
              </div>
            </div>
            {productsSection.enjoyItems.map(({ title, body }) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-foreground">{title}</div>
                <p className="text-xs leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

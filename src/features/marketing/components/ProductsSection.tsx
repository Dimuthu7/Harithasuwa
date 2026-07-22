import { useMemo, useState } from "react";
import { useSiteContent } from "@/content";
import { fonts, sharpRadius } from "@/shared/constants/typography";

export function ProductsSection() {
  const { content } = useSiteContent();
  const { products, productsSection } = content;
  const [activeProduct, setActiveProduct] = useState(0);

  const initialWeights = useMemo(() => {
    const map: Record<number, string> = {};
    products.forEach((_, i) => {
      map[i] = productsSection.defaultWeight;
    });
    return map;
  }, [products, productsSection.defaultWeight]);

  const [selectedWeights, setSelectedWeights] = useState<Record<number, string>>(initialWeights);

  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        <div className="mb-14">
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">{productsSection.eyebrow}</span>

          <figure className="max-w-3xl mt-10 mb-6">
            <blockquote
              className="text-lg md:text-xl font-black text-foreground leading-snug border-l-4 border-primary pl-6"
              style={{ fontFamily: fonts.serif }}
            >
              &ldquo;{productsSection.topProdQuote}&rdquo;
            </blockquote>
          </figure>

          <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-3">
            {productsSection.topProdDescription}
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight" style={{ fontFamily: fonts.serif }}>
            {productsSection.headlineLines.map((line, i) => (
              <span key={line}>
                {i === productsSection.headlineAccentLineIndex ? (
                  <em className="not-italic text-primary">{line}</em>
                ) : (
                  line
                )}
                {i < productsSection.headlineLines.length - 1 && <> </>}
              </span>
            ))}
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-3xl leading-relaxed">{productsSection.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActiveProduct(i)}
              className={`group cursor-pointer flex flex-col transition-all ${
                i === activeProduct ? "ring-2 ring-primary" : "hover:ring-1 ring-border"
              }`}
              style={{ borderRadius: "2px", overflow: "hidden" }}
            >
              <div className="relative bg-[#DDD8CC] aspect-[3/4] overflow-hidden">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.tag && (
                  <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                    {p.tag}
                  </div>
                )}
              </div>
              <div className="bg-card p-6 flex flex-col flex-1">
                <div className="mb-1">
                  <div className="font-black text-xl text-foreground" style={{ fontFamily: fonts.serif }}>
                    {p.name}
                  </div>
                  <div className="text-sm text-primary/70 font-medium" style={{ fontFamily: fonts.mono }}>
                    {p.sinhala}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mt-3 mb-5">{p.description}</p>

                <div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium mb-2">Choose Weight</div>
                  <div className="flex gap-2 flex-wrap">
                    {productsSection.weights.map((w) => (
                      <button
                        key={w}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedWeights((prev) => ({ ...prev, [i]: w }));
                        }}
                        className={`text-xs px-3 py-1 border font-medium transition-all ${
                          selectedWeights[i] === w
                            ? "bg-primary text-primary-foreground border-primary"
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
          ))}
        </div>

        <div className="bg-card border border-border p-8 grid md:grid-cols-3 gap-6" style={sharpRadius}>
          <div className="col-span-full mb-2">
            <div className="text-xl font-black text-foreground" style={{ fontFamily: fonts.serif }}>
              {productsSection.enjoyTitle}
            </div>
          </div>
          {productsSection.enjoyItems.map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-2">
              <div className="font-semibold text-sm text-foreground">{title}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

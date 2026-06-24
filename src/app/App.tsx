import { useState } from "react";
import { Leaf, Heart, Shield, Sprout, Star, ChevronDown, Menu, X, ArrowRight, Instagram, Facebook, Twitter } from "lucide-react";

const NAV_LINKS = ["About", "Products", "Benefits", "Testimonials", "Contact"];

const PRODUCTS = [
  {
    name: "Embul Banana",
    sinhala: "එඹුල් කෙසෙල්",
    description: "The classic sour variety — intensely flavoured with a gentle tang. Naturally ripened, dehydrated to chewy perfection. No sugar, no additives.",
    img: "https://images.unsplash.com/photo-1775377262570-de45f1bf28ae?w=600&h=700&fit=crop&auto=format",
    tag: "Bestseller",
  },
  {
    name: "Seeni Banana",
    sinhala: "සීනි කෙසෙල්",
    description: "The beloved sugar banana — naturally sweet and soft when dehydrated. A favourite for those who prefer a gentler, milder flavour.",
    img: "https://images.unsplash.com/photo-1683531731340-ff35378582a4?w=600&h=700&fit=crop&auto=format",
    tag: null,
  },
  {
    name: "Rathambala",
    sinhala: "රතඹල",
    description: "A rare Sri Lankan heirloom variety with a distinct reddish hue and rich, complex flavour profile unlike any other banana you have tasted.",
    img: "https://images.unsplash.com/photo-1775377262391-a322d3a6743d?w=600&h=700&fit=crop&auto=format",
    tag: "Rare Variety",
  },
];

const WEIGHTS = ["80g", "100g", "150g", "200g"];

const BENEFITS = [
  {
    icon: Leaf,
    title: "100% Natural",
    body: "No artificial sugars, preservatives, flavours or colours. Ever. What you taste is what grew on the tree.",
  },
  {
    icon: Sprout,
    title: "Chemical-Free Farms",
    body: "We source only from known home gardens that use no chemical fertilisers or pesticides. We visit them ourselves.",
  },
  {
    icon: Heart,
    title: "All Natural Goodness",
    body: "Dehydrating retains all the natural goodness of fresh banana — vitamins, minerals, fibre — in a convenient, shelf-stable form.",
  },
  {
    icon: Shield,
    title: "Made to Order",
    body: "We produce only after you order, ensuring the freshest possible product reaches your doorstep every single time.",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Weerasinghe",
    role: "Yoga instructor, Colombo",
    body: "I pack Harithasuwa chips for every retreat. My students love that they are genuinely clean-label. The embul variety has an incredible depth of flavour.",
    stars: 5,
  },
  {
    name: "Mihail Perera",
    role: "Marathon runner, Kandy",
    body: "Perfect natural fuel. No crash, no artificial sweetness. The rathambala is something else — I have never tasted anything quite like it.",
    stars: 5,
  },
  {
    name: "Anusha Fernando",
    role: "Nutritionist, Galle",
    body: "I recommend Harithasuwa to clients who want a snack that does not compromise a clean diet. Knowing it comes from chemical-free home gardens makes all the difference.",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#E9C46A] text-[#E9C46A]" />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [selectedWeights, setSelectedWeights] = useState<Record<number, string>>({ 0: "100g", 1: "100g", 2: "100g" });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none">
            <span
              className="text-xl font-black text-primary"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              හරිතසුව
            </span>
            <span className="text-[9px] tracking-widest text-muted-foreground uppercase font-medium">
              Harithasuwa · Natural Healing
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2 hover:bg-primary/90 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Order Now
            </button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left text-base font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 text-left hover:bg-primary/90 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Order Now
            </button>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="pt-16 min-h-screen grid lg:grid-cols-[1fr_1fr] items-stretch">
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-32">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">
              100% Natural · No Additives
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Green<br />
            <em className="not-italic text-primary">Healing,</em><br />
            Naturally.
          </h1>

          <p
            className="text-sm tracking-wider text-muted-foreground mb-2"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            හරිතසුව Dehydrated Banana
          </p>

          <p className="text-base text-muted-foreground max-w-md leading-relaxed mt-4 mb-10">
            Dehydrated banana made from naturally ripened Sri Lankan varieties —
            embul, seeni, and rathambala. No sugar. No preservatives. No flavours.
            Just banana.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("products")}
              className="group flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 hover:bg-primary/90 transition-all"
              style={{ borderRadius: "2px" }}
            >
              Shop Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="flex items-center gap-2 border border-foreground/25 text-foreground font-medium px-7 py-3.5 hover:border-primary hover:text-primary transition-all"
              style={{ borderRadius: "2px" }}
            >
              Our Story
            </button>
          </div>

          <div className="mt-14 flex gap-10 flex-wrap">
            {[["Zero", "Additives"], ["COD", "Delivery"], ["Make to", "Order"]].map(([big, small]) => (
              <div key={big}>
                <div
                  className="text-2xl font-black text-primary"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {big}
                </div>
                <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium mt-0.5">
                  {small}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block bg-[#DDD8CC] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1775377262570-de45f1bf28ae?w=900&h=1200&fit=crop&auto=format"
            alt="Rows of dehydrated banana slices"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90"
          />
          <div
            className="absolute bottom-12 left-10 bg-secondary text-secondary-foreground px-5 py-4 shadow-lg"
            style={{ borderRadius: "2px" }}
          >
            <div
              className="text-3xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pure Banana
            </div>
            <div className="text-xs tracking-widest uppercase font-semibold">
              Nothing Added · Ever
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center py-4 bg-background">
        <ChevronDown size={20} className="text-muted-foreground animate-bounce" />
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
          <div className="relative">
            <div className="bg-[#C8D5B8] aspect-[4/5] overflow-hidden" style={{ borderRadius: "2px" }}>
              <img
                src="https://images.unsplash.com/photo-1649431473478-2768c3f21c6d?w=700&h=875&fit=crop&auto=format"
                alt="Fresh organic bananas"
                className="w-full h-full object-cover"
              />
            </div>
        
          </div>

          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">
              Our Name · Our Mission
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-foreground mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Going Green is<br />
              <em className="not-italic text-primary">the Way to Heal</em>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              <strong className="text-foreground">Harithasuwa</strong> is a combination of two Sinhala words —
              <em className="not-italic font-semibold text-primary"> haritha</em> (green or natural) and
              <em className="not-italic font-semibold text-primary"> suwa</em> (healing). Together they mean
              <em className="not-italic font-semibold"> green healing</em> — our belief that going green
              is the way to heal the world.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              Our products are 100% natural and contain no artificial sugars, preservatives, flavours or
              colours. We source only from home gardens we know personally — gardens that use no chemical
              fertilisers or pesticides.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              We have broad, long-term objectives: to promote the cultivation and consumption of traditional
              food varieties countrywide, support healthy living, encourage home gardening, and ensure food
              security. Right now, we produce dehydrated banana — and we hope to add other fruits, vegetables,
              and traditional rice varieties as we grow.
            </p>

            <blockquote
              className="border-l-2 border-primary pl-5 text-primary font-semibold text-base italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              "Let us make the world a better place, one natural snack at a time."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-14">
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">
              හරිතසුව නිෂ්පාදන · Harithasuwa Products
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-foreground mt-3 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Three Varieties of<br />
              <em className="not-italic text-primary">Dehydrated Banana</em>
            </h2>
            <p className="text-base text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Naturally ripened Sri Lankan bananas — each variety with its own distinct flavour.
              Ready to eat as a snack, as a dessert, or mixed with any breakfast cereal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {PRODUCTS.map((p, i) => (
              <div
                key={p.name}
                onClick={() => setActiveProduct(i)}
                className={`group cursor-pointer flex flex-col transition-all ${
                  i === activeProduct ? "ring-2 ring-primary" : "hover:ring-1 ring-border"
                }`}
                style={{ borderRadius: "2px", overflow: "hidden" }}
              >
                <div className="relative bg-[#DDD8CC] aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
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
                    <div
                      className="font-black text-xl text-foreground"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.name}
                    </div>
                    <div
                      className="text-sm text-primary/70 font-medium"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {p.sinhala}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mt-3 mb-5">
                    {p.description}
                  </p>

                  {/* weight selector */}
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium mb-2">
                      Choose Weight
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {WEIGHTS.map((w) => (
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
                          style={{ borderRadius: "2px" }}
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

          {/* how to enjoy strip */}
          <div className="bg-card border border-border p-8 grid md:grid-cols-3 gap-6" style={{ borderRadius: "2px" }}>
            <div className="col-span-full mb-2">
              <div
                className="text-xl font-black text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Three Ways to Enjoy
              </div>
            </div>
            {[
              ["As a Snack", "Carry a pouch anywhere — no mess, no fuss. A handful satisfies naturally."],
              ["As a Dessert", "Serve alongside curd, yoghurt, or ice cream for an effortless natural dessert."],
              ["With Breakfast Cereal", "Mix into oats, granola, or muesli for a fruity, chewy morning boost."],
            ].map(([title, body]) => (
              <div key={title} className="flex flex-col gap-2">
                <div className="font-semibold text-sm text-foreground">{title}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="benefits" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground/60">
              Why Harithasuwa
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Honest Food.<br />Nothing Hidden.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex flex-col gap-4">
                  <div className="w-12 h-12 border border-primary-foreground/30 flex items-center justify-center">
                    <Icon size={22} className="text-secondary" />
                  </div>
                  <h3
                    className="text-xl font-black"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">{b.body}</p>
                </div>
              );
            })}
          </div>

          {/* storage note */}
          <div className="mt-16 border-t border-primary-foreground/20 pt-10 flex flex-col md:flex-row gap-4 md:items-center">
            <Shield size={18} className="text-secondary shrink-0" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              <strong className="text-primary-foreground">Storage tip:</strong> Once opened,
              store in an airtight container away from direct sunlight to retain freshness and crunch.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary/70">
              Testimonials
            </span>
            <h2
              className="text-4xl md:text-5xl font-black text-foreground mt-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Fruitful &amp; Delicious<br />
              <em className="not-italic text-primary">Experience</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-card p-8 flex flex-col gap-5 border border-border hover:border-primary/40 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <StarRow count={t.stars} />
                <p className="text-sm text-foreground/80 leading-relaxed flex-1 italic">
                  &ldquo;{t.body}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / ORDER ── */}
      <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground/60">
              Order Direct
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Delivered to Your<br />
              <em className="not-italic text-secondary">Doorstep</em>
            </h2>

            <div className="space-y-5 text-sm text-primary-foreground/80 mb-8">
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                <p>
                  <strong className="text-primary-foreground">Cash on Delivery (COD)</strong> —
                  pay only when your order arrives at your door.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                <p>
                  <strong className="text-primary-foreground">Made to Order</strong> —
                  we produce only after you place an order, so you receive the freshest possible product.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                <p>
                  <strong className="text-primary-foreground">Delivery within 2 weeks</strong> —
                  island-wide delivery across Sri Lanka.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                <p>
                  <strong className="text-primary-foreground">Sizes available:</strong> 80g, 100g, 150g, or 200g —
                  choose the quantity of each size per variety.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-primary-foreground/80">
              {[
                ["Email", "hello@harithasuwa.lk"],
                ["Phone / WhatsApp", "+94 77 176 4939"],
                ["Location", "Sri Lanka · Island-wide Delivery"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-[10px] tracking-widest uppercase text-primary-foreground/40 block mb-0.5">
                    {label}
                  </span>
                  {value}
                </div>
              ))}
            </div>
          </div>

          <form
            className="bg-primary-foreground/10 border border-primary-foreground/20 p-8 flex flex-col gap-5"
            style={{ borderRadius: "2px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <h3
              className="text-xl font-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Place an Order
            </h3>

            {[
              { label: "Your Name", type: "text", placeholder: "Kasun Rajapaksa" },
              { label: "Phone / WhatsApp", type: "tel", placeholder: "+94 77 000 0000" },
              { label: "Delivery Address", type: "text", placeholder: "No. 42, Peradeniya Road, Kandy" },
            ].map((field) => (
              <div key={field.label}>
                <label className="text-xs tracking-widest uppercase text-primary-foreground/60 block mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-2.5 text-sm focus:outline-none focus:border-secondary transition-colors"
                  style={{ borderRadius: "2px" }}
                />
              </div>
            ))}

            <div>
              <label className="text-xs tracking-widest uppercase text-primary-foreground/60 block mb-1.5">
                Order Details
              </label>
              <textarea
                rows={4}
                placeholder="e.g. Embul 100g × 2, Seeni 150g × 1, Rathambala 80g × 2"
                className="w-full bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-2.5 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                style={{ borderRadius: "2px" }}
              />
              <p className="text-[10px] text-primary-foreground/40 mt-1.5">
                Specify variety, weight (80g / 100g / 150g / 200g) and quantity for each.
              </p>
            </div>

            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold py-3.5 hover:bg-secondary/90 transition-all"
              style={{ borderRadius: "2px" }}
            >
              Send Order
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[10px] text-primary-foreground/40 text-center leading-relaxed">
              Cash on Delivery · Delivered within 2 weeks · Island-wide Sri Lanka
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-foreground text-background/80 py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div
                className="text-xl font-black text-background mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                හරිතසුව · Harithasuwa
              </div>
              <p className="text-xs text-background/50 leading-relaxed max-w-xs mt-2">
                Dehydrated banana from naturally ripened Sri Lankan varieties.
                100% natural. No additives. Made to order.
              </p>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-background/40 mb-4">
                Quick Links
              </div>
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((l) => (
                  <button
                    key={l}
                    onClick={() => scrollTo(l.toLowerCase())}
                    className="text-left text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase text-background/40 mb-4">
                Follow Us
              </div>
              <div className="flex gap-4 mb-6">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/50 transition-all"
                    style={{ borderRadius: "2px" }}
                  >
                    <Icon size={15} />
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-background/35 leading-relaxed">
                Once opened, store in an airtight container, away from direct sunlight.
              </p>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-xs text-background/40">
              © 2024 Harithasuwa · හරිතසුව. All rights reserved.
            </p>
            <p className="text-xs text-background/40">
              Sri Lanka · Haritha (Green) + Suwa (Healing) = Natural Healing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

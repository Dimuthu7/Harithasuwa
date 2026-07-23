import { Facebook } from "lucide-react";
import { getVisibleNavigation, useSiteContent } from "@/content";
import type { FooterSocialPlatform } from "@/content/types";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { useScrollTo } from "../hooks/useScrollTo";

function WhatsAppIcon({ size = 15 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const socialIconMap: Record<FooterSocialPlatform, typeof Facebook | typeof WhatsAppIcon> = {
  facebook: Facebook,
  whatsapp: WhatsAppIcon,
};

export function SiteFooter() {
  const { content } = useSiteContent();
  const scrollTo = useScrollTo();
  const navLinks = getVisibleNavigation(content);

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="text-xl font-black text-background mb-1" style={{ fontFamily: fonts.serif }}>
              {content.brand.titleShort}
            </div>
            <p className="text-xs text-background/50 leading-relaxed max-w-xs mt-2">{content.brand.footerBlurb}</p>
          </div>
          <div>
            <div className="text-[10px] tracking-widest uppercase text-background/40 mb-4">Quick Links</div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-widest uppercase text-background/40 mb-4">Follow Us</div>
            <div className="flex gap-4 mb-6">
              {content.footer.socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform];
                return (
                  <a
                    key={link.platform}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 border border-background/20 flex items-center justify-center text-background/60 hover:text-background hover:border-background/50 transition-all"
                    style={sharpRadius}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
            <p className="text-[10px] text-background/35 leading-relaxed">{content.footer.storageNote}</p>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-xs text-background/40">{content.brand.copyright}</p>
          <p className="text-xs text-background/40">{content.brand.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}

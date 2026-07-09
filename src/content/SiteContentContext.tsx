import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { defaultSiteContent } from "./defaultSiteContent";
import type { SiteContent } from "./types";

export interface SiteContentContextValue {
  content: SiteContent;
  /** Reserved for admin: replace entire document after save/publish. */
  setContent: (next: SiteContent | ((prev: SiteContent) => SiteContent)) => void;
}

const SiteContentContext = createContext<SiteContentContextValue | null>(null);

export interface SiteContentProviderProps {
  children: ReactNode;
  /** Inject API-loaded content (e.g. per-tenant site config from admin). */
  initialContent?: SiteContent;
}

export function SiteContentProvider({ children, initialContent }: SiteContentProviderProps) {
  const [content, setContent] = useState<SiteContent>(initialContent ?? defaultSiteContent);

  const value = useMemo(
    () => ({
      content,
      setContent,
    }),
    [content],
  );

  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent(): SiteContentContextValue {
  const ctx = useContext(SiteContentContext);
  if (!ctx) {
    throw new Error("useSiteContent must be used within SiteContentProvider");
  }
  return ctx;
}

export async function fetchSiteContent(_siteId?: string): Promise<SiteContent> {
  // Future: GET /api/sites/:siteId/content — admin publishes JSON matching SiteContent.
  return defaultSiteContent;
}

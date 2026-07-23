import { useSiteContent } from "@/content";
import { fonts } from "@/shared/constants/typography";

/**
 * Placeholder dashboard — wire forms here to edit SiteContent and POST to your API.
 * Auth (roles, tenant site id) should guard /admin routes before production.
 */
export function AdminDashboardPage() {
  const { content } = useSiteContent();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black" style={{ fontFamily: fonts.serif }}>
          Site content
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          This area will let administrators update copy, images, products, and contact details without code changes.
          Content is typed as <code className="text-sm">SiteContent</code> and shared with the public marketing site.
        </p>
      </div>

      <section className="rounded-md border border-border p-6 space-y-4">
        <h2 className="text-lg font-semibold">Preview (read-only)</h2>
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">Brand</dt>
            <dd>{content.brand.titleShort}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Products</dt>
            <dd>{content.products.map((p) => p.name).join(", ")}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Contact email</dt>
            <dd>{content.contact.contactDetails.find((d) => d.label === "Email")?.value}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Visible sections</dt>
            <dd>
              {Object.entries(content.sectionVisibility)
                .filter(([, on]) => on)
                .map(([id]) => id)
                .join(" · ") || "None"}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Nav links</dt>
            <dd>{content.navigation.map((n) => n.label).join(" · ")}</dd>
          </div>
        </dl>
        <p className="text-xs text-muted-foreground">
          Next steps: authentication, image upload storage, and a save endpoint that returns updated SiteContent for
          setContent().
        </p>
      </section>
    </div>
  );
}

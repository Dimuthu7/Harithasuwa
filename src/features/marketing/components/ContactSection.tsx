import { ArrowRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useSiteContent } from "@/content";
import type { ContactFieldName } from "@/content/types";
import { submitContactForm } from "@/features/marketing/api/submitContactForm";
import { fonts, sharpRadius } from "@/shared/constants/typography";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const emptyFields = (): Record<ContactFieldName, string> => ({
  name: "",
  phone: "",
  address: "",
});

export function ContactSection() {
  const { content } = useSiteContent();
  const { contact } = content;
  const [fields, setFields] = useState(emptyFields);
  const [orderDetails, setOrderDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    const result = await submitContactForm({
      recipientEmail: contact.recipientEmail,
      name: fields.name,
      phone: fields.phone,
      address: fields.address,
      orderDetails,
    });
    setSubmitting(false);

    if (result.ok) {
      toast.success("Order sent! We will contact you soon to confirm.");
      setFields(emptyFields());
      setOrderDetails("");
      return;
    }

    toast.error(result.error);
  }

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-8 md:px-16 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <SectionHeading
            eyebrow={contact.eyebrow}
            headlineLines={contact.headlineLines}
            accentLineIndex={contact.headlineAccentLineIndex}
            tone="onPrimary"
            accentClassName="text-secondary"
            className="mb-6"
          />

          <div className="mb-8 space-y-5 text-sm text-primary-foreground/80">
            {contact.orderBullets.map((bullet) => (
              <div key={bullet.title} className="flex gap-3">
                <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                <p>
                  <strong className="text-primary-foreground">{bullet.title}</strong> — {bullet.body}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-sm text-primary-foreground/80">
            {contact.contactDetails.map(({ label, value }) => (
              <div key={label}>
                <span className="mb-0.5 block text-[10px] tracking-widest text-primary-foreground/40 uppercase">
                  {label}
                </span>
                {value}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="flex flex-col gap-5 border border-primary-foreground/20 bg-primary-foreground/10 p-8"
            style={sharpRadius}
            onSubmit={handleSubmit}
            noValidate
          >
            <h3 className="text-xl font-black" style={{ fontFamily: fonts.serif }}>
              {contact.formTitle}
            </h3>

            {contact.formFields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={`contact-${field.name}`}
                  className="mb-1.5 block text-xs tracking-widest text-primary-foreground/60 uppercase"
                >
                  {field.label}
                </label>
                <input
                  id={`contact-${field.name}`}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={fields[field.name]}
                  onChange={(e) => setFields((prev) => ({ ...prev, [field.name]: e.target.value }))}
                  disabled={submitting}
                  className="w-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground transition-colors placeholder:text-primary-foreground/30 focus:border-secondary focus:outline-none disabled:opacity-60"
                  style={sharpRadius}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="contact-order-details"
                className="mb-1.5 block text-xs tracking-widest text-primary-foreground/60 uppercase"
              >
                {contact.orderDetailsLabel}
              </label>
              <textarea
                id="contact-order-details"
                name="orderDetails"
                rows={4}
                placeholder={contact.orderDetailsPlaceholder}
                required
                value={orderDetails}
                onChange={(e) => setOrderDetails(e.target.value)}
                disabled={submitting}
                className="w-full resize-none border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground transition-colors placeholder:text-primary-foreground/30 focus:border-secondary focus:outline-none disabled:opacity-60"
                style={sharpRadius}
              />
              <p className="mt-1.5 text-[10px] text-primary-foreground/40">{contact.orderDetailsHint}</p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group flex w-full items-center justify-center gap-2 bg-secondary py-3.5 font-bold text-secondary-foreground transition-all hover:bg-secondary/90 disabled:pointer-events-none disabled:opacity-70"
              style={sharpRadius}
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  {contact.submitLabel}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-[10px] leading-relaxed text-primary-foreground/40">{contact.formFooter}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

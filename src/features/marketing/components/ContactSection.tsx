import { ArrowRight, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useSiteContent } from "@/content";
import type { ContactFieldName } from "@/content/types";
import { submitContactForm } from "@/features/marketing/api/submitContactForm";
import { fonts, sharpRadius } from "@/shared/constants/typography";

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
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground/60">{contact.eyebrow}</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6 leading-tight" style={{ fontFamily: fonts.serif }}>
            {contact.headlineLines.map((line, i) => (
              <span key={line}>
                {i === contact.headlineAccentLineIndex ? (
                  <em className="not-italic text-secondary">{line}</em>
                ) : (
                  line
                )}
                {i < contact.headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>

          <div className="space-y-5 text-sm text-primary-foreground/80 mb-8">
            {contact.orderBullets.map((bullet) => (
              <div key={bullet.title} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                <p>
                  <strong className="text-primary-foreground">{bullet.title}</strong> — {bullet.body}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-sm text-primary-foreground/80">
            {contact.contactDetails.map(({ label, value }) => (
              <div key={label}>
                <span className="text-[10px] tracking-widest uppercase text-primary-foreground/40 block mb-0.5">{label}</span>
                {value}
              </div>
            ))}
          </div>
        </div>

        <form
          className="bg-primary-foreground/10 border border-primary-foreground/20 p-8 flex flex-col gap-5"
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
                className="text-xs tracking-widest uppercase text-primary-foreground/60 block mb-1.5"
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
                className="w-full bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-2.5 text-sm focus:outline-none focus:border-secondary transition-colors disabled:opacity-60"
                style={sharpRadius}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="contact-order-details"
              className="text-xs tracking-widest uppercase text-primary-foreground/60 block mb-1.5"
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
              className="w-full bg-primary-foreground/10 border border-primary-foreground/25 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-2.5 text-sm focus:outline-none focus:border-secondary transition-colors resize-none disabled:opacity-60"
              style={sharpRadius}
            />
            <p className="text-[10px] text-primary-foreground/40 mt-1.5">{contact.orderDetailsHint}</p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="group w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold py-3.5 hover:bg-secondary/90 transition-all disabled:opacity-70 disabled:pointer-events-none"
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
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[10px] text-primary-foreground/40 text-center leading-relaxed">{contact.formFooter}</p>
        </form>
      </div>
    </section>
  );
}

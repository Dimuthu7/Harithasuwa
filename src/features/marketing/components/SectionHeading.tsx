import type { ReactNode } from "react";
import { fonts } from "@/shared/constants/typography";
import { splitBilingual } from "@/shared/utils/splitBilingual";

export interface SectionHeadingProps {
  eyebrow: string;
  headlineLines: string[];
  accentLineIndex?: number;
  lineBreak?: "space" | "br";
  align?: "left" | "center";
  tone?: "default" | "onPrimary";
  accentClassName?: string;
  className?: string;
  description?: string;
  afterEyebrow?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  headlineLines,
  accentLineIndex,
  lineBreak = "br",
  align = "left",
  tone = "default",
  accentClassName,
  className = "",
  description,
  afterEyebrow,
}: SectionHeadingProps) {
  const { primary, secondary } = splitBilingual(eyebrow);
  const onPrimary = tone === "onPrimary";
  const accent = accentClassName ?? (onPrimary ? "text-secondary" : "text-primary");
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <div className={`mb-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span
          className={`hidden sm:block h-px w-8 shrink-0 ${onPrimary ? "bg-primary-foreground/35" : "bg-primary/45"}`}
          aria-hidden
        />
        {secondary ? (
          <div className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${centered ? "justify-center" : ""}`}>
            <span
              className={`text-xl font-semibold leading-tight sm:text-2xl md:text-3xl ${
                onPrimary ? "text-primary-foreground/85" : "text-primary"
              }`}
              style={{ fontFamily: fonts.serif, letterSpacing: "0.01em" }}
            >
              {primary}
            </span>
            <span
              className={`text-sm font-medium uppercase tracking-[0.18em] sm:text-base md:text-lg ${
                onPrimary ? "text-primary-foreground/55" : "text-primary/65"
              }`}
            >
              {secondary}
            </span>
          </div>
        ) : (
          <span
            className={`text-sm font-semibold uppercase tracking-[0.22em] sm:text-base md:text-lg ${
              onPrimary ? "text-primary-foreground/70" : "text-primary/80"
            }`}
          >
            {primary}
          </span>
        )}
      </div>

      {afterEyebrow}

      <h2
        className={`text-2xl font-black leading-[1.05] tracking-tight sm:text-2xl md:text-3xl lg:text-4xl ${
          onPrimary ? "text-primary-foreground" : "text-foreground"
        }`}
        style={{ fontFamily: fonts.serif }}
      >
        {headlineLines.map((line, i) => (
          <span key={`${line}-${i}`}>
            {accentLineIndex !== undefined && i === accentLineIndex ? (
              <em className={`not-italic ${accent}`}>{line}</em>
            ) : (
              line
            )}
            {i < headlineLines.length - 1 && (lineBreak === "br" ? <br /> : <> </>)}
          </span>
        ))}
      </h2>

      {description ? (
        <p
          className={`mt-5 max-w-3xl text-base leading-relaxed md:text-lg ${centered ? "mx-auto" : ""} ${
            onPrimary ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

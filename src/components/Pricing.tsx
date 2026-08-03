import { useState } from "react";
import { pricing } from "../content";

export default function Pricing() {
  const [selected, setSelected] = useState(pricing.defaultSelected);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-28 md:py-40 px-6 md:px-16 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-body">
            {pricing.eyebrow}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl leading-tight">
            {pricing.titleLine1}
            <br />
            <em>{pricing.titleEm}</em>
          </h2>
          <p className="text-sm text-muted-foreground mt-6 font-body max-w-sm leading-relaxed">
            {pricing.body}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {pricing.packages.map((pkg, index) => {
            const active = selected === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelected(pkg.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(pkg.id);
                }}
                // biome-ignore lint/a11y/useSemanticElements: card contains list markup, which is invalid inside a <button>
                role="button"
                tabIndex={0}
                className={`cursor-pointer p-8 md:p-10 flex flex-col gap-6 transition-colors duration-300 relative
                ${
                  index < pricing.packages.length - 1
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                }
                ${
                  active
                    ? "bg-foreground text-primary-foreground"
                    : "bg-background hover:bg-secondary/50"
                }
              `}
              >
                {pkg.tag && (
                  <span
                    className={`absolute top-6 right-6 text-xs tracking-[0.15em] uppercase font-body px-2 py-1
                    ${
                      active
                        ? "bg-primary-foreground/10 text-primary-foreground/60"
                        : "bg-foreground/5 text-muted-foreground"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                )}

                <div>
                  <p
                    className={`text-xs tracking-[0.2em] uppercase font-body mb-4 ${
                      active
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-xs font-body ${
                        active
                          ? "text-primary-foreground/50"
                          : "text-muted-foreground"
                      }`}
                    >
                      €
                    </span>
                    <span
                      className={`font-heading text-5xl md:text-6xl tracking-tight ${
                        active ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-body mt-1 ${
                      active
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground"
                    }`}
                  >
                    {pkg.unit}
                    {pkg.pricePerSession && (
                      <span className="ml-2">· €{pkg.pricePerSession}</span>
                    )}
                  </p>
                </div>

                <p
                  className={`text-xs leading-relaxed font-body ${
                    active
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>

                <ul className="flex flex-col gap-2 mt-auto">
                  {pkg.includes.map((line) => (
                    <li key={line} className="flex items-start gap-3">
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${
                          active
                            ? "bg-primary-foreground/40"
                            : "bg-muted-foreground"
                        }`}
                      />
                      <span
                        className={`text-xs font-body leading-relaxed ${
                          active
                            ? "text-primary-foreground/80"
                            : "text-foreground"
                        }`}
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-border pt-10">
          <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-xs">
            {pricing.note}
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="bg-foreground text-primary-foreground text-xs tracking-[0.2em] uppercase font-body px-8 py-4 hover:bg-foreground/80 transition-colors duration-200 whitespace-nowrap"
          >
            {pricing.cta}
          </button>
        </div>
      </div>
    </section>
  );
}

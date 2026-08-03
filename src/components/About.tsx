import portrait from "../assets/caroline-philippi.jpg";
import { about } from "../content";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-40 px-6 md:px-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="relative">
          <img
            src={portrait}
            alt={about.imageAlt}
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="mt-4 flex gap-6">
            <div className="h-px flex-1 bg-border self-center" />
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body whitespace-nowrap">
              {about.imageCaption}
            </p>
          </div>
        </div>

        <div className="md:pt-16 flex flex-col gap-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-body">
              {about.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-8">
              {about.titleLine1}
              <br />
              <em>{about.titleEm}</em>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground font-body max-w-sm">
              {about.body}
            </p>
          </div>

          <div className="border-t border-border pt-8 flex flex-col gap-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex gap-6">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body w-20 shrink-0 pt-0.5">
                  {fact.label}
                </span>
                <span className="text-sm text-foreground font-body">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { method } from "../content";

export default function Method() {
  return (
    <section
      id="philosophy"
      className="bg-foreground text-primary-foreground py-28 md:py-40 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-6 font-body">
            {method.eyebrow}
          </p>
          <h2 className="font-heading text-4xl md:text-6xl leading-tight max-w-lg">
            {method.titleLine1}
            <em>{method.titleEm}</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-l border-primary-foreground/20">
          {method.principles.map((item) => (
            <div
              key={item.number}
              className="border-b border-r border-primary-foreground/20 p-8 md:p-12 hover:bg-primary-foreground/5 transition-colors duration-300"
            >
              <p className="text-xs tracking-[0.2em] text-primary-foreground/30 mb-6 font-body">
                {item.number}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl mb-4 text-primary-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-primary-foreground/60 font-body max-w-xs">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 border-t border-primary-foreground/20 pt-16">
          <blockquote className="font-heading text-3xl md:text-5xl lg:text-6xl italic leading-tight text-center max-w-4xl mx-auto text-primary-foreground/90">
            {method.quote}
          </blockquote>
          <p className="text-center text-xs tracking-[0.2em] uppercase text-primary-foreground/30 mt-6 font-body">
            {method.quoteAuthor}
          </p>
        </div>
      </div>
    </section>
  );
}

import { type FormEvent, useState } from "react";
import { contact, site } from "../content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(site.mailSubject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-40 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-body">
              {contact.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-10">
              {contact.titleLine1}
              <br />
              <em>{contact.titleEm}</em>
            </h2>
            <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-xs mb-12">
              {contact.body}
            </p>

            <div className="flex flex-col gap-5 border-t border-border pt-10">
              {contact.details.map((item) => (
                <div key={item.label} className="flex gap-8 items-start">
                  <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-body w-20 shrink-0">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground font-body hover:opacity-50 transition-opacity"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-foreground font-body">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {sent ? (
              <div className="py-16">
                <p className="font-heading text-3xl md:text-4xl mb-4">
                  {contact.successTitle}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  {contact.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {contact.fields.map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label
                      htmlFor={field.id}
                      className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.id]}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          [field.id]: e.target.value,
                        }))
                      }
                      required
                      className="bg-transparent border-b border-border py-3 text-sm text-foreground font-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-200"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs tracking-[0.18em] uppercase text-muted-foreground font-body"
                  >
                    {contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder={contact.messagePlaceholder}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    required
                    className="bg-transparent border-b border-border py-3 text-sm text-foreground font-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 self-start bg-foreground text-primary-foreground text-xs tracking-[0.2em] uppercase font-body px-10 py-4 hover:bg-foreground/80 transition-colors duration-200"
                >
                  {contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Check } from "lucide-react";

const items = [
  "A proven, time-efficient process to capture insights from senior leaders",
  "An expert editorial team that writes in each executive's distinctive tone of voice",
  "Content structured for conversion: articles + newsletters designed to drive sign-ups and repeat engagement",
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-section-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Consistent executive content, without chasing busy people.
            </h2>
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check size={12} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-section-border bg-background p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">How it works</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">1</span>
                <span className="text-sm font-medium text-foreground">30-min executive briefing</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">2</span>
                <span className="text-sm font-medium text-foreground">Draft in their voice</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">3</span>
                <span className="text-sm font-medium text-foreground">Publish &amp; distribute</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

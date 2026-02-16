import { ArrowRight } from "lucide-react";

const points = [
  "Vantage is built by Profile, an award-winning thought leadership and PR agency. We've seen what works: strong, consistent executive insight drives attention, trust, and revenue.",
  "Most teams struggle to stay consistent. Content is often scattered, infrequent, and hard to sustain.",
  "Vantage brings everything into one place. A dedicated thought leadership hub on your website keeps your message clear and focused.",
  "Every piece leads somewhere. A clear conversion journey turns readers into real opportunities.",
  "You get an expert team behind it. Professional support keeps high-quality content flowing—without adding pressure to your internal team.",
];

const CredibilitySection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">Why this matters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Built on a decade of thought leadership know-how.
            </h2>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
            >
              Book a demo <ArrowRight size={16} />
            </a>
          </div>
          <div className="lg:col-span-3 space-y-4">
            {points.map((point, i) => (
              <div key={i} className="rounded-lg border border-section-border bg-surface-elevated p-4">
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;

import { Target, Eye, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Clear CTAs, frictionless sign-up",
    description: "Turn one-time visits into ongoing subscriber relationships.",
  },
  {
    icon: Eye,
    title: "No distractions",
    description: "A clean, expertise-first experience built for professional services and B2B firms.",
  },
  {
    icon: TrendingUp,
    title: "Improves over time",
    description: "Data-led optimisation based on what your audience actually reads, clicks, and signs up for.",
  },
];

const DesignPhilosophy = () => {
  return (
    <section className="section-padding bg-surface-elevated border-y border-section-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple, brand-lite design engineered for{" "}
            <span className="text-primary">B2B conversion.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="text-center px-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft">
                <item.icon size={22} className="text-accent-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;

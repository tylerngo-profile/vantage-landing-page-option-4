import { Globe, PenTool, Mail, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Self-hosted on your domain",
    description: "Launch dedicated insight hubs under your own URL. Drive the right visitors to your site and keep them there.",
  },
  {
    icon: PenTool,
    title: "Fully managed content creation",
    description: "We extract your executives' thinking and turn it into sharp, engaging content that sounds like them, not marketing.",
  },
  {
    icon: Mail,
    title: "Built-in newsletter",
    description: "Convert anonymous traffic into subscribers. Nurture mid-funnel interest into real relationships with the people you want to reach.",
  },
  {
    icon: BarChart3,
    title: "Analytics + integrations",
    description: "See what performs and who's engaging. Connect Vantage to your CRM and marketing stack to track impact and follow up faster.",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your experts' insights are your strongest growth lever.{" "}
            <span className="text-primary">Vantage unlocks them.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-section-border bg-surface-elevated p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft mb-4">
                <f.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

import { FileText, Share2, Video, Newspaper } from "lucide-react";

const formats = [
  {
    icon: FileText,
    title: "Written insights",
    description: "Regular articles and newsletters that build authority and demand.",
  },
  {
    icon: Share2,
    title: "Social media",
    description: "Amplify each executive's content to reach the right audience consistently.",
  },
  {
    icon: Video,
    title: "Video",
    description: "Bring insights to life and deepen connection with prospects.",
  },
  {
    icon: Newspaper,
    title: "Media coverage",
    description: "Add third-party credibility that accelerates trust and boosts conversion.",
  },
];

const ContentFormats = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Written content is just the start.{" "}
            <span className="text-primary">Scale your executive presence.</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Vantage gives you a platform now, plus a team you can plug into later.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {formats.map((f) => (
            <div key={f.title} className="rounded-xl border border-section-border bg-surface-elevated p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft">
                <f.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-body">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentFormats;

const steps = [
  {
    number: "1",
    title: "Set up your experts' hubs",
    description: "Create a dedicated hub for each expert on your domain. Build their profile and bio, consolidate past coverage, and migrate existing blogs and insights so you start with instant credibility.",
  },
  {
    number: "2",
    title: "Capture insights and create content",
    description: "Each month, we extract fresh thinking from your experts in a time-efficient way. We shape it into high-quality articles and newsletter-ready formats, with clear sign-off on topics, tone, and messaging.",
  },
  {
    number: "3",
    title: "Publish, distribute, and grow the audience",
    description: "We publish to each hub and send as a structured newsletter. Promote via social cross-posting, targeted ads, and retargeting to drive traffic, increase sign-ups, and convert attention into warm leads.",
  },
  {
    number: "4",
    title: "Enrich the hub as you scale",
    description: "When your experts are ready, we can expand beyond written insights with richer formats, including video, podcast content, and media coverage, to deepen credibility and accelerate growth.",
  },
];

const TimelineSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-surface-elevated border-y border-section-border">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Live in weeks. <span className="text-primary">Updated forever.</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-section-border hidden md:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {step.number}
                </div>
                <div className="rounded-xl border border-section-border bg-background p-5 flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

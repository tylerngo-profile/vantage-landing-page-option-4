import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-4">
              Insight-led platform for in-house experts
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              The insight hub for your{" "}
              <span className="text-primary">in-house experts.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-body">
              Vantage houses insight-led content for your internal experts, with done-for-you creation, newsletter sign-up, and analytics built in.
            </p>

            {/* Value pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["Launch in weeks", "Publish consistently", "Own your audience"].map((text) => (
                <span key={text} className="rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-foreground">
                  {text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors"
              >
                Book a demo <ArrowRight size={16} />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                See an example hub
              </a>
            </div>
          </div>

          {/* Right: mock hub preview */}
          <div className="relative">
            <div className="rounded-xl border border-section-border bg-surface-elevated p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example expert hub preview</span>
                <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-accent-foreground">Live</span>
              </div>
              {/* Mock content */}
              <div className="space-y-3">
                <div className="h-3 w-3/4 rounded bg-section-border" />
                <div className="h-3 w-1/2 rounded bg-section-border" />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="h-20 rounded-lg bg-muted" />
                  <div className="h-20 rounded-lg bg-muted" />
                </div>
                <div className="h-16 rounded-lg bg-muted" />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-section-border">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Subscriber growth</p>
                  <p className="text-2xl font-bold text-foreground">+28%</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Repeat visits</p>
                  <p className="text-2xl font-bold text-foreground">2.4x</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

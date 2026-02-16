import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="demo" className="section-padding bg-background">
      <div className="section-container">
        <div className="mx-auto max-w-2xl rounded-2xl border border-section-border bg-surface-elevated p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to turn expert insight into pipeline?
          </h2>
          <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
            See how Vantage could look on your domain. Book a short demo with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
      </div>
    </section>
  );
};

export default FinalCTA;

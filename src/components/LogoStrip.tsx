const LogoStrip = () => {
  const logos = ["Law firm", "Accountancy", "Consultancy", "B2B Services"];

  return (
    <section className="border-y border-section-border bg-surface-elevated py-8">
      <div className="section-container">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          Trusted by professional services firms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((name) => (
            <div
              key={name}
              className="flex h-10 items-center rounded-md border border-border bg-background px-6 text-sm font-medium text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;

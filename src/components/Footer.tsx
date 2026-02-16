const Footer = () => {
  return (
    <footer className="border-t border-section-border bg-surface-elevated py-10">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
            <span className="text-xs font-bold text-primary-foreground">V</span>
          </div>
          <span className="text-sm font-semibold text-foreground">Vantage</span>
          <span className="text-xs text-subtle font-body">by Profile</span>
        </div>
        <p className="text-xs text-muted-foreground font-body">
          © {new Date().getFullYear()} Profile. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

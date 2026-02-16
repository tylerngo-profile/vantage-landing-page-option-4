import React from 'react';
import Section from './ui/Section';

const items = [
  {
    title: 'Clear CTAs, frictionless sign-up',
    body: 'Turn one-time visits into ongoing subscriber relationships.',
  },
  {
    title: 'No distractions',
    body: 'A clean, expertise-first experience built for professional services and B2B firms.',
  },
  {
    title: 'Improves over time',
    body: "Data-led optimisation based on what your audience actually reads, clicks, and signs up for.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10 font-medium text-center">
          Simple, brand-lite design engineered for B2B conversion.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-brand-100 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

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
    <Section className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-10">
          Simple, brand-lite design engineered for B2B conversion.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="border border-stone-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

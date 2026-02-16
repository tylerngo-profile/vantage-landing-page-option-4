import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <Section className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
          Built on a decade of thought leadership know-how.
        </h2>
        <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
          Vantage is built by Profile, the award-winning thought leadership and PR agency. We've seen what works: strong, consistent executive insight wins attention, trust, and revenue.
        </p>
        <p className="text-xl text-stone-600 mb-8 font-light leading-relaxed">
          But most companies struggle because content is scattered, infrequent, and hard to sustain. Vantage fixes that. A dedicated hub on your website, with a clear conversion journey, powered by a professional team that keeps content flowing.
        </p>
        <p className="text-xl text-stone-900 mb-10 leading-relaxed font-medium">
          The best of both worlds: owned channel + done-for-you execution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg">Book a demo and see how Vantage could look on your domain.</Button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;

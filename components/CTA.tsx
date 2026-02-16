import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <Section id="roi" className="bg-white border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6">
          Built on a decade of thought leadership know-how.
        </h2>

        <p className="text-lg text-stone-700 leading-relaxed mb-8">
          Vantage is built by Profile, the award-winning thought leadership and PR agency. We've seen what works: strong, consistent executive insight wins attention, trust, and revenue.
        </p>

        <p className="text-lg text-stone-700 leading-relaxed mb-8">
          But most companies struggle because content is scattered, infrequent, and hard to sustain. Vantage fixes that. A dedicated hub on your website, with a clear conversion journey, powered by a professional team that keeps content flowing.
        </p>

        <p className="text-lg text-stone-900 font-medium leading-relaxed mb-10">
          The best of both worlds: owned channel + done-for-you execution.
        </p>

        <Button variant="primary" size="lg">
          Book a demo and see how Vantage could look on your domain.
        </Button>
      </div>
    </Section>
  );
};

export default CTA;

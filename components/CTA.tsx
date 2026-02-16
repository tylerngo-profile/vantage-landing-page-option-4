import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <Section className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <span className="text-brand-900 font-semibold tracking-widest uppercase text-xs mb-4 block">Why Vantage</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight mb-6">
              Built on a decade of thought leadership know-how.
            </h2>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              Vantage is built by Profile, the award-winning thought leadership and PR agency. We've seen what works: strong, consistent executive insight wins attention, trust, and revenue.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200 p-6 md:p-8">
              <p className="text-lg text-stone-700 leading-relaxed mb-6">
                But most companies struggle because content is scattered, infrequent, and hard to sustain. Vantage fixes that. A dedicated hub on your website, with a clear conversion journey, powered by a professional team that keeps content flowing.
              </p>

              <div className="border-l-2 border-brand-900 pl-4 mb-8">
                <p className="text-lg text-stone-900 leading-relaxed font-medium">
                  The best of both worlds: owned channel + done-for-you execution.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg">Book a demo and see how Vantage could look on your domain.</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;

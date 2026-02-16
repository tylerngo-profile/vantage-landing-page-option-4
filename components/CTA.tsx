import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const CTA: React.FC = () => {
  return (
    <Section className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-8 leading-tight">
          Ready to build your <br/> <span className="italic text-brand-900">authority engine?</span>
        </h2>
        <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light">
          Stop letting your firm's expertise go to waste. Start capturing, refining, and distributing it today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" size="lg">Book a personal demo</Button>
          <Button variant="secondary" size="lg">View example hub</Button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const blocks = [
  {
    title: 'Written insights',
    body: 'Regular articles and newsletters that build authority and demand.',
  },
  {
    title: 'Social media',
    body: "Amplify each executive's content to reach the right audience consistently.",
  },
  {
    title: 'Video',
    body: 'Bring insights to life and deepen connection with prospects.',
  },
  {
    title: 'Media coverage',
    body: 'Add third-party credibility that accelerates trust and boosts conversion.',
  },
];

const Showcase: React.FC = () => {
  return (
    <Section fullWidth className="bg-stone-100 py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-brand-900 font-semibold tracking-widest uppercase text-xs mb-4 block">Content formats</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight">
              Written content is just the start. Scale your executive presence when you're ready.
            </h2>
          </div>
          <div className="mb-2">
            <p className="text-stone-600 max-w-md text-sm md:text-base leading-relaxed">
              Vantage gives you a platform now, plus a team you can plug into later.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block) => (
            <div key={block.title} className="bg-white border border-stone-200 p-6">
              <h3 className="font-serif text-xl text-stone-900 mb-3">{block.title}</h3>
              <p className="text-stone-600 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">See an example hub</Button>
        </div>
      </div>
    </Section>
  );
};

export default Showcase;

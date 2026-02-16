import React from 'react';
import Section from './ui/Section';

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
    <Section id="examples" fullWidth className="bg-white py-24 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 leading-tight mb-6 max-w-4xl">
          Written content is just the start. Scale your executive presence when you're ready.
        </h2>

        <p className="text-lg text-stone-600 mb-12 max-w-3xl">
          Vantage gives you a platform now, plus a team you can plug into later.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block) => (
            <div key={block.title} className="border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{block.title}</h3>
              <p className="text-stone-600 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Showcase;

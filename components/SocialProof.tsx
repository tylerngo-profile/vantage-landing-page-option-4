import React from 'react';

const blocks = [
  'Self-hosted on your domain',
  'Fully managed content creation',
  'Built-in newsletter',
  'Analytics + integrations',
];

const SocialProof: React.FC = () => {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <p className="text-center text-xs font-semibold tracking-widest text-stone-500 uppercase mb-8">Why this matters</p>
        <h2 className="text-center font-serif text-3xl md:text-4xl text-stone-900 mb-10 max-w-4xl mx-auto">
          Your experts' insights are your strongest growth lever. <span className="text-brand-900">Vantage unlocks them.</span>
        </h2>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
          {blocks.map((block) => (
            <div key={block} className="font-serif text-lg md:text-xl text-stone-900 font-bold border border-stone-200 bg-stone-50 px-5 py-4">
              {block}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

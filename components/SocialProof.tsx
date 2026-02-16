import React from 'react';

const items = [
  {
    title: 'Self-hosted on your domain',
    body: 'Launch dedicated insight hubs under your own URL. Drive the right visitors to your site and keep them there.',
  },
  {
    title: 'Fully managed content creation',
    body: "We extract your executives' thinking and turn it into sharp, engaging content that sounds like them, not marketing.",
  },
  {
    title: 'Built-in newsletter',
    body: 'Convert anonymous traffic into subscribers. Nurture mid-funnel interest into real relationships with the people you want to reach.',
  },
  {
    title: 'Analytics + integrations',
    body: "See what performs and who's engaging. Connect Vantage to your CRM and marketing stack to track impact and follow up faster.",
  },
];

const SocialProof: React.FC = () => {
  return (
    <section className="border-y border-stone-200 bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 mb-12 max-w-4xl leading-tight">
          Your experts' insights are your strongest growth lever. <span className="text-brand-900">Vantage unlocks them.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.title} className="border border-stone-200 bg-stone-50 p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

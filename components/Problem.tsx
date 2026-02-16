import React from 'react';
import Section from './ui/Section';

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

const Problem: React.FC = () => {
  return (
    <Section id="features" className="bg-stone-50 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
              Consistent executive content, without chasing busy people.
            </h2>
            <div className="w-16 h-1 bg-brand-900 mb-6"></div>
            <p className="text-lg text-stone-600 font-light">
              A proven system designed to keep expert-led content flowing with clarity, consistency, and conversion intent.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-12">
          {items.map((item, idx) => (
            <div className="group" key={item.title}>
              <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs mr-3 text-stone-400 group-hover:border-brand-900 group-hover:text-brand-900 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                {item.title}
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed font-serif pl-11">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Problem;

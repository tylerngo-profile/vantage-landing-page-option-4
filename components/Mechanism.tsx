import React from 'react';
import Section from './ui/Section';

const steps = [
  {
    title: "Set up your experts' hubs",
    body: 'Create a dedicated hub for each expert on your domain. Build their profile and bio, consolidate past coverage, and migrate existing blogs and insights so you start with instant credibility.',
  },
  {
    title: 'Capture insights and create content',
    body: 'Each month, we extract fresh thinking from your experts in a time-efficient way. We shape it into high-quality articles and newsletter-ready formats, with clear sign-off on topics, tone, and messaging.',
  },
  {
    title: 'Publish, distribute, and grow the audience',
    body: 'We publish to each hub and send as a structured newsletter. Promote via social cross-posting, targeted ads, and retargeting to drive traffic, increase sign-ups, and convert attention into warm leads.',
  },
  {
    title: 'Enrich the hub as you scale',
    body: 'When your experts are ready, we can expand beyond written insights with richer formats, including video, podcast content, and media coverage, to deepen credibility and accelerate growth.',
  },
];

const Mechanism: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 mb-12">
          Live in weeks. Updated forever.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="border border-stone-200 p-6 bg-stone-50">
              <div className="text-brand-900 font-semibold mb-3">{idx + 1})</div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Mechanism;

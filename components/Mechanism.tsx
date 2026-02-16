import React from 'react';
import Section from './ui/Section';
import { Mic, PenTool, Share2, Layers } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    numeral: 'I',
    title: "Set up your experts' hubs",
    body: 'Create a dedicated hub for each expert on your domain. Build their profile and bio, consolidate past coverage, and migrate existing blogs and insights so you start with instant credibility.',
  },
  {
    icon: PenTool,
    numeral: 'II',
    title: 'Capture insights and create content',
    body: 'Each month, we extract fresh thinking from your experts in a time-efficient way. We shape it into high-quality articles and newsletter-ready formats, with clear sign-off on topics, tone, and messaging.',
  },
  {
    icon: Share2,
    numeral: 'III',
    title: 'Publish, distribute, and grow the audience',
    body: 'We publish to each hub and send as a structured newsletter. Promote via social cross-posting, targeted ads, and retargeting to drive traffic, increase sign-ups, and convert attention into warm leads.',
  },
  {
    icon: Layers,
    numeral: 'IV',
    title: 'Enrich the hub as you scale',
    body: 'When your experts are ready, we can expand beyond written insights with richer formats, including video, podcast content, and media coverage, to deepen credibility and accelerate growth.',
  },
];

const Mechanism: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Live in weeks. Updated forever.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-stone-200">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const withRightBorder = idx < steps.length - 1;
          return (
            <div
              key={step.title}
              className={`p-8 md:p-10 border-b lg:border-b-0 border-stone-200 group hover:bg-stone-50 transition-colors duration-300 ${withRightBorder ? 'lg:border-r' : ''}`}
            >
              <div className="mb-8 flex justify-between items-start">
                <Icon className="w-8 h-8 text-brand-900 stroke-[1.5]" />
                <span className="font-serif text-4xl text-stone-200 group-hover:text-stone-300 transition-colors">{step.numeral}</span>
              </div>
              <h3 className="text-lg font-serif text-stone-900 mb-4">{step.title}</h3>
              <p className="text-stone-600 leading-relaxed">{step.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Mechanism;

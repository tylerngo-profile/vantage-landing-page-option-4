import React from 'react';
import Section from './ui/Section';

const bullets = [
  'A proven, time-efficient process to capture insights from senior leaders',
  "An expert editorial team that writes in each executive's distinctive tone of voice",
  'Content structured for conversion: articles + newsletters designed to drive sign-ups and repeat engagement',
];

const Problem: React.FC = () => {
  return (
    <Section className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-semibold text-stone-900 mb-10 leading-tight">
          Consistent executive content, without chasing busy people.
        </h2>

        <ul className="space-y-5">
          {bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-stone-700">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-900" />
              <span className="text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Problem;

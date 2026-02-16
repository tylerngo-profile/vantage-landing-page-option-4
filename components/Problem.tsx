import React from 'react';
import Section from './ui/Section';

const Problem: React.FC = () => {
  return (
    <Section className="bg-stone-50 border-b border-stone-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Sticky Headline */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
              The paradox of <br/>modern expertise.
            </h2>
            <div className="w-16 h-1 bg-brand-900 mb-6"></div>
            <p className="text-lg text-stone-600 font-light">
              Your firm is sitting on a goldmine of insights, but mining it has become operationally impossible.
            </p>
          </div>
        </div>

        {/* Scrolling Narrative */}
        <div className="lg:col-span-7 space-y-16">
          <div className="group">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs mr-3 text-stone-400 group-hover:border-brand-900 group-hover:text-brand-900 transition-colors">01</span>
              The Utilization Trap
            </h3>
            <p className="text-xl text-stone-600 leading-relaxed font-serif pl-11">
              Your billable experts are your best authors. They are also your busiest assets. Asking them to write a whitepaper is asking them to stop generating revenue. It’s a zero-sum game that content marketing always loses.
            </p>
          </div>

          <div className="group">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs mr-3 text-stone-400 group-hover:border-brand-900 group-hover:text-brand-900 transition-colors">02</span>
              The Ghostwriter Gap
            </h3>
            <p className="text-xl text-stone-600 leading-relaxed font-serif pl-11">
              External agencies don't understand your nuance. They produce "fluff" that damages your brand credibility. You spend more time editing their drafts than you would have spent writing it yourself.
            </p>
          </div>

          <div className="group">
            <h3 className="text-xl font-bold text-stone-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-xs mr-3 text-stone-400 group-hover:border-brand-900 group-hover:text-brand-900 transition-colors">03</span>
              The Distribution Black Hole
            </h3>
            <p className="text-xl text-stone-600 leading-relaxed font-serif pl-11">
              Even when a great piece is written, it dies in a PDF on a hidden landing page. It isn't formatted for LinkedIn, it isn't sliced for newsletters, and it doesn't drive conversation.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;
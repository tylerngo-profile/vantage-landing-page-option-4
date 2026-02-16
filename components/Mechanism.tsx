import React from 'react';
import Section from './ui/Section';
import { Mic, PenTool, Share2 } from 'lucide-react';

const Mechanism: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
          The Vantage Mechanism
        </h2>
        <p className="text-stone-600 text-lg">
          A managed workflow designed to respect your experts' time while maximizing their output.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-stone-200">
        {/* Step 1 */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
          <div className="mb-8 flex justify-between items-start">
             <Mic className="w-8 h-8 text-brand-900 stroke-[1.5]" />
             <span className="font-serif text-4xl text-stone-200 group-hover:text-stone-300 transition-colors">I</span>
          </div>
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Capture</h3>
          <p className="text-stone-600 leading-relaxed">
            We interview your experts for 30 minutes. No writing required. We record, transcribe, and extract the core intellectual property using our proprietary framework.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-200 group hover:bg-stone-50 transition-colors duration-300">
          <div className="mb-8 flex justify-between items-start">
             <PenTool className="w-8 h-8 text-brand-900 stroke-[1.5]" />
             <span className="font-serif text-4xl text-stone-200 group-hover:text-stone-300 transition-colors">II</span>
          </div>
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Refine</h3>
          <p className="text-stone-600 leading-relaxed">
            Our specialized B2B editors turn the transcript into a suite of assets: a long-form article, LinkedIn posts, and a newsletter segment. You approve with one click.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-8 md:p-12 group hover:bg-stone-50 transition-colors duration-300">
          <div className="mb-8 flex justify-between items-start">
             <Share2 className="w-8 h-8 text-brand-900 stroke-[1.5]" />
             <span className="font-serif text-4xl text-stone-200 group-hover:text-stone-300 transition-colors">III</span>
          </div>
          <h3 className="text-2xl font-serif text-stone-900 mb-4">Distribute</h3>
          <p className="text-stone-600 leading-relaxed">
            Assets are published directly to your custom Vantage Hub and pushed to your experts' social channels. Analytics track who is reading—and who is buying.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Mechanism;
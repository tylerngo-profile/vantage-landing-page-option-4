import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';

const Showcase: React.FC = () => {
  return (
    <Section fullWidth className="bg-stone-100 py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-900 font-semibold tracking-widest uppercase text-xs mb-4 block">The Platform</span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight">
              Your firm's new <br />front page.
            </h2>
          </div>
          <div className="mb-2">
            <p className="text-stone-600 max-w-md text-sm md:text-base leading-relaxed">
              A dedicated, branded content hub that hosts your insights, captures leads, and integrates directly with your CRM.
            </p>
          </div>
        </div>

        <div className="relative w-full rounded-sm bg-white shadow-2xl border border-stone-200 overflow-hidden">
          <div className="bg-stone-50 border-b border-stone-200 p-4 flex items-center space-x-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-stone-300"></div>
              <div className="w-3 h-3 rounded-full bg-stone-300"></div>
              <div className="w-3 h-3 rounded-full bg-stone-300"></div>
            </div>
            <div className="flex-1 bg-white border border-stone-200 h-8 rounded-sm flex items-center px-4 text-xs text-stone-400 font-mono">
              insights.yourfirm.com
            </div>
          </div>

          <div className="aspect-[16/9] w-full bg-white p-8 md:p-16 flex flex-col items-center justify-center border-b-[1px] border-stone-100 relative">
            <div className="w-full max-w-4xl text-center space-y-8">
              <div className="inline-block px-3 py-1 bg-brand-50 text-brand-900 text-xs font-bold tracking-wider uppercase">Strategy Report</div>
              <div className="font-serif text-3xl md:text-5xl text-stone-900">The 2024 State of Supply Chain Resilience</div>
              <div className="flex items-center justify-center space-x-4 text-sm text-stone-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white"></div>
                </div>
                <span>By J. Smith & A. Doe • 8 min read</span>
              </div>
            </div>

            <div className="w-full max-w-2xl mt-16 space-y-4 opacity-50 blur-[1px]">
              <div className="h-4 bg-stone-200 w-full"></div>
              <div className="h-4 bg-stone-200 w-full"></div>
              <div className="h-4 bg-stone-200 w-11/12"></div>
              <div className="h-4 bg-stone-200 w-full"></div>
              <div className="flex gap-4 mt-8">
                <div className="h-40 bg-stone-100 w-1/2"></div>
                <div className="space-y-4 w-1/2">
                  <div className="h-4 bg-stone-200 w-full"></div>
                  <div className="h-4 bg-stone-200 w-full"></div>
                  <div className="h-4 bg-stone-200 w-full"></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-xl border border-stone-200 max-w-xs z-20">
              <h4 className="font-bold text-stone-900 mb-2">Lead Capture Built-in</h4>
              <p className="text-sm text-stone-600 mb-4">Readers can access premium assets by exchanging email details.</p>
              <div className="h-8 bg-brand-900 w-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">See an example hub</Button>
        </div>
      </div>
    </Section>
  );
};

export default Showcase;

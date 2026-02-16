import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-sans text-5xl md:text-7xl font-semibold leading-[1.12] text-stone-900 mb-8 tracking-tight">
              The insight hub for your <span className="text-brand-900">in-house experts.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mb-8">
              Vantage houses insight-led content for your internal experts, with done-for-you creation, newsletter sign-up, and analytics built in.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                'Launch in weeks.',
                'Publish consistently.',
                'Own the audience on your domain.',
              ].map((item) => (
                <span key={item} className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-700">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                Book a demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                See an example hub
                <ChevronRight className="ml-2 w-4 h-4 text-stone-400 group-hover:text-brand-900" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-sm border border-stone-200 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-brand-900 font-semibold mb-4">Insight-led platform</p>
              <div className="space-y-3">
                <div className="h-3 bg-stone-100 w-4/5" />
                <div className="h-3 bg-stone-100 w-3/4" />
                <div className="h-3 bg-stone-100 w-5/6" />
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="h-24 bg-stone-50 border border-stone-200" />
                <div className="h-24 bg-stone-50 border border-stone-200" />
              </div>
              <div className="h-16 bg-brand-50 border border-brand-100 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

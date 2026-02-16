import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.12] text-stone-900 mb-8 tracking-tight">
              The insight hub for your <br />
              <span className="italic text-brand-900">in-house experts.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed max-w-2xl mb-8">
              Vantage houses insight-led content for your internal experts, with done-for-you creation, newsletter sign-up, and analytics built in.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['Launch in weeks.', 'Publish consistently.', 'Own the audience on your domain.'].map((item) => (
                <span key={item} className="px-4 py-2 border border-stone-300 text-sm text-stone-700 bg-white">
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

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-stone-100 border border-stone-200 p-2 md:p-4">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900/10"></div>
              <div className="absolute top-0 right-0 w-[1px] h-full bg-stone-900/10"></div>

              <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                <div className="h-12 border-b border-stone-100 flex items-center px-4 justify-between">
                  <div className="h-2 w-20 bg-stone-200"></div>
                  <div className="h-4 w-4 rounded-full border border-stone-200"></div>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="font-serif text-3xl text-stone-900 mb-4 leading-tight">Insight Hub Preview</div>
                  <div className="space-y-3 mb-8">
                    <div className="h-2 bg-stone-100 w-full"></div>
                    <div className="h-2 bg-stone-100 w-11/12"></div>
                    <div className="h-2 bg-stone-100 w-full"></div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-end justify-between space-x-2 h-32">
                      <div className="w-full bg-brand-100 h-[40%]"></div>
                      <div className="w-full bg-brand-200 h-[60%]"></div>
                      <div className="w-full bg-brand-300 h-[50%]"></div>
                      <div className="w-full bg-brand-900 h-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -bottom-4 w-full h-full border border-stone-300 -z-10 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

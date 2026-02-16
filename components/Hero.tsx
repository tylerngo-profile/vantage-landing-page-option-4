import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center space-x-2 border-b border-stone-300 pb-2 mb-8 w-fit">
              <span className="text-xs uppercase tracking-widest font-semibold text-brand-900">
                For Professional Services
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-stone-900 mb-8 tracking-tight">
              Turn expertise <br />
              <span className="italic text-brand-900">into authority.</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-xl mb-10">
              The managed platform that extracts tacit knowledge from your busiest experts and turns it into high-performance content assets.
            </p>

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

          {/* Right Column: Abstract Editorial Visual */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] md:aspect-[3/4] bg-stone-100 border border-stone-200 p-2 md:p-4">
               {/* Decorative Lines */}
               <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900/10"></div>
               <div className="absolute top-0 right-0 w-[1px] h-full bg-stone-900/10"></div>
               
               {/* Content Simulation */}
               <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                  {/* Top Bar simulation */}
                  <div className="h-12 border-b border-stone-100 flex items-center px-4 justify-between">
                    <div className="h-2 w-20 bg-stone-200"></div>
                    <div className="h-4 w-4 rounded-full border border-stone-200"></div>
                  </div>
                  
                  {/* Main Visual */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="font-serif text-3xl text-stone-900 mb-4 leading-tight">
                      The Future of <br/>Strategic Consulting
                    </div>
                    <div className="space-y-3 mb-8">
                       <div className="h-2 bg-stone-100 w-full"></div>
                       <div className="h-2 bg-stone-100 w-11/12"></div>
                       <div className="h-2 bg-stone-100 w-full"></div>
                    </div>
                    
                    {/* Abstract Chart */}
                    <div className="mt-auto">
                        <div className="flex items-end justify-between space-x-2 h-32">
                           <div className="w-full bg-brand-100 h-[40%] relative group">
                              <div className="absolute bottom-0 w-full bg-brand-900/10 h-0 group-hover:h-full transition-all duration-700"></div>
                           </div>
                           <div className="w-full bg-brand-200 h-[60%]"></div>
                           <div className="w-full bg-brand-300 h-[50%]"></div>
                           <div className="w-full bg-brand-900 h-[85%] relative">
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs px-2 py-1">
                                +42%
                              </div>
                           </div>
                        </div>
                    </div>
                  </div>
               </div>

               {/* Shadow Element */}
               <div className="absolute -right-4 -bottom-4 w-full h-full border border-stone-300 -z-10 bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
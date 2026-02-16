import React from 'react';
import Section from './ui/Section';

const Testimonials: React.FC = () => {
  return (
    <Section className="bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-10 opacity-50">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21L14.017 18C14.017 16.0547 14.5312 14.5312 15.5596 13.4297C16.5879 12.2891 18.2344 11.4531 20.498 10.9219V7.17188C18.4453 7.82812 16.7988 8.87109 15.5596 10.3008C14.3672 11.6836 13.7715 13.4531 13.7715 15.6094V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.0547 5.53125 14.5312 6.55957 13.4297C7.58789 12.2891 9.23438 11.4531 11.498 10.9219V7.17188C9.44531 7.82812 7.79883 8.87109 6.55957 10.3008C5.36719 11.6836 4.77148 13.4531 4.77148 15.6094V21H5.0166Z" />
          </svg>
        </div>

        <blockquote className="font-serif text-2xl md:text-4xl leading-tight mb-12 font-medium">
          "Vantage has completely transformed how we go to market. We're finally publishing the caliber of insight that wins 7-figure consulting retainers, without burning out our partners."
        </blockquote>

        <div className="flex flex-col items-center">
          <cite className="font-sans font-bold tracking-wide text-base not-italic">Sarah Jenkins</cite>
          <span className="font-sans text-brand-200 text-sm mt-1">CMO, Apex Strategy Group</span>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

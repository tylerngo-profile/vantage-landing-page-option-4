import React from 'react';

const SocialProof: React.FC = () => {
  const brands = ["Acme Consulting", "Global Strategy", "Apex Partners", "Frontier Law", "Beacon Financial"];
  
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <p className="text-center text-xs font-semibold tracking-widest text-stone-500 uppercase mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, idx) => (
            <div key={idx} className="font-serif text-xl md:text-2xl text-stone-900 font-bold">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
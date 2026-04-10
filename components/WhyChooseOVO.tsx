import React from 'react';

const WhyChooseOVO = () => {
  return (
    <section className="py-24 bg-white" id="fees">
      <div className="container mx-auto px-6">
        <div className="bento-grid">
          <div className="col-span-12 lg:col-span-4 bg-[#001d59] p-10 rounded-3xl text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-9xl">savings</span>
            </div>
            <h3 className="text-3xl font-extrabold font-headline">Cost Savings</h3>
            <p className="text-lg text-slate-300 leading-relaxed">Combine multiple Australian purchases into one consolidated shipment and reduce international shipping costs by up to 50%.</p>
            <div className="pt-4">
              <span className="text-[#00A86B] font-bold">Save Average: $80 AUD/package</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 grid md:grid-cols-2 gap-4">
            <div className="bg-surface-container p-10 rounded-3xl space-y-4">
              <span className="material-symbols-outlined text-4xl text-[#003087]">visibility</span>
              <h4 className="text-2xl font-bold text-primary">Total Transparency</h4>
              <p className="text-on-surface-variant">No more hidden fees at the wharf. With OVO, you see your full Solomon Islands VAT and duties breakdown before you even ship.</p>
            </div>
            <div className="bg-surface-container p-10 rounded-3xl space-y-4 border-l-4 border-[#00A86B]">
              <span className="material-symbols-outlined text-4xl text-[#003087]">speed</span>
              <h4 className="text-2xl font-bold text-primary">Ease of Use</h4>
              <p className="text-on-surface-variant">The entire process—from Australia to Honiara—is managed within a single app. No more back-and-forth emails or phone calls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOVO;

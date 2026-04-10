import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, icon: 'account_circle', title: 'Sign Up', desc: 'Create your account and instantly get your unique warehouse ID.' },
    { id: 2, icon: 'shopping_cart', title: 'Shop Australia', desc: 'Shop your favorite Aussie brands like IKEA, Kmart, or Amazon.' },
    { id: 3, icon: 'warehouse', title: 'Deliver to Us', desc: 'Use our warehouse address at checkout for domestic Aussie shipping.' },
    { id: 4, icon: 'notifications', title: 'Get Notified', desc: 'Instantly know when your package arrives at our warehouse.' },
    { id: 5, icon: 'inventory_2', title: 'Consolidate', desc: 'Bundle multiple orders into one box to save big on shipping.' },
    { id: 6, icon: 'receipt_long', title: 'Clear Duties', desc: 'Pay duties and VAT upfront with Zonos transparency—no surprises.' },
    { id: 7, icon: 'flight_takeoff', title: 'Ship to Honiara', desc: 'Your box is fast-tracked to the Solomon Islands by air or sea.' },
    { id: 8, icon: 'local_shipping', title: 'Live Tracking', desc: 'Watch your package every step of the way until delivery.' },
  ];

  return (
    <section className="py-24 bg-surface-container-low relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'repeating-linear-gradient(30deg, #001d59, #001d59 1px, transparent 1px, transparent 20px)' }}></div>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold font-headline text-primary mb-16">The OVO Story: Simple & Direct</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-6 items-start">
              <div className="bg-[#003087] text-white w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center font-bold">{step.id}</div>
              <div className="space-y-3">
                <span className="material-symbols-outlined text-[#00A86B] text-3xl">{step.icon}</span>
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

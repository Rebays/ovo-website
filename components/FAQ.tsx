import React from 'react';

const FAQ = () => {
  const faqs = [
    { q: 'Which Australian stores can I shop at?', a: 'Literally any store that ships within Australia. Once you have your OVO Warehouse ID, you are free to shop at IKEA, Myer, Target, eBay, and more.' },
    { q: 'How do I pay for duties and taxes?', a: 'We integrate with Zonos to calculate the exact SBD amount for Solomon Islands 15% VAT and applicable customs duties. You can pay these directly through the OVO app via credit card or digital wallet.' },
    { q: 'How long does shipping take?', a: 'Standard air freight takes 5-7 business days from the moment we dispatch from our Australian warehouse. Sea freight options are available for larger items and typically take 3-4 weeks.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-extrabold font-headline text-center mb-16 text-primary uppercase tracking-widest">Common Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-surface-container-low p-8 rounded-2xl">
              <h4 className="font-bold text-lg mb-3">{faq.q}</h4>
              <p className="text-on-surface-variant">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 p-12 border-2 border-dashed border-outline-variant rounded-3xl">
          <h3 className="text-2xl font-bold text-primary mb-4">Ready to start shopping?</h3>
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

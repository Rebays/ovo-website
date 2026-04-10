import React from 'react';
import Image from 'next/image';

const AppPreview = () => {
  const screens = [
    { title: 'Arrival Alerts', img: '/ovo-package-arrival.png', mt: false },
    { title: 'Warehouse ID', img: '/ovo-app-highlight.png', mt: true },
    { title: 'Easy Docs', img: '/ovo-document-upload.png', mt: false },
    { title: 'Fee Transparency', img: '/ovo-transparency.png', mt: true },
    { title: 'Live Tracking', img: '/ovo-tracking.png', mt: false },
  ];

  return (
    <section className="py-24 bg-white" id="preview">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline text-primary tracking-tight">Experience the OVO Mobile App</h2>
          <div className="w-20 h-1.5 bg-[#00A86B] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {screens.map((screen, idx) => (
            <div key={idx} className={`space-y-4 text-center group ${screen.mt ? 'md:mt-8' : ''}`}>
              <div className="bg-surface-container-low rounded-[2.5rem] p-4 shadow-xl group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-white rounded-[2rem] h-[400px] flex items-center justify-center overflow-hidden border border-outline-variant/10 relative">
                  <Image
                    src={screen.img}
                    alt={screen.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="font-bold text-primary uppercase text-xs tracking-widest">{screen.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreview;

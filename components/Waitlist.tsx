'use client';

import React, { useTransition } from 'react';
import { toast } from 'sonner';
import { joinWaitlist } from '../app/actions';

const Waitlist = () => {
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.success) {
        toast.success('Successfully joined the waitlist!');
        const form = document.getElementById('waitlist-form') as HTMLFormElement;
        form?.reset();
      } else {
        toast.error(result.error || 'Something went wrong');
      }
    });
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="bg-[#003087] rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <span className="material-symbols-outlined text-[15rem]">stars</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">Be among the first to use <br />OVO in Solomon Islands</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Join 1,000+ early birds waiting for the easiest way to shop from Australia. Get exclusive early access and zero service fees for your first 3 months.</p>
          <form id="waitlist-form" action={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="relative group">
              <input
                name="email"
                className="w-full bg-white/10 border-0 focus:ring-2 focus:ring-[#00A86B] rounded-2xl py-5 px-6 text-white placeholder:text-white/50 text-lg transition-all outline-none"
                placeholder="Enter your email address"
                type="email"
                required
              />
            </div>
            <button
              disabled={isPending}
              className="w-full bg-[#00A86B] hover:brightness-110 text-white font-bold py-5 rounded-2xl text-xl transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
            >
              {isPending ? 'Joining...' : 'Join the Waitlist Now'}
            </button>
            <p className="text-sm text-white/40">We respect your privacy. No spam, just OVO updates.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;

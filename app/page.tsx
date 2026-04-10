import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import AppPreview from "@/components/AppPreview";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseOVO from "@/components/WhyChooseOVO";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <AppPreview />
      <HowItWorks />
      <WhyChooseOVO />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
}

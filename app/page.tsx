import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
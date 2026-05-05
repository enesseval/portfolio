import HeroSection from "@/components/HeroSection";
import MainGrid from "@/components/MainGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      {/* z-index: 2 keeps this above the hero's fixed background layer (z-index: 1) */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <MainGrid />
        <Footer />
      </div>
    </main>
  );
}

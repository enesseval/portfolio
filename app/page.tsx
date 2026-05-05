import HeroSection from "@/components/HeroSection";
import MainGrid from "@/components/MainGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="_next" className="flex flex-col w-full">
      <HeroSection />
      <MainGrid />
      <Footer />
    </main>
  );
}

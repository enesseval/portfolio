import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

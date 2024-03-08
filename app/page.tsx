import Header from "@/components/layouts/header";
import HeroSection from "./_components/hero-section";
import StrategicSection from "./_components/strategic-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <StrategicSection />
    </div>
  );
}

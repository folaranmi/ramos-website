import Header from "@/components/layouts/header";
import HeroSection from "./_components/hero-section";
import StrategicSection from "./_components/strategic-section";
import RequestDemo from "./_components/request-demo-section";
import DataSection from "./_components/data-section";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <StrategicSection />
      <RequestDemo />
      <DataSection />
    </div>
  );
}

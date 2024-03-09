import Header from "@/components/layouts/header";
import HeroSection from "./_components/hero-section";
import StrategicSection from "./_components/strategic-section";
import RequestDemo from "./_components/request-demo-section";
import DataSection from "./_components/data-section";
import DataIndicators from "./_components/data-indicators";
import GetStarted from "./_components/get-started";
import Footer from "@/components/layouts/footer";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <HeroSection />
        <StrategicSection />
        <RequestDemo />
        <DataSection />
        <DataIndicators />
        <GetStarted />
      </div>
      
      <Footer />
    </>
  );
}

import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Meditation from "@/components/sections/Meditation";
import Community from "@/components/sections/Community";
import Crisis from "@/components/sections/Crisis";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-950">
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Services />
        <Meditation />
        <Community />
        <Crisis />
      </main>
      <Footer />
    </div>
  );
}

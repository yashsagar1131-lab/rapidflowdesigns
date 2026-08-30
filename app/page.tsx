import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import WhyRapidFlow from "@/components/WhyRapidFlow";
import Applications from "@/components/Applications";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Process />
        <WhyRapidFlow />
        <Applications />
        <WhoWeWorkWith />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

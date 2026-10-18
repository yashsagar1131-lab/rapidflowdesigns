import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Examples from "@/components/Examples";
import Process from "@/components/Process";
import Engagements from "@/components/Engagements";
import Principles from "@/components/Principles";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Examples />
        <Process />
        <Engagements />
        <Principles />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

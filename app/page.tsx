import { Hero } from "@/components/Hero";
import { ClientTicker } from "@/components/ClientTicker";
import { Scale } from "@/components/Scale";
import { ClientProof } from "@/components/ClientProof";
import { OperatingFormats } from "@/components/OperatingFormats";
import { Bridge } from "@/components/Bridge";
import { OperatingSystem } from "@/components/OperatingSystem";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LetsTalkFloat } from "@/components/LetsTalkFloat";
import { ScrollContainer } from "@/components/ScrollContainer";
import { NavBar } from "@/components/NavBar";
import { HomePageJsonLd } from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <HomePageJsonLd />
      <NavBar />
      <ScrollContainer>
        <Hero />
        <ClientTicker variant="light" />
        <Contact />
        <OperatingFormats />
        <OperatingSystem />
        <ClientProof />
        <Bridge />
        <Scale />
        <Footer />
      </ScrollContainer>
      <WhatsAppFloat />
      <LetsTalkFloat />
    </>
  );
}

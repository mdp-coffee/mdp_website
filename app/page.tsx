import { Hero } from "@/components/Hero";
import { ClientTicker } from "@/components/ClientTicker";
import { Scale } from "@/components/Scale";
import { Origin } from "@/components/Origin";
import { ClientProof } from "@/components/ClientProof";
import { OperatingFormats } from "@/components/OperatingFormats";
import { Bridge } from "@/components/Bridge";
import { OperatingSystem } from "@/components/OperatingSystem";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LetsTalkFloat } from "@/components/LetsTalkFloat";
import { ScrollContainer } from "@/components/ScrollContainer";

export default function HomePage() {
  return (
    <>
      <ScrollContainer>
        <Hero />
        <ClientTicker variant="dark" />
        <Scale />
        <OperatingFormats />
        <OperatingSystem />
        <Origin />
        <ClientProof />
        <Bridge />
        <Contact />
        <Footer />
      </ScrollContainer>
      <WhatsAppFloat />
      <LetsTalkFloat />
    </>
  );
}

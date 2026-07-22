import { Hero } from "@/components/Hero";
import { ClientTicker } from "@/components/ClientTicker";
import { Scale } from "@/components/Scale";
import { ClientProof } from "@/components/ClientProof";
import { Formats } from "@/components/Formats";
import { Bridge } from "@/components/Bridge";
import { OperatingSystem } from "@/components/OperatingSystem";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { Contact } from "@/components/Contact";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LetsTalkFloat } from "@/components/LetsTalkFloat";
import { ScrollContainer } from "@/components/ScrollContainer";
import { NavBar } from "@/components/NavBar";
import { HomePageJsonLd } from "@/components/JsonLd";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <HomePageJsonLd />
      <NavBar />
      <ScrollContainer>
        <Hero />
        <ClientTicker variant="light" />
        <Contact />
        <WhoWeAre />
        <Formats />
        <OperatingSystem />
        <GalleryTeaser />
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

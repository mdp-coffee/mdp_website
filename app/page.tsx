import { Hero } from "@/components/Hero";
import { ClientTicker } from "@/components/ClientTicker";
import { ClientProof } from "@/components/ClientProof";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Bridge } from "@/components/Bridge";
import { OperatingSystem } from "@/components/OperatingSystem";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { NewsUpdates } from "@/components/NewsUpdates";
import { BlogTeaser } from "@/components/BlogTeaser";
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
        <WhoWeAre />
        <WhatWeDo />
        <OperatingSystem />
        <GalleryTeaser />
        <NewsUpdates />
        <BlogTeaser />
        <ClientProof />
        <Bridge />
        <Footer />
      </ScrollContainer>
      <WhatsAppFloat />
      <LetsTalkFloat />
    </>
  );
}

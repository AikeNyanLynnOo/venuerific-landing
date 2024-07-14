import { Button } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PromotionSection from "@/components/sections/PromotionSection";
import VenueGridSection from "@/components/sections/VenueGridSection";
import SubscribeSection from "@/components/sections/SubscribeSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PromotionSection />
      <VenueGridSection />
      <SubscribeSection />
    </main>
  );
}

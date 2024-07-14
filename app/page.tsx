import { Button } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PromotionSection from "@/components/sections/PromotionSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PromotionSection />
    </main>
  );
}

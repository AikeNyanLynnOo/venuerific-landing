import { Button } from "@mui/material";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import PromotionSection from "@/components/sections/PromotionSection";
import VenueGridSection from "@/components/sections/VenueGridSection";
import SubscribeSection from "@/components/sections/SubscribeSection";
import FooterSection from "@/components/sections/FooterSection";
import { getVenues } from "@/lib/helpers/apiFunctions";
import { Suspense } from "react";

export default async function Home() {
  const { data } = await getVenues();

  return (
    <main>
      <Navbar />
      <HeroSection />
      <PromotionSection />
      <Suspense>
        <VenueGridSection
          venues={(data && data.data && data.data.venues) || []}
        />
      </Suspense>
      <SubscribeSection />
      <FooterSection />
    </main>
  );
}

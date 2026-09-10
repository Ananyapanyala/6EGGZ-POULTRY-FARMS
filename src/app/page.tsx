import Header from "@/components/layout/Header";
import Hero from "@/components/hero/HeroSection";
import Why6Eggz from "@/components/sections/Why6Eggz";
import HenStory from "@/components/sections/HenStory";
import EggRangeComparison from "@/components/sections/EggRangeComparison";
import EggJourney from "@/components/sections/EggJourney";
import Certifications from "@/components/sections/Certifications";
import CustomerReviews from "@/components/sections/CustomerReviews";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProudToSell from "@/components/sections/ProudToSell";
import FarmTale from "@/components/sections/FarmTale";
import Footer from "@/components/layout/Footer";
import { main } from "motion/react-m";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Why6Eggz />
        <HenStory />
        <EggRangeComparison />
        <EggJourney />
        <Certifications />
        <CustomerReviews />
        <BlogSection />
        <FAQSection />
        <BenefitsSection />
        <ProudToSell />
        <FarmTale />
        <Footer />
      </main>
    </>
  );
}

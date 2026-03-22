
import { Hero } from "@/components/sections/hero";
import { Gallery } from "@/components/sections/gallery";
import { Benefits } from "@/components/sections/benefits";
import { ExtraValue } from "@/components/sections/extra-value";
import { Testimonials } from "@/components/sections/testimonials";
import { ProfitSimulator } from "@/components/sections/profit-simulator";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { FooterCTA } from "@/components/sections/footer-cta";
import { Authority } from "@/components/sections/authority";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body">
      <Hero />
      <Gallery />
      <Benefits />
      <ExtraValue />
      <Testimonials />
      <ProfitSimulator />
      <Pricing />
      <Authority />
      <FooterCTA />
      <FAQ />
      <Footer />
    </main>
  );
}

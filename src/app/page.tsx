// Components
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Video } from "@/components/video";
import { Benefits } from "@/components/benefits";
import { HowToTake } from "@/components/how-to-take";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contraindications } from "@/components/contraindications";
import { Footer } from "@/components/footer";
import { ProductJsonLd } from "@/components/json-ld";

export default function HomePage() {
  return (
    <>
      <ProductJsonLd />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Video />
        <Benefits />
        <HowToTake />
        <Testimonials />
        <Faq />
        <Contraindications />
      </main>
      <Footer />
    </>
  );
}

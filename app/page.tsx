import ContactSection from "@/components/pages/home/contact";
import { Experience } from "@/components/pages/home/experience";
import { Hero } from "@/components/pages/home/hero";
import { Testimonials } from "@/components/pages/home/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero */}
      <Hero />
      {/* Experience */}
      <Experience />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact */}
      <ContactSection />
    </div>
  );
}

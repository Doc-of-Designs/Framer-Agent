import Hero from "@/components/home/Hero";
import SkillsMarquee from "@/components/home/SkillsMarquee";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import PortfolioSection from "@/components/home/PortfolioSection";
import ToolsExpertise from "@/components/home/ToolsExpertise";
import AboutBento from "@/components/about/AboutBento";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <SkillsMarquee />
      <ServicesCarousel />
      <PortfolioSection />
      <ToolsExpertise />
      <AboutBento />
      <Testimonials />
      <ContactSection />
    </main>
  );
}

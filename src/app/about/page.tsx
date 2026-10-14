import AboutIntro from "@/components/about/AboutIntro";
import CareerTimeline from "@/components/about/CareerTimeline";
import Hobbies from "@/components/about/Hobbies";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "About — Portfolio",
};

export default function AboutPage() {
  return (
    <main>
      <AboutIntro />

      <div className="px-6 py-10 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <CareerTimeline />
        </div>
      </div>

      <Hobbies />
      <ContactSection />
    </main>
  );
}

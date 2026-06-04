import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HowItWorks from "./components/home/HowItWorks";
import About from "./components/home/About";
import Testimonials from "./components/home/Testimonials";
import BeforeAfter from "./components/home/BeforeAfter";
import Contact from "./components/home/Contact";

export const metadata = {
  title: "Jimmy Cleans | House & Office Cleaning in North New Jersey",
  description:
    "Residential, commercial, window, post-construction, and power washing across North NJ. Serving Morristown, Montclair, Wayne, Paramus, Ridgewood and more since 2025. Free quotes.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <About />
      <Testimonials />
      <BeforeAfter />
      <Contact />
    </>
  );
}

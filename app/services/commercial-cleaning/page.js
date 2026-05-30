import ServicePage from "../../components/services/ServicePage";

export const metadata = {
  title: "Office & Commercial Cleaning in Northern NJ | Jimmy Cleans",
  description:
    "Commercial cleaning for offices, retail, and business spaces across North New Jersey. After-hours scheduling, custom plans, insured team. Get a free quote.",
};

const service = {
  icon: "Building2",
  title: "Commercial Cleaning",
  tagline: "A clean office is not just about appearances. Your team notices, and so do your clients.",
  pricing: "from $250",

  description:
    "We work around your hours so your business never has to slow down. Whether it's a small law office in Morristown, a retail space in Paramus, or a multi-floor building in Hackensack, we build a cleaning plan that fits how your business actually operates. The same crew shows up every time, so they know your space and you know who's in your building.",

  heroImage: "/commercialcleaning.png",
  heroObjectFit: "contain",

  images: [
    "/Commercialjimmy.png",
    "/commercial.png",
    "/commercial2.png",
  ],

  highlights: [
    "Evening, overnight, and weekend scheduling available",
    "Custom plan built around your business hours",
    "Disinfection and sanitization included",
    "Fully insured and bonded team",
    "Dedicated point of contact for your account",
  ],

  process: [
    {
      title: "We Walk the Space",
      desc: "We come to you, see the layout, understand foot traffic, and identify anything that needs special attention.",
    },
    {
      title: "We Build Your Plan",
      desc: "You get a cleaning schedule written around how your business runs, not a one-size-fits-all checklist.",
    },
    {
      title: "Consistent Service",
      desc: "Same crew, same standard, every time. You'll know what to expect because it never changes.",
    },
  ],

  faqs: [
    {
      q: "Can you clean after we close?",
      a: "Yes, we clean evenings, overnight, and weekends. Most of our commercial clients never see us, and that's exactly how they like it.",
    },
    {
      q: "Do you handle large buildings?",
      a: "Yes. From a single-floor office to a multi-story commercial building, we scale the crew to match the job.",
    },
    {
      q: "What areas do you serve for commercial cleaning?",
      a: "Throughout Northern New Jersey: Morristown, Hackensack, Paramus, Montclair, Clifton, Teaneck, and surrounding areas.",
    },
  ],
};

export default function CommercialCleaningPage() {
  return <ServicePage service={service} />;
}

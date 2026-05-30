import ServicePage from "../../components/services/ServicePage";

export const metadata = {
  title: "Power Washing Services in Northern NJ | Jimmy Cleans",
  description:
    "Power washing for driveways, patios, decks, siding, and fences across North New Jersey. Restore curb appeal fast. Free quotes from Jimmy Cleans.",
};

const service = {
  icon: "Zap",
  title: "Power Washing",
  tagline: "Years of buildup, gone in an afternoon.",
  pricing: "from $150",
  description:
    "Mold, algae, road grime, and weathering make surfaces look years older than they are. A good power wash doesn't just clean. It genuinely restores. We adjust pressure and detergent based on the surface so nothing gets damaged in the process. Driveways, patios, siding, decks, fences, walkways. If it's outside and it's dirty, we can make it look significantly better.",
  highlights: [
    "Removes mold, algae, oil stains, and embedded grime",
    "Restores curb appeal without harsh scrubbing",
    "Prevents long-term surface damage from buildup",
    "Eco-friendly detergents on every job",
    "Correct pressure for each surface. Nothing gets damaged",
  ],
  process: [
    { title: "We Check the Surface", desc: "We identify the material, the type of staining, and pick the right pressure and detergent before we start." },
    { title: "Pre-Treatment", desc: "For heavy buildup, we apply detergent first to loosen the grime before the main wash." },
    { title: "Power Wash and Rinse", desc: "We work in sections, rinsing as we go, until everything looks the way it should." },
  ],
  heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  images: [
    "/powerwashing1.png",
    "/powerwashing2.png",
    "/powerwashing3.png",
  ],
  faqs: [
    { q: "Will this damage my deck or pavers?", a: "No, we set the pressure specifically for the material. Soft washing for delicate surfaces, higher pressure only where it's safe." },
    { q: "How long do results last?", a: "Usually 1 to 2 years depending on weather. We offer annual maintenance plans to keep it looking good." },
    { q: "What surfaces can you power wash?", a: "Driveways, walkways, patios, decks, fences, siding, gutters, and more. If you're not sure, just ask." },
  ],
};

export default function PowerWashingPage() {
  return <ServicePage service={service} />;
}

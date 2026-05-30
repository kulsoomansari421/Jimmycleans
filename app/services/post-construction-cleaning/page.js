import ServicePage from "../../components/services/ServicePage";

export const metadata = {
  title: "Post-Construction Cleaning in NJ | Jimmy Cleans",
  description:
    "Construction dust, debris, and residue cleaned thoroughly after renovations or new builds in Northern New Jersey. Move-in ready results. Free quotes.",
};

const service = {
  icon: "HardHat",
  title: "Post-Construction Cleaning",
  tagline: "Construction is done. Now let's actually make it livable.",
  pricing: "Custom quote",

  description:
    "Drywall dust gets into everything: vents, cabinet shelves, door tracks, light fixtures. Regular cleaning doesn't cut it after a renovation. We come in with the right products and process to clear every surface, remove adhesive residue, clean up paint overspray, and leave the space genuinely move-in ready. Whether it's a single bathroom remodel or a full gut renovation, we've seen it before.",

  heroImage: "/postconstruction2.png",
  heroObjectFit: "contain",

  images: [
    "/postconstructionhero.png",
    "/postconstruction1.png",
    "/postconstruction2.png",
  ],

  highlights: [
    "All construction dust removed, including fine particles",
    "Adhesive, paint, and sticker residue cleaned off",
    "Floors, walls, fixtures, and windows detailed",
    "Air vents and HVAC dusting included",
    "Move-in ready. We won't leave until it's right",
  ],

  process: [
    {
      title: "Site Walkthrough",
      desc: "We assess the scope: what was done, what surfaces need the most attention, and any materials that need special treatment.",
    },
    {
      title: "Full Construction Clean",
      desc: "We work through every surface: scrubbing, polishing, removing residue, and getting into the spots that construction leaves behind.",
    },
    {
      title: "Final Inspection",
      desc: "A thorough walkthrough before we leave. If anything's not right, we fix it on the spot.",
    },
  ],

  faqs: [
    {
      q: "When can you come in after construction finishes?",
      a: "As soon as the job is done and the site is safe to walk through. We can usually schedule within a day or two.",
    },
    {
      q: "Can you remove paint and adhesive from surfaces?",
      a: "Yes, we use safe products that remove it without damaging finishes, floors, or fixtures.",
    },
    {
      q: "Do you work on both residential and commercial construction sites?",
      a: "Both. From home renovations in Morristown to commercial fit-outs in Hackensack, we handle all sizes.",
    },
  ],
};

export default function PostConstructionCleaningPage() {
  return <ServicePage service={service} />;
}

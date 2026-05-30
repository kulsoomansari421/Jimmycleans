import ServicePage from "../../components/services/ServicePage";

export const metadata = {
  title: "House Cleaning Service in North NJ | Residential Cleaning",
  description:
    "Jimmy Cleans offers home cleaning in Morristown, Montclair, Wayne, Paramus, Ridgewood and across Northern NJ. Weekly, bi-weekly, or one-time. Free quotes, no contracts.",
};

const service = {
  icon: "Home",
  title: "Residential Cleaning",
  tagline: "Your home should feel like a clean slate, not a chore you keep putting off.",
  pricing: "from $120",
  description:
    "We've cleaned a lot of homes across Northern New Jersey, and we know what actually makes a difference: getting the spots other cleaners skip. The grime around the faucet base. The grease behind the stove knobs. The dust that settles on top of the refrigerator. We clean all of it — every visit, not just the first one. Whether you want us weekly, every other week, or just once, you'll notice the difference.",
  highlights: [
    "Full deep clean of every room, top to bottom",
    "Eco-friendly products, safe for kids and pets",
    "Flexible scheduling: weekly, bi-weekly, or one-time",
    "Same cleaner every visit for consistency",
    "100% satisfaction. We come back if anything is not right",
  ],
  process: [
    { title: "Quick Chat", desc: "We talk through your home, what matters most to you, and any areas that need extra attention." },
    { title: "We Come and Clean", desc: "Our team shows up fully equipped and works through every room until it's done right." },
    { title: "You Check It Over", desc: "We do a walkthrough with you. If anything's off, we fix it before we leave." },
  ],
  heroImage: "/modernkitchencleaning.png",
  images: [
    "/modernkitchencleaning.png",
    "/residential1.png",
    "/residenialservice.png",
  ],
  faqs: [
    { q: "Do I need to be home while you clean?", a: "Nope. Most clients give us a key or entry code. We lock up when done and send you a message." },
    { q: "What cleaning products do you use?", a: "Eco-friendly, non-toxic products safe for kids, pets, and the environment. Have specific sensitivities? Just let us know." },
    { q: "What areas in Northern New Jersey do you serve?", a: "Morristown, Montclair, Wayne, Paramus, Ridgewood, Hackensack, Livingston, Madison, Chatham, and surrounding towns." },
  ],
};

export default function ResidentialCleaningPage() {
  return <ServicePage service={service} />;
}

import ServicePage from "../../components/services/ServicePage";

export const metadata = {
  title: "Window Cleaning in North New Jersey | Jimmy Cleans",
  description:
    "Professional window cleaning for homes and businesses in Morristown, Montclair, Wayne, and across Northern NJ. Inside and out, streak-free. Free quotes.",
};

const service = {
  icon: "Eye",
  title: "Window Cleaning",
  tagline: "Dirty windows make even a clean room look dull. We fix that.",
  pricing: "from $80",
  description:
    "You stop noticing how dirty your windows are until they're actually clean, and then it's obvious. We clean inside and out, including frames, sills, and screens. No streaks, no missed corners — just crystal-clear windows that instantly brighten your home or workspace. For homes in Morristown, offices in Montclair, or anything in between, we bring the right equipment and leave every pane spotless.",
  highlights: [
    "Inside and outside cleaning on every pane",
    "Screens removed, cleaned, and reinstalled",
    "Tracks and sills wiped down",
    "Streak-free finish, guaranteed",
    "Safe equipment for upper floors",
  ],
  process: [
    { title: "We Assess the Job", desc: "We count the windows, check access points, and note anything that needs special handling before we start." },
    { title: "Screens Off, Windows Cleaned", desc: "Screens come out, tracks get wiped, and every pane gets cleaned inside and out with professional tools." },
    { title: "Final Check", desc: "We reinstall screens, do a streak check on every window, and make sure nothing was missed." },
  ],
  heroImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=&q=80",
  images: [
    "/windowcleaningmain.png",
    "/windowcleaning2.png",
    "/windowcleaning3.png",
  ],
  faqs: [
    { q: "Do you clean second and third-floor windows?", a: "Yes. We have the right equipment and trained techs for upper-floor windows." },
    { q: "Do you clean the screens too?", a: "Yes, screens are included. We remove them, clean them, and put them back." },
    { q: "How often should windows be cleaned?", a: "Most homeowners do it once or twice a year. Businesses near busy roads often go quarterly. We'll give you an honest recommendation." },
  ],
};

export default function WindowCleaningPage() {
  return <ServicePage service={service} />;
}

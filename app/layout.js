import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Jimmy Cleans | House & Office Cleaning in North New Jersey",
    template: "%s | Jimmy Cleans NJ",
  },
  description:
    "Jimmy Cleans has been serving North New Jersey homes and businesses since 2016. Residential, commercial, window, post-construction, and power washing. Free quotes. No contracts.",
  keywords: [
    "cleaning services NJ",
    "house cleaning North New Jersey",
    "office cleaning NJ",
    "window cleaning New Jersey",
    "post construction cleaning NJ",
    "power washing NJ",
    "cleaning services Morristown NJ",
    "cleaning services Montclair NJ",
    "cleaning services Wayne NJ",
    "cleaning services Paramus NJ",
    "maid service NJ",
    "residential cleaning New Jersey",
    "commercial cleaning North Jersey",
  ],
  authors: [{ name: "Jimmy Cleans" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Jimmy Cleans | North New Jersey's Trusted Cleaning Service Since 2016",
    description:
      "Real cleaners, real results. Serving Morristown, Montclair, Wayne, Paramus, Ridgewood, and all of North NJ. Get a free quote today.",
    type: "website",
    locale: "en_US",
    siteName: "Jimmy Cleans",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jimmy Cleans NJ",
    description: "House & office cleaning across North New Jersey. Free quotes, no contracts.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased" style={{ background: "var(--background)" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Jimmy Cleans",
              "description": "Professional residential and commercial cleaning services in North New Jersey. Serving homes and businesses since 2016.",
              "url": "https://jimmycleans.com",
              "telephone": "+12015550100",
              "email": "jimmycleansnj@gmail.com",
              "logo": "https://jimmycleans.com/Jimmy Cleans Logo FF.png",
              "image": "https://jimmycleans.com/Website Cover Photo.png",
              "foundingDate": "2016",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "NJ",
                "addressCountry": "US",
                "addressLocality": "North New Jersey"
              },
              "areaServed": [
                "Morristown, NJ", "Montclair, NJ", "Wayne, NJ", "Paramus, NJ",
                "Ridgewood, NJ", "Hackensack, NJ", "Teaneck, NJ", "Livingston, NJ",
                "Madison, NJ", "Summit, NJ", "Chatham, NJ", "Florham Park, NJ",
                "Randolph, NJ", "Parsippany, NJ", "Clifton, NJ", "Nutley, NJ"
              ],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1200",
                "bestRating": "5",
                "worstRating": "1"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Residential Cleaning"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Commercial Cleaning"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Window Cleaning"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Post-Construction Cleaning"}},
                  {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Power Washing"}}
                ]
              }
            })
          }}
        />
        <Navbar />
        <main className="pb-20 sm:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

const nextConfig = {
  output: "export", // static site banane ke liye
  images: {
    unoptimized: true, // IMPORTANT for Hostinger
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};

export default nextConfig;
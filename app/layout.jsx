"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "./preloader";
import { useEffect, useState } from "react";
import Disclaimer from "./disclaimer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Track crypto whales with WhalePing. Features include Crypto Whale Tracker, Whale Alerts, On-Chain Analytics, DeFi Whale Tracker, and Blockchain Explorers." />
        <meta property="og:title" content="Whale Hunter - Track Crypto Whale Movements & Tools | WhalePing" />
        <meta property="og:description" content="Track crypto whales with WhalePing. Features include Crypto Whale Tracker, Whale Alerts, On-Chain Analytics, DeFi Whale Tracker, and Blockchain Explorers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whaleping.com" />
        <meta property="og:image" content="https://whaleping.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Whale Hunter - Track Crypto Whale Movements & Tools | WhalePing" />
        <meta name="twitter:description" content="Track crypto whales with WhalePing. Features include Crypto Whale Tracker, Whale Alerts, On-Chain Analytics, DeFi Whale Tracker, and Blockchain Explorers." />
        <meta name="twitter:image" content="https://whaleping.com/logo.png" />
        <title>Whale Hunter - Track Crypto Whale Movements & Tools | WhalePing</title>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WhalePing",
            "url": "https://whaleping.com",
            "logo": "https://whaleping.com/logo.png",
            "sameAs": [
              "https://twitter.com/whaleping",
              "https://www.facebook.com/whaleping"
            ]
          }
        `}} />
      </head>
      <body className={inter.className}>
        {!isLoaded ? <Preloader /> : children}

      </body>
    </html>
  );
}

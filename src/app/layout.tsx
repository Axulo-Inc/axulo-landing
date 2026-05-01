import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Hotjar from "@/components/Hotjar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axulo Technologies | Building the Future of Decentralized Intelligence",
  description: "Axulo Technologies provides secure, scalable, and production-ready solutions for decentralized intelligence and the modern web.",
  keywords: ["Axulo", "Technology", "Decentralized Intelligence", "Web3", "Infrastructure", "Scalable Solutions"],
  openGraph: {
    title: "Axulo Technologies",
    description: "Building the future of decentralized intelligence.",
    url: "https://axulo.com",
    siteName: "Axulo Technologies",
    images: [
      {
        url: "https://axulo.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axulo Technologies",
    description: "Building the future of decentralized intelligence.",
    creator: "@axulo_tech",
    images: ["https://axulo.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Placeholder IDs for Analytics */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <Hotjar hjid="0000000" hjsv="6" />
      </body>
    </html>
  );
}

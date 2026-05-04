import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Hotjar from '@/components/Hotjar';
import { analyticsConfig, siteConfig } from '@/lib/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Production-ready decentralized intelligence`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Axulo',
    'decentralized intelligence',
    'AI infrastructure',
    'secure orchestration',
    'production AI platform',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Production-ready decentralized intelligence`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.xHandle,
    title: `${siteConfig.name} | Production-ready decentralized intelligence`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
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
        <GoogleAnalytics gaId={analyticsConfig.gaId} />
        <Hotjar hjid={analyticsConfig.hotjarId} hjsv={analyticsConfig.hotjarVersion} />
      </body>
    </html>
  );
}

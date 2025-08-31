import type { Metadata } from "next";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Katapult - SaaS Sales Recruitment Agency",
  description: "We're not just recruiters; we're ex-SaaS-sellers. We score in four to katapult your growth. Leading SaaS sales recruitment in the Netherlands.",
  keywords: "SaaS recruitment, sales jobs, Netherlands, Amsterdam, B2B sales, recruitment agency",
  openGraph: {
    title: "Katapult - SaaS Sales Recruitment Agency",
    description: "We're not just recruiters; we're ex-SaaS-sellers. We score in four to katapult your growth.",
    url: "https://katapult.nl",
    siteName: "Katapult",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

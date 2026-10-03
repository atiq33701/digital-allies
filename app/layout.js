import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Digital Allies Dubai | SEO & Digital Marketing Agency",
    template: "%s | Digital Allies Dubai",
  },

  description:
    "Digital Allies Dubai helps businesses grow with SEO, Local SEO, Google Business Profile optimization, reputation management, social media marketing, and digital marketing solutions.",

  keywords: [
    "Digital Marketing Dubai",
    "SEO Agency Dubai",
    "SEO Dubai",
    "Local SEO Dubai",
    "Digital Marketing Agency Dubai",
    "Google Business Profile Dubai",
    "Reputation Management Dubai",
    "Social Media Marketing Dubai",
    "SEO Services Dubai",
  ],

  authors: [
    {
      name: "Digital Allies Dubai",
    },
  ],

  creator: "Digital Allies Dubai",
  publisher: "Digital Allies Dubai",

  metadataBase: new URL("https://yourdomain.com"),

  openGraph: {
    title: "Digital Allies Dubai | SEO & Digital Marketing Agency",
    description:
      "Grow your business with powerful SEO, Local SEO, reputation management, social media marketing and digital marketing solutions in Dubai.",
    url: "https://yourdomain.com",
    siteName: "Digital Allies Dubai",
    locale: "en_AE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Allies Dubai | SEO & Digital Marketing Agency",
    description:
      "SEO, Local SEO, reputation management and digital marketing solutions for businesses in Dubai.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
  <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
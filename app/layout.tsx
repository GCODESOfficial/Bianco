import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bianco | Zero Knowledge Privacy Wallet for EVM Chains",
  description: "Bianco is a zero knowledge privacy wallet enabling secure, anonymous transactions across Ethereum and EVM networks. Privacy by default.",
  keywords: "Bianco, zero knowledge wallet, privacy wallet, zk wallet, anonymous crypto, private transactions, EVM privacy, blockchain privacy, zk SNARKS",
  openGraph: {
    title: "Bianco | Private by Design",
    description: "Send and schedule private transactions across EVM chains using zero knowledge technology. No exposure. No traceability.",
    type: "website",
    images: [
      {
        url: "/Metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Bianco - Zero Knowledge Privacy Wallet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bianco | Privacy, Engineered",
    description: "A zero knowledge privacy utility for secure, anonymous transactions on EVM chains.",
    images: ["/Metadata.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astroshree - The best online Astrologers to get predictions",
  description: "Unlock the secrets of your destiny with Astroshree, where expert astrologers offer personalized predictions tailored to your life. Access a wide range of astrology services conveniently from anywhere, and embark on a journey of self-discovery and empowerment. Trust in Astroshree's accuracy and confidentiality to guide you towards a brighter future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

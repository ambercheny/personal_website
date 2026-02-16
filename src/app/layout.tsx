import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Website | Researcher & Innovator",
  description: "A researcher driven by the challenge of scaling healthcare accessibility. Building data solutions at the intersection of pioneering innovation and deep human empathy.",
  keywords: ["researcher", "healthcare", "data science", "biomedicine", "innovation"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Personal Website | Researcher & Innovator",
    description: "Building data solutions at the intersection of innovation and empathy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

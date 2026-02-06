import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/@layouts/Navbar";
import Footer from "@/@layouts/Footer";
import Container from "@/@layouts/Container";
import ThemeProvider from "@/@components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Movie Discovery",
    template: "%s | Movie Discovery",
  },
  description:
    "Browse top rated movies, explore genres, and discover details using TMDB.",
  openGraph: {
    title: "Movie Discovery",
    description:
      "Browse top rated movies, explore genres, and discover details using TMDB.",
    siteName: "Movie Discovery",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full bg-background`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Container>{children}</Container>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

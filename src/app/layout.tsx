import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import MysticalBackground from "@/components/MysticalBackground";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import SplashLoader from "@/components/SplashLoader";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mystical Magical — Your Modern Magick Shop",
  description: "Curated spiritual products, crystals, tarot readings, and mystical goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${playfairDisplay.variable} ${montserrat.variable} ${cinzel.variable} antialiased`}>
        <CartProvider>
          <SplashLoader />
          <MysticalBackground />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}

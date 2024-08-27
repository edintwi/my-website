import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edson Brandon - Em desenvolvimento",
  description: "Em desenvolvimento",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body className="px-20 py-10 xsm:py-10 xsm:px-5 xl:px-20">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

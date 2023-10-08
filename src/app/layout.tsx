import "./globals.scss";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Providers } from "./redux/Provider";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedexSepeti",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-DM_Serif",
});
const DmSans = DM_Sans({ subsets: ["latin"], variable: "--font-DM_Sans" });
export const metadata: Metadata = {
  title: "Tour camp",
  description: "A place to find your sansations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${DmSans.variable} font-DmSans`}>
        <div className="max-w-[90rem] px-5 mx-auto">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata = {
  title: "TRANQUIL MIND CENTER",
  description: "At Tranquil Mind Center, we use advanced NeuroStar TMS technology to provide safe, non-invasive, FDA-cleared treatment for depression and mood disorders. Experience real results with modern brain-focused healing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-233px)] lg:min-h-[calc(100vh-273px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

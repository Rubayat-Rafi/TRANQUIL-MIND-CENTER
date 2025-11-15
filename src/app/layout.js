import { Poppins, Montserrat } from "next/font/google";
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
  description: "At Tranquil Mind Center, we provide safe, effective, and FDA-approved Transcranial Magnetic Stimulation (TMS) therapy for depression, anxiety, OCD, PTSD, and other mood disorders. Our mission is simple: to restore hope, balance, and emotional wellbeing without the side effects of medication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-[calc(100vh-406px)] lg:min-h-[calc(100vh-446px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

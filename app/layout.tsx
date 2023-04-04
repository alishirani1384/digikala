import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Navbar from "@/components/Navbar/Navbar";
import localFont from "next/font/local";
import SideBar from "@/components/Sidebar/SideBar";
import Overlay from "@/components/Sidebar/Overlay";
import NavLinks from "@/components/Navbar/NavLinks";
import Footer from "@/components/Footer/Footer";

const myFont = localFont({
  src: "../assets/fonts/Vazir.ttf",
  display: "swap",
});

export const metadata = {
  title: "فروشگاه اینترنتی دیجیکالا",
  description: "Generated by create next app",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa-IR"
      dir="rtl"
      className={myFont.className + ` scroll-smooth`}>
      <body className="min-h-screen min-w-full flex flex-col">
        <header className="flex flex-col">
          <Navbar />
          <NavLinks />
        </header>
        <SideBar />
        <Overlay />
        <div className="w-full">{children}</div>
          <Footer />
      </body>
    </html>
  );
}

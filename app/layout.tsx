import './globals.css'
import Navbar from '@/components/Navbar';
import localFont from "next/font/local";
import SideBar from '@/components/SideBar';


const myFont = localFont({
  src: "./assets/fonts/Vazir.ttf",
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
  children: React.ReactNode
}) {
  return (
    <html lang="fa-IR" dir='rtl' className={myFont.className}>
      <body className='min-h-screen min-w-full'>
        <Navbar />
        <SideBar/>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

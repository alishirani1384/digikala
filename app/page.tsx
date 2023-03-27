import Services from "@/components/Services/Services";
import BannerSlider from "@/components/Slider/BannerSlider";



export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <BannerSlider />
      <div className="container">
        {/* @ts-expect-error Server Component */}
        <Services />
      </div>
    </div>
  );
}

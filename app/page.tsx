import Services from "@/components/Services/Services";
import BannerSlider from "@/components/BannerSlider/BannerSlider";
import OfferSlider from "@/components/OfferSlider/OfferSlider";
import Supermarket from "@/components/Ui/Supermarket";



export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <BannerSlider />
      <div className="container">
        {/* @ts-expect-error Server Component */}
        <Services />
      </div>
      <OfferSlider />
      <div className="container">
        <Supermarket/>
      </div>
    </div>
  );
}

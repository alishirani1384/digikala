import Slider from "@/components/Slider/Slider";
import Sanity from "./Sanity";


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Slider/>
      <Sanity/>
    </div>
  );
}

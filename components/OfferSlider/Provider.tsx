"use client";
import { useKeenSlider } from "keen-slider/react";
import React, { ReactNode, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Arrow from "../BannerSlider/Arrow";

function Provider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    rtl: true,
    slides: { perView: "auto", spacing: 5 },
  });

  useEffect(() => {
    if (slider) {
      setIsLoaded(true);
    }
  }, [slider]);
  return (
    <>
      {isLoaded && (
        <div ref={sliderRef} className="keen-slider min-h-full mr-6 relative">
          {children}
          <div className="absolute top-1/2 -translate-y-1/2 hidden lg:block">
            <Arrow
            Icon={MdOutlineKeyboardArrowLeft}
            onClick={() => slider.current?.next()}
          />
          </div> 
          <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden lg:block">
            <Arrow
            Icon={MdOutlineKeyboardArrowRight}
            onClick={() => slider.current?.prev()}
          />
          </div> 
        </div>
      )}
    </>
  );
}

export default Provider;

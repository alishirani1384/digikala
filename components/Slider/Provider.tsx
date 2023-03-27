"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Arrow from "./Arrow";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function Provider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const [sliderRef,slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );


  useEffect(() => {
    if (slider) {
        setIsLoaded(true)
    }
  }, [slider])
  
  return isLoaded ? (
    <div className="keen-slider" ref={sliderRef}>
      {children}
      <div className="absolute bottom-1/4 right-10 flex gap-4">
        <Arrow
          Icon={MdOutlineKeyboardArrowRight}
          onClick={() => slider.current?.next()}
        />
        <Arrow
          Icon={MdOutlineKeyboardArrowLeft}
          onClick={() => slider.current?.prev()}
        />
      </div>
    </div>
  ) : (
    <div className="h-64 w-full block bg-gray-300 animate-pulse"></div>
  );
}

export default Provider;

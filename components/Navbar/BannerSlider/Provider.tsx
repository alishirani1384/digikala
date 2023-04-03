"use client";
import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Arrow from "./Arrow";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Dots from "./Dots";

function Provider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [index, setIndex] = useState<number>(0);

  const [sliderRef,slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial:0,
      slideChanged(slider) {
        setIndex(slider.track.details.rel);
        
      } 
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
      <div className="absolute bottom-10 right-10 flex gap-4">
        <Arrow
          Icon={MdOutlineKeyboardArrowRight}
          onClick={() => slider.current?.next()}
        />
        <Arrow
          Icon={MdOutlineKeyboardArrowLeft}
          onClick={() => slider.current?.prev()}
        />
      </div>
      <Dots slider={slider} index={index} />
    </div>
  ) : (
    <div className="h-64 w-full block bg-gray-300 animate-pulse"></div>
  );
}

export default Provider;
